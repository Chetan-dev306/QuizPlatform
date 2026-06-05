const express = require("express");

const Result =
require("../models/Result");

const router =
express.Router();

router.post("/", async (req, res) => {
  try {

    const result =
      await Result.create(
        req.body
      );

    res.status(201).json(
      result
    );

  } catch (error) {

    res.status(500).json({
      message:
        error.message
    });

  }
});

router.get("/", async (req, res) => {
  try {

    const results =
      await Result.find();

    res.json(results);

  } catch (error) {

    res.status(500).json({
      message:
        error.message
    });

  }
});

module.exports = router;