import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const API_URL = 'http://localhost:5000/api';

function SportTutorial() {
    const { sportId } = useParams();
    const [sport, setSport] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        fetchSport();
    }, [sportId]);

    const fetchSport = async () => {
        try {
            const response = await fetch(`${API_URL}/sports/${sportId}`);
            const data = await response.json();
            setSport(data);
        } catch (error) {
            console.error('Error fetching sport:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Loading tutorial...</p>
            </div>
        );
    }

    if (!sport) {
        return (
            <div className="error-message">
                Sport not found. <Link to="/">Go back home</Link>
            </div>
        );
    }

    return (
        <div className="tutorial-container">
            <header className="tutorial-header fade-in">
                <span className="tutorial-icon">{sport.icon}</span>
                <h1 className="tutorial-title">{sport.name}</h1>
                <p className="tutorial-description">{sport.description}</p>
            </header>

            <div className="steps-container">
                {sport.steps.map((step, index) => (
                    <div
                        key={step.step}
                        className={`step-card fade-in ${index === currentStep ? 'active' : ''}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="step-number">{step.step}</div>
                        <div className="step-content">
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-description">{step.content}</p>
                            <div className="step-tip">
                                <div className="step-tip-label">💡 Pro Tip:</div>
                                <p className="step-tip-text">{step.tip}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="tutorial-actions">
                <Link to="/" className="btn btn-secondary">
                    ← Back to Sports
                </Link>
                <Link to={`/quiz?sport=${sportId}`} className="btn btn-primary">
                    Take Quiz 🎯
                </Link>
            </div>
        </div>
    );
}

export default SportTutorial;
