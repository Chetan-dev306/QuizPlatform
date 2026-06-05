const mongoose = require("mongoose");

const resultSchema =
  new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    quizId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz"
    },

    score: Number,

    totalQuestions: Number,

    createdAt: {
      type: Date,
      default: Date.now
    }
  });

module.exports =
  mongoose.model(
    "Result",
    resultSchema
  );