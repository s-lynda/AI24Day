import mongoose from "mongoose";

const Score = mongoose.model(
  "Score",
  new mongoose.Schema({
    participant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team',
    },
    competition: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Competition',
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    feedback: String, // Feedback provided for the submission
  })
);

export default Score;
