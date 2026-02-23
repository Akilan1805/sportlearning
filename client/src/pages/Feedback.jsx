import React, { useState } from 'react';

// Stateless Component - Star Rating Display
function StarDisplay({ filled, onClick, onHover }) {
    return (
        <span
            className={`star ${filled ? 'filled' : ''}`}
            onClick={onClick}
            onMouseEnter={onHover}
            style={{ cursor: 'pointer', fontSize: '2rem', transition: 'transform 0.2s' }}
        >
            {filled ? '⭐' : '☆'}
        </span>
    );
}

// Class Component - Feedback Statistics
class FeedbackStats extends React.Component {
    render() {
        const { totalSubmissions, averageRating } = this.props;
        return (
            <div className="feedback-stats">
                <div className="stat-item">
                    <span className="stat-number">{totalSubmissions}</span>
                    <span className="stat-label">Total Submissions</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">{averageRating.toFixed(1)}</span>
                    <span className="stat-label">Average Rating</span>
                </div>
            </div>
        );
    }
}

// Main Feedback Component (Function Component with Hooks)
function Feedback() {
    // State Management using useState Hook
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        rating: 0,
        category: '',
        feedback: '',
        recommend: ''
    });

    const [hoverRating, setHoverRating] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [submissions, setSubmissions] = useState([]);

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

    // Event Handler - Rating Click
    const handleRatingClick = (rating) => {
        setFormData(prev => ({ ...prev, rating }));
    };

    // Event Handler - Rating Hover
    const handleRatingHover = (rating) => {
        setHoverRating(rating);
    };

    // Form Validation
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (formData.rating === 0) newErrors.rating = 'Please select a rating';
        if (!formData.category) newErrors.category = 'Please select a category';
        if (!formData.feedback.trim()) newErrors.feedback = 'Feedback is required';
        if (!formData.recommend) newErrors.recommend = 'Please select an option';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Event Handler - Form Submit
    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateForm()) {
            // Add to submissions list
            setSubmissions(prev => [...prev, { ...formData, id: Date.now() }]);
            setSubmitted(true);

            // Reset form after 3 seconds
            setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    rating: 0,
                    category: '',
                    feedback: '',
                    recommend: ''
                });
                setSubmitted(false);
            }, 3000);
        }
    };

    // Calculate average rating
    const averageRating = submissions.length > 0
        ? submissions.reduce((acc, sub) => acc + sub.rating, 0) / submissions.length
        : 0;

    // Success Message Component
    if (submitted) {
        return (
            <div className="feedback-container">
                <div className="success-message">
                    <div className="success-icon">✅</div>
                    <h2>Thank You!</h2>
                    <p>Your feedback has been submitted successfully.</p>
                    <p>We appreciate your input and will use it to improve our platform!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="feedback-container">
            <div className="feedback-header">
                <h1 className="feedback-title">
                    <span className="highlight">Feedback</span> & Rating
                </h1>
                <p className="feedback-subtitle">
                    Help us improve the Sports Learning Platform! Your feedback matters.
                </p>
            </div>

            {submissions.length > 0 && (
                <FeedbackStats
                    totalSubmissions={submissions.length}
                    averageRating={averageRating}
                />
            )}

            <form className="feedback-form" onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="form-group">
                    <label className="form-label" htmlFor="name">
                        Your Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className={`form-input ${errors.name ? 'error' : ''}`}
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                {/* Email Field */}
                <div className="form-group">
                    <label className="form-label" htmlFor="email">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className={`form-input ${errors.email ? 'error' : ''}`}
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                {/* Star Rating */}
                <div className="form-group">
                    <label className="form-label">
                        Rate Your Experience *
                    </label>
                    <div
                        className="star-rating"
                        onMouseLeave={() => setHoverRating(0)}
                    >
                        {[1, 2, 3, 4, 5].map((star) => (
                            <StarDisplay
                                key={star}
                                filled={star <= (hoverRating || formData.rating)}
                                onClick={() => handleRatingClick(star)}
                                onHover={() => handleRatingHover(star)}
                            />
                        ))}
                        <span className="rating-text">
                            {formData.rating > 0 && `${formData.rating}/5`}
                        </span>
                    </div>
                    {errors.rating && <span className="error-text">{errors.rating}</span>}
                </div>

                {/* Category Dropdown */}
                <div className="form-group">
                    <label className="form-label" htmlFor="category">
                        Feedback Category *
                    </label>
                    <select
                        id="category"
                        name="category"
                        className={`form-select ${errors.category ? 'error' : ''}`}
                        value={formData.category}
                        onChange={handleInputChange}
                    >
                        <option value="">Select a category</option>
                        <option value="tutorials">Sports Tutorials</option>
                        <option value="quizzes">Quizzes & Games</option>
                        <option value="accessibility">Accessibility Features</option>
                        <option value="design">Design & UI</option>
                        <option value="performance">Performance</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.category && <span className="error-text">{errors.category}</span>}
                </div>

                {/* Feedback Textarea */}
                <div className="form-group">
                    <label className="form-label" htmlFor="feedback">
                        Your Feedback *
                    </label>
                    <textarea
                        id="feedback"
                        name="feedback"
                        className={`form-textarea ${errors.feedback ? 'error' : ''}`}
                        placeholder="Tell us how we can improve..."
                        rows="5"
                        value={formData.feedback}
                        onChange={handleInputChange}
                    />
                    {errors.feedback && <span className="error-text">{errors.feedback}</span>}
                </div>

                {/* Radio Buttons - Recommend */}
                <div className="form-group">
                    <label className="form-label">
                        Would you recommend this platform? *
                    </label>
                    <div className="radio-group">
                        <label className="radio-label">
                            <input
                                type="radio"
                                name="recommend"
                                value="yes"
                                checked={formData.recommend === 'yes'}
                                onChange={handleInputChange}
                            />
                            <span className="radio-custom"></span>
                            Yes, definitely!
                        </label>
                        <label className="radio-label">
                            <input
                                type="radio"
                                name="recommend"
                                value="maybe"
                                checked={formData.recommend === 'maybe'}
                                onChange={handleInputChange}
                            />
                            <span className="radio-custom"></span>
                            Maybe
                        </label>
                        <label className="radio-label">
                            <input
                                type="radio"
                                name="recommend"
                                value="no"
                                checked={formData.recommend === 'no'}
                                onChange={handleInputChange}
                            />
                            <span className="radio-custom"></span>
                            Not yet
                        </label>
                    </div>
                    {errors.recommend && <span className="error-text">{errors.recommend}</span>}
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary btn-large">
                    Submit Feedback 📤
                </button>
            </form>
        </div>
    );
}

export default Feedback;
