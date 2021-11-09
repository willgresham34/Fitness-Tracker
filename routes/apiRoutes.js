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
  s;
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

//put workout into db
router.put("/api/workouts/:id", async (req, res) => {});

module.exports = router;
