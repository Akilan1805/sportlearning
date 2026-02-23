import { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const API_URL = 'http://localhost:5000/api';

const sportsOptions = [
    { id: 'tennis', name: 'Tennis 🎾' },
    { id: 'football', name: 'Football ⚽' },
    { id: 'cricket', name: 'Cricket 🏏' },
    { id: 'basketball', name: 'Basketball 🏀' },
    { id: 'swimming', name: 'Swimming 🏊' },
    { id: 'badminton', name: 'Badminton 🏸' },
    { id: 'tabletennis', name: 'Table Tennis 🏓' },
    { id: 'running', name: 'Running 🏃' },
    { id: 'cycling', name: 'Cycling 🚴' },
    { id: 'yoga', name: 'Yoga 🧘' }
];

function Quiz() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { user, token, updateUserPoints } = useAuth();

    const [selectedSport, setSelectedSport] = useState(searchParams.get('sport') || '');
    const [difficulty, setDifficulty] = useState('');
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [quizComplete, setQuizComplete] = useState(false);
    const [pointsEarned, setPointsEarned] = useState(0);
    const [loading, setLoading] = useState(false);

    const startQuiz = async () => {
        if (!selectedSport || !difficulty) return;

        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/quiz/${selectedSport}/${difficulty}`);
            const data = await response.json();
            setQuestions(data);
            setCurrentQuestion(0);
            setScore(0);
            setQuizComplete(false);
        } catch (error) {
            console.error('Error fetching questions:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleAnswer = (answerIndex) => {
        if (showResult) return;

        setSelectedAnswer(answerIndex);
        setShowResult(true);

        if (answerIndex === questions[currentQuestion].answer) {
            setScore(prev => prev + 1);
        }
    };

    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
            setSelectedAnswer(null);
            setShowResult(false);
        } else {
            submitQuiz();
        }
    };

    const submitQuiz = async () => {
        const finalScore = score + (selectedAnswer === questions[currentQuestion].answer ? 1 : 0);

        try {
            const response = await fetch(`${API_URL}/quiz/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    sport: selectedSport,
                    difficulty,
                    score: finalScore,
                    totalQuestions: questions.length
                })
            });

            const data = await response.json();
            setPointsEarned(data.pointsEarned);
            updateUserPoints(data.totalPoints, true);
        } catch (error) {
            console.error('Error submitting quiz:', error);
        }

        setQuizComplete(true);
    };

    if (quizComplete) {
        const finalScore = score + (selectedAnswer === questions[currentQuestion]?.answer ? 1 : 0);
        const percentage = Math.round((finalScore / questions.length) * 100);

        return (
            <div className="quiz-container">
                <div className="question-card fade-in">
                    <div className="quiz-results">
                        <div className="results-icon">
                            {percentage >= 80 ? '🏆' : percentage >= 60 ? '🎉' : percentage >= 40 ? '👍' : '💪'}
                        </div>
                        <h2 className="results-title">
                            {percentage >= 80 ? 'Excellent!' : percentage >= 60 ? 'Great Job!' : percentage >= 40 ? 'Good Try!' : 'Keep Practicing!'}
                        </h2>
                        <div className="results-score">
                            {finalScore} / {questions.length}
                        </div>
                        <p className="results-points">
                            +{pointsEarned} points earned! ⭐
                        </p>
                        <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button onClick={() => {
                                setQuestions([]);
                                setDifficulty('');
                                setQuizComplete(false);
                            }} className="btn btn-secondary">
                                Try Again
                            </button>
                            <Link to="/leaderboard" className="btn btn-primary">
                                View Leaderboard
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (questions.length === 0) {
        return (
            <div className="quiz-container">
                <header className="quiz-header fade-in">
                    <h1 className="quiz-title">🎯 Sports Quiz Challenge</h1>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-xl)' }}>
                        Test your sports knowledge and earn points!
                    </p>
                </header>

                <div className="question-card fade-in">
                    <div className="form-group">
                        <label className="form-label">Choose a Sport</label>
                        <select
                            className="form-select"
                            value={selectedSport}
                            onChange={(e) => setSelectedSport(e.target.value)}
                        >
                            <option value="">Select a sport...</option>
                            {sportsOptions.map(sport => (
                                <option key={sport.id} value={sport.id}>{sport.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Select Difficulty</label>
                        <div className="difficulty-selector">
                            <button
                                className={`difficulty-btn easy ${difficulty === 'easy' ? 'active' : ''}`}
                                onClick={() => setDifficulty('easy')}
                            >
                                Easy (5 Qs, 1x points)
                            </button>
                            <button
                                className={`difficulty-btn medium ${difficulty === 'medium' ? 'active' : ''}`}
                                onClick={() => setDifficulty('medium')}
                            >
                                Medium (5 Qs, 2x points)
                            </button>
                            <button
                                className={`difficulty-btn hard ${difficulty === 'hard' ? 'active' : ''}`}
                                onClick={() => setDifficulty('hard')}
                            >
                                Hard (5 Qs, 3x points)
                            </button>
                        </div>
                    </div>

                    <button
                        className="btn btn-primary btn-large"
                        style={{ width: '100%', marginTop: 'var(--spacing-lg)' }}
                        onClick={startQuiz}
                        disabled={!selectedSport || !difficulty || loading}
                    >
                        {loading ? 'Loading...' : 'Start Quiz 🚀'}
                    </button>
                </div>
            </div>
        );
    }

    const currentQ = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;

    return (
        <div className="quiz-container">
            <div className="quiz-progress fade-in">
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                </div>
                <p className="progress-text">
                    Question {currentQuestion + 1} of {questions.length}
                </p>
            </div>

            <div className="question-card fade-in">
                <h2 className="question-text">{currentQ.question}</h2>

                <div className="options-grid">
                    {currentQ.options.map((option, index) => (
                        <button
                            key={index}
                            className={`option-btn ${selectedAnswer === index ? 'selected' : ''
                                } ${showResult && index === currentQ.answer ? 'correct' : ''
                                } ${showResult && selectedAnswer === index && index !== currentQ.answer ? 'incorrect' : ''
                                }`}
                            onClick={() => handleAnswer(index)}
                            disabled={showResult}
                        >
                            {option}
                        </button>
                    ))}
                </div>

                {showResult && (
                    <div style={{ marginTop: 'var(--spacing-xl)', textAlign: 'center' }}>
                        <p style={{
                            color: selectedAnswer === currentQ.answer ? 'var(--success)' : 'var(--error)',
                            fontSize: '1.2rem',
                            marginBottom: 'var(--spacing-md)'
                        }}>
                            {selectedAnswer === currentQ.answer ? '✅ Correct!' : '❌ Incorrect!'}
                        </p>
                        <button onClick={nextQuestion} className="btn btn-primary">
                            {currentQuestion < questions.length - 1 ? 'Next Question →' : 'See Results 🎉'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Quiz;
