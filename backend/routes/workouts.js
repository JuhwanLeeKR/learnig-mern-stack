const express = require('express');
const {
  createWorkout,
  getWorkout,
  getWorkouts,
} = require('../controllers/workoutController');

const router = express.Router();

// GET all workouts
router.get('/', getWorkouts);

// GET a single workout
router.get('/:id', getWorkout);

// POST a new workout
router.post('/', createWorkout);

// DELETE a new workout
router.delete('/:id', (req, res) => {
  res.json({ msg: 'DELETE a new workout' });
});

// UPDATE a new workout
router.patch('/:id', (req, res) => {
  res.json({ msg: 'UPDATE a new workout' });
});

module.exports = router;
