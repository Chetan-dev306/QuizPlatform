const express = require("express");
const Quiz = require("../models/Quiz");

const router = express.Router();


// CREATE QUIZ
router.post("/", async (req, res) => {
  try {
    const quiz = await Quiz.create(req.body);

    res.status(201).json(quiz);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// GET ALL QUIZZES
router.get("/", async (req, res) => {
  try {
    const quizzes = await Quiz.find();

    res.json(quizzes);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const quiz = await Quiz.findById(
      req.params.id
    );

    res.json(quiz);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

router.put("/:id/question", async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);

    quiz.questions.push(req.body);

    await quiz.save();

    res.json(quiz);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

router.put("/:id/question", async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);

    quiz.questions.push(req.body);

    await quiz.save();

    res.json(quiz);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});


router.put("/:id/question", async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
      return res.status(404).json({
        message: "Quiz not found"
      });
    }

    quiz.questions.push(req.body);

    await quiz.save();

    res.json({
      message: "Question Added",
      quiz
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;