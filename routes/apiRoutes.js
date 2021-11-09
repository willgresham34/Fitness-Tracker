const db = require("../models");
const router = require("express").Router();

//get workouts
router.get("/api/workouts", async (req, res) => {
  const workouts = await db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ]);
  try {
    res.json(workouts);
  } catch {
    console.log(err);
  }
});

//create workouts
router.post("/api/workouts", async (req, res) => {
  const newWorkout = await db.Workout.create({});
  try {
    res.json(newWorkout);
  } catch (err) {
    console.log(err);
  }
});

//update workout with new info
router.put("/api/workouts/:id", async (req, res) => {
  const updateWorkout = await db.Workout.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { exercises: req.body } },
    { new: true, runValidators: true, returnOriginal: false }
  );
  try {
    res.json(updateWorkout);
  } catch (err) {
    console.log(err);
  }
});

//get workout info
router.get("/api/workouts/range", async (req, res) => {
  const workout = await db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ]);
  try {
    res.json(workout);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
