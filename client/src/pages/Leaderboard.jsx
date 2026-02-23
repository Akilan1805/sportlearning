import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const API_URL = 'http://localhost:5000/api';

function Leaderboard() {
    const [leaderboard, setLeaderboard] = useState([]);
    const [goals, setGoals] = useState(null);
    const [loading, setLoading] = useState(true);
    const { user, token } = useAuth();

    useEffect(() => {
        fetchLeaderboard();
        if (token) {
            fetchGoals();
        }

        const handleFocus = () => fetchLeaderboard();
        window.addEventListener('focus', handleFocus);

        return () => window.removeEventListener('focus', handleFocus);
    }, [token]);

    useEffect(() => {
        if (user) {
            fetchLeaderboard();
        }
    }, [user?.points]);

    const fetchLeaderboard = async () => {
        try {
            const response = await fetch(`${API_URL}/quiz/leaderboard/all`);
            const data = await response.json();
            setLeaderboard(data);
        } catch (error) {
            console.error('Error fetching leaderboard:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchGoals = async () => {
        try {
            const response = await fetch(`${API_URL}/quiz/goals/weekly`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            setGoals(data);
        } catch (error) {
            console.error('Error fetching goals:', error);
        }
    };

    const getSportEmoji = (sport) => {
        const emojis = {
            tennis: '🎾', football: '⚽', cricket: '🏏', basketball: '🏀',
            swimming: '🏊', badminton: '🏸', tabletennis: '🏓',
            running: '🏃', cycling: '🚴', yoga: '🧘'
        };
        return emojis[sport] || '🏅';
    };

    if (loading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Loading leaderboard...</p>
            </div>
        );
    }

    return (
        <div className="leaderboard-container">
            <header className="leaderboard-header fade-in">
                <h1 className="leaderboard-title">
                    <span className="trophy">🏆</span> Leaderboard
                </h1>
                <p style={{ color: 'var(--text-secondary)' }}>
                    Top sports learners! Complete quizzes to earn more points.
                </p>
                <button
                    onClick={() => { setLoading(true); fetchLeaderboard(); fetchGoals(); }}
                    className="btn btn-secondary"
                    style={{ marginTop: 'var(--spacing-md)' }}
                >
                    🔄 Refresh
                </button>
            </header>

            {/* Weekly Goals Section */}
            {goals && (
                <div className="fade-in" style={{ marginBottom: 'var(--spacing-2xl)' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)', color: 'var(--accent-primary)' }}>
                        🎯 Weekly Goals
                    </h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: 'var(--spacing-md)'
                    }}>
                        {goals.goals.map(goal => (
                            <div key={goal.id} style={{
                                background: goal.completed ? 'rgba(0, 230, 118, 0.1)' : 'var(--bg-card)',
                                border: `1px solid ${goal.completed ? 'var(--success)' : 'rgba(255,255,255,0.05)'}`,
                                borderRadius: 'var(--radius-md)',
                                padding: 'var(--spacing-lg)'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-sm)' }}>
                                    <span style={{ fontSize: '1.5rem' }}>{goal.icon}</span>
                                    {goal.completed && <span style={{ color: 'var(--success)', fontWeight: 'bold' }}>✅ Complete!</span>}
                                </div>
                                <h3 style={{ marginBottom: 'var(--spacing-xs)', fontSize: '1.1rem' }}>{goal.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 'var(--spacing-sm)' }}>
                                    {goal.description}
                                </p>
                                <div style={{
                                    background: 'var(--bg-secondary)',
                                    borderRadius: 'var(--radius-xl)',
                                    height: '8px',
                                    overflow: 'hidden',
                                    marginBottom: 'var(--spacing-xs)'
                                }}>
                                    <div style={{
                                        width: `${goal.progress}%`,
                                        height: '100%',
                                        background: goal.completed ? 'var(--success)' : 'var(--accent-gradient)',
                                        transition: 'width 0.3s ease'
                                    }}></div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                    <span>{goal.current} / {goal.target}</span>
                                    <span>+{goal.reward} pts reward</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* User Stats */}
            {user && (
                <div className="fact-box fade-in" style={{ maxWidth: '500px', margin: '0 auto var(--spacing-xl)' }}>
                    <div className="fact-title">Your Stats</div>
                    <p className="fact-content">
                        <strong>{user.username}</strong> • {user.points || 0} points • {user.quizzesTaken || 0} quizzes completed
                    </p>
                </div>
            )}

            {/* Leaderboard Table */}
            <div className="leaderboard-table fade-in">
                {leaderboard.length === 0 ? (
                    <div style={{ padding: 'var(--spacing-2xl)', textAlign: 'center', color: 'var(--text-secondary)' }}>
                        No players yet. Be the first to complete a quiz! 🎯
                    </div>
                ) : (
                    leaderboard.map((player, index) => (
                        <div
                            key={player._id}
                            className={`leaderboard-row ${index === 0 ? 'top-1' : index === 1 ? 'top-2' : index === 2 ? 'top-3' : ''}`}
                            style={{
                                background: player.username === user?.username ? 'rgba(0, 212, 255, 0.1)' : undefined
                            }}
                        >
                            <div className={`rank rank-${index + 1}`}>
                                {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : index + 1}
                            </div>
                            <div className="player-info">
                                <div className="player-avatar">
                                    {player.username.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <div className="player-name">
                                        {player.username}
                                        {player.username === user?.username && ' (You)'}
                                    </div>
                                    <div className="player-sport">
                                        {getSportEmoji(player.favoriteSport)} {player.favoriteSport} fan • {player.quizzesTaken || 0} quizzes
                                    </div>
                                </div>
                            </div>
                            <div className="player-points">
                                {player.points} pts
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Leaderboard;
