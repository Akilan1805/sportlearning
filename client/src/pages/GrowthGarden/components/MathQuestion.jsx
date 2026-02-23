import React from 'react';

function MathQuestion({ num1, num2, userAnswer, onAnswerChange, onSubmit, feedback }) {
    const [wiggle, setWiggle] = React.useState(false);
    const [clickedSet, setClickedSet] = React.useState(new Set());
    const [basketItems, setBasketItems] = React.useState([]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSubmit();
        } else if (/[0-9]/.test(e.key)) {
            setWiggle(false);
        } else if (e.key !== 'Backspace' && e.key !== 'Tab') {
            setWiggle(true);
            setTimeout(() => setWiggle(false), 400);
        }
    };

    const handleIconClick = (id) => {
        setClickedSet(prev => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    const onDragStart = (e, icon) => {
        e.dataTransfer.setData('text/plain', icon);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const icon = e.dataTransfer.getData('text');
        setBasketItems(prev => [...prev, icon]);
    };

    const allowDrop = (e) => e.preventDefault();

    return (
        <div className="card math-question-card">
            <div className="card-title">🎒 Math Quest</div>
            <div className="question-display fade-in">
                <div className="visual-math-grid">
                    <div className="object-group">
                        {Array(num1).fill(0).map((_, i) => (
                            <span
                                key={`num1-${i}`}
                                draggable
                                onDragStart={(e) => onDragStart(e, '🍎')}
                                onClick={() => handleIconClick(`num1-${i}`)}
                                className={`math-icon interactive-icon ${clickedSet.has(`num1-${i}`) ? 'counted' : ''}`}
                                onMouseEnter={(e) => e.target.classList.add('pop-effect')}
                                onMouseLeave={(e) => e.target.classList.remove('pop-effect')}
                            >
                                🍎
                            </span>
                        ))}
                        <div className="group-label">{num1}</div>
                    </div>

                    <div className="math-operator">+</div>

                    <div className="object-group">
                        {Array(num2).fill(0).map((_, i) => (
                            <span
                                key={`num2-${i}`}
                                draggable
                                onDragStart={(e) => onDragStart(e, '🍎')}
                                onClick={() => handleIconClick(`num2-${i}`)}
                                className={`math-icon interactive-icon ${clickedSet.has(`num2-${i}`) ? 'counted' : ''}`}
                                onMouseEnter={(e) => e.target.classList.add('pop-effect')}
                                onMouseLeave={(e) => e.target.classList.remove('pop-effect')}
                            >
                                🍎
                            </span>
                        ))}
                        <div className="group-label">{num2}</div>
                    </div>

                    <div className="math-operator">=</div>

                    <div
                        className="basket-area"
                        onDragOver={allowDrop}
                        onDrop={handleDrop}
                    >
                        <div className={`basket ${basketItems.length > 0 ? 'not-empty' : ''} ${basketItems.length === (num1 + num2) ? 'correct-count' : ''}`}>
                            🧺
                            <div className="basket-count">{basketItems.length > 0 ? basketItems.length : '?'}</div>
                        </div>
                        <div className="basket-items">
                            {basketItems.map((item, i) => (
                                <span key={i} className="dropped-item">🍎</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="interaction-hint">
                {basketItems.length === 0 ? "👉 Click to count or Drag apples to the basket!" : `Great! You've collected ${basketItems.length} apples.`}
            </div>

            <div className="answer-section">
                <input
                    type="number"
                    className={`answer-input ${wiggle ? 'wiggle-error' : ''} ${userAnswer == (num1 + num2) ? 'success-pulse' : ''}`}
                    value={userAnswer}
                    onChange={(e) => onAnswerChange(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="?"
                    autoFocus
                />
                <button className="submit-btn" onClick={() => {
                    const finalAnswer = userAnswer.trim() === '' ? basketItems.length.toString() : userAnswer;
                    onSubmit(finalAnswer);
                    setBasketItems([]);
                    setClickedSet(new Set());
                }}>
                    Grow! 🌱
                </button>
            </div>
            <div className={`feedback ${feedback.type} fade-in`}>
                {feedback.message}
            </div>
        </div>
    );
}

export default MathQuestion;
