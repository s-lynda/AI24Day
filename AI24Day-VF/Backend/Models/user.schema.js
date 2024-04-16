import mongoose from "mongoose";


const allowedRoles = ["Admin", "Participant"];

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    
    Nom: { type: String, required: true },
    Prenom: {
      type: String,
      required: true,
    },
    Username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    mail: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: allowedRoles,
      default: "Participant"
    },
    PhoneNumber: {
      type: Number,
    },
    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
    Portfolio: 
    { 
      type: String
    }, // Link to portfolio
    CV: {
       type: String 
   
      }, // Link to CV
    Linkedin: {
       type: String
       }, // Link to LinkedIn profile
    Github: {
       type: String 
      }, // Link to GitHub profile
    Skills: {
       type: [String] 
      }, // Array of skills
     
    Team: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Team' 
      },
    user_score: [{
         type: mongoose.Schema.Types.ObjectId,
          ref: 'Score' }
        ]
  })
);


export default User;
