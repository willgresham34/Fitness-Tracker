const db = require("../models");
const router = require("express").Router();

//get workouts
router.get("/api/workouts", async (req, res) => {
  const workouts = await db.workout.aggregate([
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
router.post("/api/workouts", async (req, res) => {});

//put workout into db
router.put("/api/workouts/:id", async (req, res) => {});

module.exports = router;
