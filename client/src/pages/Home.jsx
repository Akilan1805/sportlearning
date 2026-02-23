import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const API_URL = 'http://localhost:5000/api';

function Home() {
    const [sports, setSports] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fact, setFact] = useState(null);
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        fetchSports();
        if (user?.favoriteSport) {
            fetchFact(user.favoriteSport);
        }
    }, [user]);

    const fetchSports = async () => {
        try {
            const response = await fetch(`${API_URL}/sports`);
            const data = await response.json();
            setSports(data);
        } catch (error) {
            console.error('Error fetching sports:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchFact = async (sport) => {
        try {
            const response = await fetch(`${API_URL}/facts/${sport}`);
            const data = await response.json();
            setFact(data);
        } catch (error) {
            console.error('Error fetching fact:', error);
        }
    };

    if (loading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Loading sports...</p>
            </div>
        );
    }

    return (
        <div className="home-page">
            <header className="home-header fade-in">
                <h1 className="home-title">
                    Learn <span className="highlight">Sports</span> Step by Step! 🏆
                </h1>
                <p className="home-subtitle">
                    Welcome back, {user?.username}! Choose a sport below to start learning.
                    Complete quizzes to earn points and climb the leaderboard!
                </p>
            </header>

            {fact && (
                <div className="fact-box fade-in" style={{ maxWidth: '700px', margin: '0 auto var(--spacing-2xl)' }}>
                    <div className="fact-title">
                        <span>📅</span> Today's {fact.sport.charAt(0).toUpperCase() + fact.sport.slice(1)} Fact
                    </div>
                    <p className="fact-content">{fact.fact}</p>
                </div>
            )}

            <div className="sports-grid">
                {sports.map((sport, index) => (
                    <Link
                        to={`/sport/${sport.id}`}
                        key={sport.id}
                        className="sport-card fade-in"
                        style={{
                            '--sport-color': sport.color,
                            animationDelay: `${index * 0.1}s`
                        }}
                    >
                        <span className="sport-icon">{sport.icon}</span>
                        <h2 className="sport-name">{sport.name}</h2>
                        <p className="sport-description">{sport.description}</p>
                        <div className="sport-action">
                            Start Learning <span>→</span>
                        </div>
                    </Link>
                ))}

                <div
                    className="sport-card fade-in"
                    onClick={() => navigate('/grow')}
                    style={{ '--sport-color': '#00d4ff' }}
                >
                    <span className="sport-icon">🌱</span>
                    <h2 className="sport-name">Growth Garden</h2>
                    <p className="sport-description">Visual Math Learning for Kids. Practice addition and watch your garden grow!</p>
                    <div className="sport-action">
                        Start Growing <span>→</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
