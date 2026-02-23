import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <span className="logo-bracket">&lt;</span>
                    <span className="logo-icon">🏆</span>
                    <span>Sports</span>
                    <span className="logo-bracket">/&gt;</span>
                </Link>

                <ul className="navbar-nav">
                    <li>
                        <Link to="/" className="navbar-link">Home</Link>
                    </li>
                    <li>
                        <Link to="/quiz" className="navbar-link">Quiz</Link>
                    </li>
                    <li>
                        <Link to="/leaderboard" className="navbar-link">Leaderboard</Link>
                    </li>
                    <li>
                        <Link to="/goals" className="navbar-link">Goals</Link>
                    </li>
                </ul>

                {user && (
                    <div className="navbar-user">
                        <div className="user-points">
                            <span>⭐</span>
                            <span>{user.points} pts</span>
                        </div>
                        <span className="user-name">Hi, {user.username}!</span>
                        <button onClick={handleLogout} className="btn-logout">
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
