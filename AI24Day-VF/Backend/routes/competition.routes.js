import express from "express";
import verifyToken from "../middleware/authJwt.js";
import {
  addCompetition,
  getAllCompetition,
  getCompetitionById,
  updateCompetition,
  
} from "../controllers/competition.controller.js";
import { deleteCompetition } from "../controllers/competition.controller.js";
const router = express.Router();

router.get("/all", [verifyToken], getAllCompetition); //afficher tous les rendez vous
router.post("/add", [verifyToken], addCompetition); 
router.get("/:idC", [verifyToken], getCompetitionById); //Afficher Un rendez vous propore a un tel patient
router.put("/:idC", [verifyToken], updateCompetition); // Update Rendez vous <-> Changer
router.delete("/:idC", [verifyToken], deleteCompetition);

export default router;
