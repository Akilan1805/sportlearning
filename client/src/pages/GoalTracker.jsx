import React, { useState } from 'react';

// Stateless Component - Goal Progress Bar
function ProgressBar({ progress, color }) {
    return (
        <div className="goal-progress-bar">
            <div
                className="goal-progress-fill"
                style={{ width: `${progress}%`, background: color }}
            />
            <span className="goal-progress-text">{progress}%</span>
        </div>
    );
}

// Class Component - Goal Statistics Display
class GoalStats extends React.Component {
    render() {
        const { totalGoals, completedGoals } = this.props;
        const completionRate = totalGoals > 0 ? Math.round((completedGoals / totalGoals) * 100) : 0;

        return (
            <div className="goal-stats">
                <div className="stat-card">
                    <span className="stat-icon">🎯</span>
                    <span className="stat-value">{totalGoals}</span>
                    <span className="stat-label">Total Goals</span>
                </div>
                <div className="stat-card">
                    <span className="stat-icon">✅</span>
                    <span className="stat-value">{completedGoals}</span>
                    <span className="stat-label">Completed</span>
                </div>
                <div className="stat-card">
                    <span className="stat-icon">📈</span>
                    <span className="stat-value">{completionRate}%</span>
                    <span className="stat-label">Success Rate</span>
                </div>
            </div>
        );
    }
}

// Main Goal Tracker Component (Function Component with Hooks)
function GoalTracker() {
    // State Management using useState Hook
    const [formData, setFormData] = useState({
        goalTitle: '',
        sport: '',
        targetDate: '',
        difficulty: '',
        description: '',
        priority: 'medium'
    });

    const [goals, setGoals] = useState([]);
    const [errors, setErrors] = useState({});
    const [showSuccess, setShowSuccess] = useState(false);

    const sportOptions = [
        { value: 'tennis', label: '🎾 Tennis' },
        { value: 'football', label: '⚽ Football' },
        { value: 'cricket', label: '🏏 Cricket' },
        { value: 'basketball', label: '🏀 Basketball' },
        { value: 'swimming', label: '🏊 Swimming' },
        { value: 'badminton', label: '🏸 Badminton' },
        { value: 'running', label: '🏃 Running' },
        { value: 'cycling', label: '🚴 Cycling' },
        { value: 'yoga', label: '🧘 Yoga' }
    ];

    // Event Handler - Input Change
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    // Event Handler - Priority Selection
    const handlePriorityClick = (priority) => {
        setFormData(prev => ({ ...prev, priority }));
    };

    // Form Validation
    const validateForm = () => {
        const newErrors = {};
        if (!formData.goalTitle.trim()) newErrors.goalTitle = 'Goal title is required';
        if (!formData.sport) newErrors.sport = 'Please select a sport';
        if (!formData.targetDate) newErrors.targetDate = 'Target date is required';
        if (!formData.difficulty) newErrors.difficulty = 'Please select difficulty level';
        if (!formData.description.trim()) newErrors.description = 'Description is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Event Handler - Form Submit
    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateForm()) {
            const newGoal = {
                ...formData,
                id: Date.now(),
                progress: 0,
                createdAt: new Date().toLocaleDateString(),
                completed: false
            };

            setGoals(prev => [...prev, newGoal]);
            setShowSuccess(true);

            // Reset form
            setTimeout(() => {
                setFormData({
                    goalTitle: '',
                    sport: '',
                    targetDate: '',
                    difficulty: '',
                    description: '',
                    priority: 'medium'
                });
                setShowSuccess(false);
            }, 2000);
        }
    };

    // Event Handler - Update Progress
    const handleProgressUpdate = (goalId, newProgress) => {
        setGoals(prev => prev.map(goal =>
            goal.id === goalId
                ? { ...goal, progress: newProgress, completed: newProgress >= 100 }
                : goal
        ));
    };

    // Event Handler - Delete Goal
    const handleDeleteGoal = (goalId) => {
        setGoals(prev => prev.filter(goal => goal.id !== goalId));
    };

    const completedGoals = goals.filter(g => g.completed).length;

    return (
        <div className="goal-tracker-container">
            <div className="goal-header">
                <h1 className="goal-title">
                    <span className="highlight">Sports Goal</span> Tracker
                </h1>
                <p className="goal-subtitle">
                    Set your sports learning goals and track your progress! 🎯
                </p>
            </div>

            {goals.length > 0 && (
                <GoalStats
                    totalGoals={goals.length}
                    completedGoals={completedGoals}
                />
            )}

            {/* Goal Form */}
            <form className="goal-form" onSubmit={handleSubmit}>
                <h2 className="form-section-title">Create New Goal</h2>


                {showSuccess && (
                    <div className="success-alert">
                        ✅ Goal created successfully!
                    </div>
                )}

                {/* Goal Title */}
                <div className="form-group">
                    <label className="form-label" htmlFor="goalTitle">
                        Goal Title *
                    </label>
                    <input
                        type="text"
                        id="goalTitle"
                        name="goalTitle"
                        className={`form-input ${errors.goalTitle ? 'error' : ''}`}
                        placeholder="e.g., Learn to serve in Tennis"
                        value={formData.goalTitle}
                        onChange={handleInputChange}
                    />
                    {errors.goalTitle && <span className="error-text">{errors.goalTitle}</span>}
                </div>

                {/* Sport Selection */}
                <div className="form-group">
                    <label className="form-label" htmlFor="sport">
                        Select Sport *
                    </label>
                    <select
                        id="sport"
                        name="sport"
                        className={`form-select ${errors.sport ? 'error' : ''}`}
                        value={formData.sport}
                        onChange={handleInputChange}
                    >
                        <option value="">Choose a sport...</option>
                        {sportOptions.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    {errors.sport && <span className="error-text">{errors.sport}</span>}
                </div>

                {/* Target Date */}
                <div className="form-group">
                    <label className="form-label" htmlFor="targetDate">
                        Target Completion Date *
                    </label>
                    <input
                        type="date"
                        id="targetDate"
                        name="targetDate"
                        className={`form-input ${errors.targetDate ? 'error' : ''}`}
                        value={formData.targetDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                    />
                    {errors.targetDate && <span className="error-text">{errors.targetDate}</span>}
                </div>

                {/* Difficulty Level - Radio Buttons */}
                <div className="form-group">
                    <label className="form-label">
                        Difficulty Level *
                    </label>
                    <div className="radio-group">
                        <label className="radio-label">
                            <input
                                type="radio"
                                name="difficulty"
                                value="beginner"
                                checked={formData.difficulty === 'beginner'}
                                onChange={handleInputChange}
                            />
                            <span className="radio-custom"></span>
                            🌱 Beginner
                        </label>
                        <label className="radio-label">
                            <input
                                type="radio"
                                name="difficulty"
                                value="intermediate"
                                checked={formData.difficulty === 'intermediate'}
                                onChange={handleInputChange}
                            />
                            <span className="radio-custom"></span>
                            🌿 Intermediate
                        </label>
                        <label className="radio-label">
                            <input
                                type="radio"
                                name="difficulty"
                                value="advanced"
                                checked={formData.difficulty === 'advanced'}
                                onChange={handleInputChange}
                            />
                            <span className="radio-custom"></span>
                            🌳 Advanced
                        </label>
                    </div>
                    {errors.difficulty && <span className="error-text">{errors.difficulty}</span>}
                </div>

                {/* Priority Buttons */}
                <div className="form-group">
                    <label className="form-label">Priority Level</label>
                    <div className="priority-buttons">
                        <button
                            type="button"
                            className={`priority-btn low ${formData.priority === 'low' ? 'active' : ''}`}
                            onClick={() => handlePriorityClick('low')}
                        >
                            Low
                        </button>
                        <button
                            type="button"
                            className={`priority-btn medium ${formData.priority === 'medium' ? 'active' : ''}`}
                            onClick={() => handlePriorityClick('medium')}
                        >
                            Medium
                        </button>
                        <button
                            type="button"
                            className={`priority-btn high ${formData.priority === 'high' ? 'active' : ''}`}
                            onClick={() => handlePriorityClick('high')}
                        >
                            High
                        </button>
                    </div>
                </div>

                {/* Description */}
                <div className="form-group">
                    <label className="form-label" htmlFor="description">
                        Goal Description *
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        className={`form-textarea ${errors.description ? 'error' : ''}`}
                        placeholder="Describe what you want to achieve..."
                        rows="4"
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                    {errors.description && <span className="error-text">{errors.description}</span>}
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary btn-large">
                    Create Goal 🚀
                </button>
            </form>

            {/* Goals List */}
            {goals.length > 0 && (
                <div className="goals-list">
                    <h2 className="form-section-title">Your Goals</h2>
                    {goals.map(goal => (
                        <div key={goal.id} className={`goal-card ${goal.completed ? 'completed' : ''}`}>
                            <div className="goal-card-header">
                                <h3 className="goal-card-title">
                                    {goal.completed && '✅ '}{goal.goalTitle}
                                </h3>
                                <span className={`priority-badge ${goal.priority}`}>
                                    {goal.priority}
                                </span>
                            </div>
                            <p className="goal-card-sport">
                                {sportOptions.find(s => s.value === goal.sport)?.label}
                            </p>
                            <p className="goal-card-desc">{goal.description}</p>
                            <div className="goal-card-meta">
                                <span>🎯 Target: {goal.targetDate}</span>
                                <span>📅 Created: {goal.createdAt}</span>
                            </div>
                            <div className="goal-card-progress">
                                <label>Progress:</label>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={goal.progress}
                                    onChange={(e) => handleProgressUpdate(goal.id, parseInt(e.target.value))}
                                />
                                <ProgressBar progress={goal.progress} color={goal.completed ? '#00e676' : '#00d4ff'} />
                            </div>
                            <button
                                className="btn-delete"
                                onClick={() => handleDeleteGoal(goal.id)}
                            >
                                🗑️ Delete
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default GoalTracker;
