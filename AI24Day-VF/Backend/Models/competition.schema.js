import mongoose from "mongoose";

const Competition = mongoose.model(
  "Competition",
  new mongoose.Schema({
    title: {
        type: String,
        required: true,
    }, 
      description: {
        type: String,
        required: true,
      },
      organizer: {
        type: String,
        required: true,
      },
      startDate: {
        type: Date,
        required: true,
      }, 
      endDate: {
        type: Date,
        required: true,
      }, 
      location: {type:String, 
        required: true}, 
      registrationDeadline: Date, 
      eligibilityCriteria: [String], // Any specific criteria or requirements for participants to be eligible to enter the competition
      prizes: [String], 
      rules: String, // The rules and guidelines governing the competition
      submissions: [
        {
          participant: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
          }, 
          submissionDate: {
            type: Date,
            default: Date.now,
          }, 
          code: { //Link github
            type: String,
            required: true,
          }, 
          competition_score: [{
             type: mongoose.Schema.Types.ObjectId, 
             ref: 'Score' }]
        
        }],
    }));


export default Competition;
