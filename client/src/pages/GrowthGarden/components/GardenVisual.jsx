import React from 'react';

function GardenVisual({ growthLevel, animateKey }) {
    // Map growth level to emoji
    const growthEmojis = ['🌱', '🌿', '🌿', '🪴', '🪴', '🌳'];
    const currentEmoji = growthEmojis[growthLevel] || '🌱';

    // Labels for each stage
    const stageLabels = [
        'Seed Stage',
        'Sprouting',
        'Growing Strong',
        'Young Plant',
        'Almost a Tree',
        'Grand Garden Tree 🌳'
    ];

    return (
        <div className="card garden-visual-card">
            <div className="card-title">🏡 Your Garden</div>
            <div className="garden-scene">
                <div className="garden-ground"></div>
                <div
                    key={animateKey}
                    className={`plant-emoji float-gentle ${animateKey > 0 ? 'growth-animate' : ''}`}
                >
                    {currentEmoji}
                </div>
            </div>
            <div className="stage-label">{stageLabels[growthLevel]}</div>
            {growthLevel >= 5 && (
                <div className="achievement-badge shadow-pop">
                    🏆 Garden Champion!
                </div>
            )}
        </div>
    );
}

export default GardenVisual;
