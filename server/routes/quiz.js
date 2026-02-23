const express = require('express');
const User = require('../models/User');
const QuizResult = require('../models/QuizResult');
const authMiddleware = require('../middleware/auth');
const { quizQuestions } = require('../data/sportsData');

const router = express.Router();

// IMPORTANT: Static routes MUST come before parameterized routes!

// Get leaderboard (must be before /:sport/:difficulty)
router.get('/leaderboard/all', async (req, res) => {
    try {
        const leaderboard = await User.find()
            .select('username points quizzesTaken favoriteSport')
            .sort({ points: -1 })
            .limit(20);

        res.json(leaderboard);
    } catch (error) {
        console.error('Leaderboard error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get weekly goals and progress
router.get('/goals/weekly', authMiddleware, async (req, res) => {
    try {
        // Get user's quizzes from this week
        const startOfWeek = new Date();
        startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
        startOfWeek.setHours(0, 0, 0, 0);

        const weeklyQuizzes = await QuizResult.find({
            userId: req.user.userId,
            completedAt: { $gte: startOfWeek }
        });

        const weeklyPoints = weeklyQuizzes.reduce((sum, q) => sum + q.pointsEarned, 0);
        const weeklyQuizzesCount = weeklyQuizzes.length;

        // Weekly goals
        const goals = [
            {
                id: 1,
                title: 'Quiz Champion',
                description: 'Complete 5 quizzes this week',
                target: 5,
                current: weeklyQuizzesCount,
                reward: 50,
                icon: '🎯'
            },
            {
                id: 2,
                title: 'Point Collector',
                description: 'Earn 100 points this week',
                target: 100,
                current: weeklyPoints,
                reward: 30,
                icon: '⭐'
            },
            {
                id: 3,
                title: 'Super Learner',
                description: 'Complete 10 quizzes this week',
                target: 10,
                current: weeklyQuizzesCount,
                reward: 100,
                icon: '🏆'
            },
            {
                id: 4,
                title: 'High Scorer',
                description: 'Earn 250 points this week',
                target: 250,
                current: weeklyPoints,
                reward: 75,
                icon: '🌟'
            }
        ];

        res.json({
            weeklyPoints,
            weeklyQuizzes: weeklyQuizzesCount,
            goals: goals.map(g => ({
                ...g,
                completed: g.current >= g.target,
                progress: Math.min(100, Math.round((g.current / g.target) * 100))
            }))
        });
    } catch (error) {
        console.error('Goals error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Submit quiz and update points
router.post('/submit', authMiddleware, async (req, res) => {
    try {
        const { sport, difficulty, score, totalQuestions } = req.body;

        // Calculate points based on difficulty
        const multiplier = difficulty === 'easy' ? 1 : difficulty === 'medium' ? 2 : 3;
        const pointsEarned = score * multiplier * 10;

        // Save quiz result
        const quizResult = new QuizResult({
            userId: req.user.userId,
            username: req.user.username,
            sport,
            difficulty,
            score,
            totalQuestions,
            pointsEarned
        });
        await quizResult.save();

        // Update user points
        const user = await User.findByIdAndUpdate(
            req.user.userId,
            {
                $inc: { points: pointsEarned, quizzesTaken: 1 }
            },
            { new: true }
        );

        res.json({
            message: 'Quiz completed!',
            pointsEarned,
            totalPoints: user.points,
            quizResult
        });
    } catch (error) {
        console.error('Quiz submit error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get quiz questions for a sport and difficulty (MUST be last - parameterized route)
router.get('/:sport/:difficulty', (req, res) => {
    const { sport, difficulty } = req.params;

    if (!quizQuestions[sport]) {
        return res.status(404).json({ message: 'Sport not found' });
    }

    if (!quizQuestions[sport][difficulty]) {
        return res.status(404).json({ message: 'Difficulty level not found' });
    }

    // Shuffle and return questions
    const questions = [...quizQuestions[sport][difficulty]];
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }

    res.json(questions);
});

module.exports = router;
