# React Concepts - Code Proof Documentation
## Sports Learning Platform

This document maps each React concept from TutorialsPoint to the exact code locations in your project. Use these for screenshots!

---

## 1. FUNCTION COMPONENT ✅

**File:** `client/src/pages/GoalTracker.jsx` - Lines 4-14
**Also in:** `Login.jsx`, `Quiz.jsx`, `Home.jsx`, `Navbar.jsx`

```jsx
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
```

**Another Example - Main GoalTracker Function Component (Lines 44-320):**
```jsx
function GoalTracker() {
    // State, event handlers, JSX...
}
export default GoalTracker;
```

---

## 2. CLASS COMPONENT ✅

**File:** `client/src/pages/GoalTracker.jsx` - Lines 16-42

```jsx
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
```

---

## 3. EVENT HANDLING ✅

**File:** `client/src/pages/GoalTracker.jsx` - Lines 72-88

```jsx
// Event Handler - Input Change
const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
        ...prevData,
        [name]: value
    }));
};

// Event Handler - Priority Selection (onClick)
const handlePriorityClick = (priority) => {
    setFormData(prev => ({ ...prev, priority }));
};
```

**Form Submit Event (Lines 97-120):**
```jsx
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
    }
};
```

**JSX Event Binding:**
```jsx
<form onSubmit={handleSubmit}>
<input onChange={handleInputChange} />
<button onClick={() => handlePriorityClick('high')}>
<input type="range" onChange={(e) => handleProgressUpdate(goalId, parseInt(e.target.value))} />
```

---

## 4. STATE MANAGEMENT ✅

**File:** `client/src/pages/GoalTracker.jsx` - Lines 47-58

```jsx
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
```

**Also - Context State (`AuthContext.jsx` Lines 7-10):**
```jsx
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [loading, setLoading] = useState(true);
```

---

## 5. STATELESS COMPONENT ✅

**File:** `client/src/pages/GoalTracker.jsx` - Lines 4-14

```jsx
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
```
*Note: This component has NO internal state - it only receives props and renders UI.*

---

## 6. FORMS ✅

**File:** `client/src/pages/GoalTracker.jsx` - Lines 155-290

```jsx
<form className="goal-form" onSubmit={handleSubmit}>
    {/* Text Input */}
    <input
        type="text"
        id="goalTitle"
        name="goalTitle"
        placeholder="e.g., Learn to serve in Tennis"
        value={formData.goalTitle}
        onChange={handleInputChange}
    />

    {/* Select Dropdown */}
    <select
        id="sport"
        name="sport"
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

    {/* Date Input */}
    <input
        type="date"
        id="targetDate"
        name="targetDate"
        value={formData.targetDate}
        onChange={handleInputChange}
    />

    {/* Radio Buttons */}
    <input
        type="radio"
        name="difficulty"
        value="beginner"
        checked={formData.difficulty === 'beginner'}
        onChange={handleInputChange}
    />

    {/* Textarea */}
    <textarea
        id="description"
        name="description"
        placeholder="Describe what you want to achieve..."
        value={formData.description}
        onChange={handleInputChange}
    />

    {/* Range Slider */}
    <input
        type="range"
        min="0"
        max="100"
        value={goal.progress}
        onChange={(e) => handleProgressUpdate(goal.id, parseInt(e.target.value))}
    />

    {/* Submit Button */}
    <button type="submit" className="btn btn-primary">
        Create Goal 🚀
    </button>
</form>
```

---

## BONUS CONCEPTS (Hooks and Routing)

### HOOKS ✅

**useState Hook** - `GoalTracker.jsx` Line 1, 47-58
```jsx
import React, { useState } from 'react';
const [formData, setFormData] = useState({...});
const [goals, setGoals] = useState([]);
```

**useEffect Hook** - `Login.jsx` Lines 16-31
```jsx
useEffect(() => {
    if (user) {
        navigate('/');
    }
}, [user, navigate]);

useEffect(() => {
    // Fetch a random sport fact for the login page
    fetch(`${API_URL}/facts/${randomSport}`)
        .then(res => res.json())
        .then(data => setFact(data));
}, []);
```

**useContext Hook** - `AuthContext.jsx` Lines 110-116
```jsx
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
```

**useNavigate Hook** - `Login.jsx` Line 14
```jsx
const navigate = useNavigate();
```

---

### ROUTING ✅

**File:** `client/src/App.jsx` - Lines 1, 35-104

```jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

<Router>
    <AuthProvider>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
            <Route path="/sport/:sportId" element={<SportTutorial />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/goals" element={<GoalTracker />} />
        </Routes>
    </AuthProvider>
</Router>
```

**Link Component** - `Navbar.jsx` Lines 16, 25-36
```jsx
import { Link } from 'react-router-dom';

<Link to="/" className="navbar-link">Home</Link>
<Link to="/quiz" className="navbar-link">Quiz</Link>
<Link to="/leaderboard" className="navbar-link">Leaderboard</Link>
<Link to="/goals" className="navbar-link">Goals</Link>
```

---

## SUMMARY TABLE

| Concept | File | Lines | Status |
|---------|------|-------|--------|
| Function Component | GoalTracker.jsx | 4-14, 44-320 | ✅ |
| Class Component | GoalTracker.jsx | 16-42 | ✅ |
| Event | GoalTracker.jsx | 72-88, 97-120 | ✅ |
| State Management | GoalTracker.jsx | 47-58 | ✅ |
| Stateless Component | GoalTracker.jsx | 4-14 | ✅ |
| Forms | GoalTracker.jsx | 155-290 | ✅ |
| Hooks (useState, useEffect, useContext) | Multiple | - | ✅ |
| Routing | App.jsx, Navbar.jsx | - | ✅ |

---

## SCREENSHOT TIPS

1. **GoalTracker.jsx** contains ALL required concepts in one file - ideal for screenshots!
2. Open the file in VS Code and take screenshots of the highlighted line ranges
3. For routing, screenshot `App.jsx` showing the Routes
4. For navigation links, screenshot `Navbar.jsx`

---

## WHAT MAKES THIS FORM UNIQUE

The **Sports Goal Tracker** is unique because:
- 🎯 Users can set personal sports learning goals
- 📊 Progress tracking with visual progress bars
- ✅ Goals can be marked as completed
- 📅 Target date selection with date picker
- 🏷️ Priority levels (Low, Medium, High)
- 🏀 Sport-specific goal categories
- 📈 Statistics dashboard showing completion rates
