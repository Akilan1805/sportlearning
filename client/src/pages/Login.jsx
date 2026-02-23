import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const API_URL = 'http://localhost:5000/api';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [fact, setFact] = useState(null);
    const { login, user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);

    useEffect(() => {
        // Fetch a random sport fact for the login page
        const sports = ['tennis', 'football', 'cricket', 'basketball', 'swimming'];
        const randomSport = sports[Math.floor(Math.random() * sports.length)];

        fetch(`${API_URL}/facts/${randomSport}`)
            .then(res => res.json())
            .then(data => setFact(data))
            .catch(err => console.log('Could not fetch fact'));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card fade-in">
                <div className="auth-header">
                    <div className="auth-logo">🏆</div>
                    <h1 className="auth-title">
                        Welcome to <span className="highlight">Sports Learning</span>
                    </h1>
                    <p className="auth-subtitle">Sign in to continue your sports journey!</p>
                </div>

                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary btn-large" style={{ width: '100%' }} disabled={loading}>
                        {loading ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>

                <p className="auth-footer">
                    Don't have an account? <Link to="/signup" className="auth-link">Sign Up</Link>
                </p>

                {fact && (
                    <div className="fact-box">
                        <div className="fact-title">
                            <span>📅</span> Today's Sports Fact
                        </div>
                        <p className="fact-content">{fact.fact}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login;
