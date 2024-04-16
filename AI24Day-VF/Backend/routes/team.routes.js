import express from "express";
import verifyToken from "../middleware/authJwt.js";
import {
    createTeam,
    joinTeam,
    deleteTeam,
    getTeambyId,
    // updateTeam

  
} from "../controllers/team.controller.js";

const router = express.Router();

router.post("/create", [verifyToken], createTeam); //Afficher Un rendez vous propore a un tel patient
router.post("/join", [verifyToken], joinTeam); // Update Rendez vous <-> Changer
router.delete("/:idT", [verifyToken], deleteTeam);
router.get("/:idT", [verifyToken], getTeambyId); 
// router.put("/:idT", [verifyToken], updateTeam); 
export default router;