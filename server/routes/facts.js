const express = require('express');
const { historicalFacts } = require('../data/sportsData');

const router = express.Router();

// Get historical fact for a sport based on today's date
router.get('/:sport', (req, res) => {
    const { sport } = req.params;

    if (!historicalFacts[sport]) {
        return res.status(404).json({ message: 'Sport not found' });
    }

    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const dateKey = `${month}-${day}`;

    // Find fact for today or get a random one
    let fact = historicalFacts[sport][dateKey];
    if (!fact) {
        const allFacts = Object.values(historicalFacts[sport]);
        fact = allFacts[Math.floor(Math.random() * allFacts.length)];
    }

    res.json({
        sport,
        date: dateKey,
        fact
    });
});

module.exports = router;
