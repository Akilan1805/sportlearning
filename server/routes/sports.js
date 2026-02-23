const express = require('express');
const { sportsData } = require('../data/sportsData');

const router = express.Router();

// Get all sports
router.get('/', (req, res) => {
    const sportsList = Object.keys(sportsData).map(key => ({
        id: key,
        name: sportsData[key].name,
        icon: sportsData[key].icon,
        description: sportsData[key].description,
        color: sportsData[key].color
    }));
    res.json(sportsList);
});

// Get single sport with tutorial steps
router.get('/:id', (req, res) => {
    const sport = sportsData[req.params.id];
    if (!sport) {
        return res.status(404).json({ message: 'Sport not found' });
    }
    res.json(sport);
});

module.exports = router;
