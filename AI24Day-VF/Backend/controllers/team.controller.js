import db from "../Models/index.js";

const User= db.user;
const competition=db.competition;
const Team=db.team;
// Controller function to create a new team
// Controller for creating a team
export const createTeam = async (req, res) => {
  const { teamName, teamCode, competitionId } = req.body;

  try {
      // Check if the team code is unique
      const existingTeam = await Team.findOne({ Code: teamCode });
      if (existingTeam) {
          return res.status(400).json({ message: 'Team code already exists' });
      }
      // Create the team
      const team = new Team({
          Competition_id: competitionId,
          Name_Team: teamName,
          Code: teamCode,
          Leader: req.user._id,
          Members: [req.user._id], 
          scores: [] 
      });

      await team.save();

      return res.status(201).json({ message: 'Team created successfully', team });
  } catch (error) {
      console.error('Error creating team:', error);
      return res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller for joining a team
export const joinTeam = async (req, res) => {
  const { teamCode } = req.body;

  try {
      // Find the team by code
      const team = await Team.findOne({ Code: teamCode });
      if (!team) {
          return res.status(404).json({ message: 'Team not found' });
      }

      // Check if the user is already a member of the team
      const isMember = team.Members.some(memberId => memberId.equals(req.user._id));
      if (isMember) {
          return res.status(400).json({ message: 'User is already a member of the team' });
      }

      // Add the user to the team's members
      team.Members.push(req.user._id);
      await team.save();

      return res.status(200).json({ message: 'User joined the team successfully', team });
  } catch (error) {
      console.error('Error joining team:', error);
      return res.status(500).json({ message: 'Internal server error' });
  }
};

//delete a team
export const deleteTeam = async (req, res) => {
    try {
      const team = await Team.findById(req.params.idT);
      if (!team) {
        res.status(404).send("Team not found");
        return;
      }
      await Team.deleteOne(team);
      res.send({ message: "Team was deleted successfully!" });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };
  
  
export const getTeambyId = async (req, res) => {
    try {
      const team = await Team.findById(req.params.idT);
      if (!team) {
        res.status(404).send("team not found");
        return;
      }
      res.send(team);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  //update team
// export const updateTeam= async (req, res) => {
//     try {
//       const team = await Team.findById(req.params.idT);
  
//       if (!team) {
//         res.status(404).send("team not found");
//         return;
//       }
//       team.Competition_id=competition
  
//       await comp.save();
//       res.send({ message: "Competition was updated successfully!" });
//     } catch (err) {
//       res.status(500).send({ message: err.message });
//     }
//   }; 