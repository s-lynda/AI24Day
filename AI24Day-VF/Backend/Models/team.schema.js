import mongoose from "mongoose";


const Team = mongoose.model(
  "Team",
  new mongoose.Schema({
    Competition_id:{
        type: mongoose.Schema.ObjectId,
        ref: 'Competition',
        required: true
    },
    Name_Team: { 
        type: String, 
        required: true 
    },
    Code: { 
        type: String,
         unique: true, 
         required: true }, // Unique team code
    Leader: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'User', 
         required: true }, // Reference to team leader (User model)
    Members: [{
         type: mongoose.Schema.Types.ObjectId, 
         ref: 'User' }] ,
    scores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Score' }]
    
    })
    
);


export default Team;
