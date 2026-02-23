import React from 'react';

function ProgressBar({ label, value, max, emoji, type }) {
    const percentage = Math.round((value / max) * 100);

    return (
        <div className="progress-bar-wrapper">
            <div className="progress-bar-label">
                <span>{emoji} {label}</span>
                <span>{value} / {max}</span>
            </div>
            <div className="progress-bar-track">
                <div
                    className={`progress-bar-fill ${type}`}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
}

export default ProgressBar;
