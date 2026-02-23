import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import MathQuestion from './components/MathQuestion';
import GardenVisual from './components/GardenVisual';
import ProgressBar from './components/ProgressBar';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import { ScreenCapture } from 'react-screen-capture';
import './GrowthGarden.css';

const AchievementCertificate = ({ userName, growthLevel, correctCount, accuracy, dailyProgress }) => {
    const motivations = [
        "Your math skills are blossoming like a beautiful flower! 🌸",
        "You're growing faster than the tallest tree! 🌳",
        "Amazing persistence! You're a true math explorer! 🌟",
        "Keep watering your mind with knowledge! 💧",
        "Your garden is a masterpiece of smart work! 🎨"
    ];
    // We want the quote to be stable during a single render session
    const [quote] = useState(() => motivations[Math.floor(Math.random() * motivations.length)]);

    return (
        <div id="achievement-report-frame" className="achievement-certificate">
            <div className="certificate-header">
                <div className="certificate-emoji">🏆</div>
                <h2 className="certificate-title">Math Champion Certificate</h2>
                <p className="certificate-subtitle">This honor is presented to:</p>
                <h3 className="gardener-name">{userName}</h3>
            </div>

            <div className="certificate-body">
                <div className="cert-stat-row">
                    <div className="cert-stat-box">
                        <span className="cert-stat-label">Correct Answers</span>
                        <span className="cert-stat-value">{correctCount}</span>
                    </div>
                    <div className="cert-stat-box">
                        <span className="cert-stat-label">Accuracy</span>
                        <span className="cert-stat-value">{accuracy}%</span>
                    </div>
                    <div className="cert-stat-box">
                        <span className="cert-stat-label">Growth Level</span>
                        <span className="cert-stat-value">{growthLevel}/5</span>
                    </div>
                </div>

                <div className="cert-visual-frame">
                    <div className="cert-plant">
                        {growthLevel === 0 ? '🌱' : growthLevel === 1 ? '🌿' : growthLevel === 2 ? '🪴' : growthLevel === 3 ? '🌲' : growthLevel === 4 ? '🌳' : '🏘️'}
                    </div>
                    <div className="cert-msg">{quote}</div>
                </div>
            </div>

            <div className="certificate-footer">
                <div className="cert-date">{new Date().toLocaleDateString()}</div>
                <div className="cert-signature-line">GrowthGarden Official Report</div>
            </div>
        </div>
    );
};

function GrowthGarden() {
    const navigate = useNavigate();
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [growthLevel, setGrowthLevel] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [totalAttempts, setTotalAttempts] = useState(0);
    const [showReport, setShowReport] = useState(false);
    const [userName, setUserName] = useState('Little Gardener');
    const [capturedImage, setCapturedImage] = useState(null);
    const [feedback, setFeedback] = useState({
        message: '🌱 Answer the question to grow your garden!',
        type: 'neutral',
    });
    const [animateKey, setAnimateKey] = useState(0);
    const [dailyProgress, setDailyProgress] = useState([
        { day: 'Mon', correct: 0 },
        { day: 'Tue', correct: 0 },
        { day: 'Wed', correct: 0 },
        { day: 'Thu', correct: 1 },
        { day: 'Fri', correct: 0 },
    ]);

    const generateQuestion = useCallback(() => {
        const a = Math.floor(Math.random() * 10) + 1;
        const b = Math.floor(Math.random() * 10) + 1;
        setNum1(a);
        setNum2(b);
        setUserAnswer('');
    }, []);

    useEffect(() => {
        generateQuestion();
    }, [generateQuestion]);

    const handleCapture = (screenCapture) => {
        setCapturedImage(screenCapture);
        // Automatically download immediately after capture
        handleDownload(screenCapture);

        if (showReport) {
            setTimeout(() => setShowReport(false), 800);
        }
    };

    const handleDownload = (dataToDownload) => {
        const base64Data = dataToDownload || capturedImage;
        if (!base64Data) return;

        try {
            const parts = base64Data.split(';base64,');
            const contentType = parts[0].split(':')[1];
            const raw = window.atob(parts[1]);
            const rawLength = raw.length;
            const uInt8Array = new Uint8Array(rawLength);

            for (let i = 0; i < rawLength; ++i) {
                uInt8Array[i] = raw.charCodeAt(i);
            }

            const blob = new Blob([uInt8Array], { type: contentType });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `GrowthGarden-Achievement-${userName.replace(/\s+/g, '-')}-${new Date().toLocaleDateString().replace(/\//g, '-')}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setTimeout(() => URL.revokeObjectURL(url), 100);
        } catch (error) {
            console.error("Download failed:", error);
        }
    };

    const handleSubmit = (injectedAnswer) => {
        const finalAnswer = injectedAnswer || userAnswer;
        if (finalAnswer.toString().trim() === '') return;

        const answer = parseInt(finalAnswer, 10);
        const correctAnswer = num1 + num2;

        setTotalAttempts((prev) => prev + 1);

        if (answer === correctAnswer) {
            const newCorrectCount = correctCount + 1;
            setCorrectCount(newCorrectCount);
            const newGrowthLevel = Math.min(growthLevel + 1, 5);
            setGrowthLevel(newGrowthLevel);
            setAnimateKey((prev) => prev + 1);

            const messages = [
                '🎉 Wonderful! Your plant is growing!',
                '⭐ Great job! Keep going!',
                '🌟 Amazing work! Look at your garden grow!',
                '💚 Perfect! You are doing so well!',
                '🌈 Fantastic! Your garden loves you!',
            ];
            const randomMsg = messages[Math.floor(Math.random() * messages.length)];

            if (newGrowthLevel >= 5) {
                setFeedback({
                    message: '🌳🏆 Your tree is fully grown! You are a math champion!',
                    type: 'correct',
                });
            } else {
                setFeedback({ message: randomMsg, type: 'correct' });
            }

            setDailyProgress((prev) => {
                const updated = [...prev];
                const todayIndex = updated.length - 1;
                updated[todayIndex] = {
                    ...updated[todayIndex],
                    correct: updated[todayIndex].correct + 1,
                };
                return updated;
            });

            // Automatic trigger for capture on correct answer
            // We use a delay to allow animations to show up
            setTimeout(() => {
                const triggerBtn = document.getElementById('capture-trigger');
                if (triggerBtn) triggerBtn.click();
                generateQuestion();
            }, 1500);
        } else {
            setFeedback({
                message: `💡 Almost! Try again. Hint: ${num1} + ${num2} is a little ${answer < correctAnswer ? 'more' : 'less'} than ${answer}.`,
                type: 'wrong',
            });
            setUserAnswer('');
        }
    };

    const handleReset = () => {
        setGrowthLevel(0);
        setCorrectCount(0);
        setTotalAttempts(0);
        setAnimateKey(0);
        setFeedback({
            message: '🌱 New garden started! Let\'s grow together!',
            type: 'neutral',
        });
        generateQuestion();
    };

    const accuracy = totalAttempts > 0 ? Math.round((correctCount / totalAttempts) * 100) : 0;

    return (
        <div className={`growth-garden-page ${growthLevel >= 5 ? 'fully-grown' : ''} fade-in`}>
            <header className="page-header">
                <button className="back-btn" onClick={() => navigate('/')}>
                    ← Back to Home
                </button>
                <h1 className="page-title">🌱 growth<span className="highlight">Garden</span></h1>
                <p className="page-subtitle">Visual Math Progress Tracker for Kids</p>
            </header>

            <ScreenCapture onEndCapture={handleCapture}>
                {({ onStartCapture }) => (
                    <div className="garden-layout">
                        {/* Hidden trigger for auto-capture */}
                        <button
                            id="capture-trigger"
                            style={{ display: 'none' }}
                            onClick={onStartCapture}
                        />

                        <div className="main-area">
                            <MathQuestion
                                num1={num1}
                                num2={num2}
                                userAnswer={userAnswer}
                                onAnswerChange={setUserAnswer}
                                onSubmit={handleSubmit}
                                feedback={feedback}
                            />

                            <div className="charts-area">
                                <div className="card chart-card">
                                    <div className="card-title">📅 Daily Progress</div>
                                    <div className="chart-container">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <BarChart data={dailyProgress}>
                                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                                                <XAxis dataKey="day" stroke="#a0a0b0" fontSize={12} />
                                                <YAxis stroke="#a0a0b0" fontSize={12} />
                                                <Tooltip
                                                    contentStyle={{
                                                        background: '#1a1a24',
                                                        border: '1px solid rgba(0, 212, 255, 0.2)',
                                                        borderRadius: '8px',
                                                        color: '#fff'
                                                    }}
                                                />
                                                <Bar
                                                    dataKey="correct"
                                                    fill="#00d4ff"
                                                    radius={[4, 4, 0, 0]}
                                                />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="sidebar-area">
                            <GardenVisual growthLevel={growthLevel} animateKey={animateKey} />

                            <div className="card stats-card">
                                <div className="card-title">📊 Progress</div>

                                <div className="user-name-box">
                                    <label>Gardener Name:</label>
                                    <input
                                        type="text"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <ProgressBar label="Sunlight" value={correctCount} max={5} emoji="☀️" type="sunlight" />
                                <ProgressBar label="Water" value={Math.min(totalAttempts, 10)} max={10} emoji="💧" type="water" />
                                <ProgressBar label="Growth" value={growthLevel} max={5} emoji="🌿" type="growth" />

                                <div className="stats-mini-grid">
                                    <div className="stat-box">
                                        <div className="stat-val">{accuracy}%</div>
                                        <div className="stat-lbl">Accuracy</div>
                                    </div>
                                    <div className="stat-box">
                                        <button className="reset-garden-btn" onClick={handleReset}>
                                            🔄 Reset
                                        </button>
                                    </div>
                                </div>

                                <div className="capture-controls">
                                    <button
                                        className="capture-btn achievement-report-btn"
                                        onClick={() => {
                                            setShowReport(true);
                                            setTimeout(onStartCapture, 100);
                                        }}
                                    >
                                        🏆 Get Certificate
                                    </button>

                                    {capturedImage && (
                                        <button
                                            className="download-btn pulse"
                                            onClick={handleDownload}
                                        >
                                            💾 Save Achievement
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Certificate View for Capture */}
                        {showReport && (
                            <div className="report-overlay fade-in">
                                <AchievementCertificate
                                    userName={userName}
                                    growthLevel={growthLevel}
                                    correctCount={correctCount}
                                    accuracy={accuracy}
                                    dailyProgress={dailyProgress}
                                />
                                <p className="report-hint">Generating your certificate... Please select the frame to save.</p>
                            </div>
                        )}
                    </div>
                )}
            </ScreenCapture>
        </div>
    );
}
export default GrowthGarden;
