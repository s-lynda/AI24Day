import mongoose from "mongoose";
mongoose.Promise = global.Promise;
import User from "./user.schema.js";
import Competition from "./competition.schema.js";
import Notification from "./notifications.schema.js";
import HistoriqueAction from "./History.schema.js";
import Team from "./team.schema.js";

const db = {};

db.mongoose = mongoose;

db.user = User;
db.competition = Competition;
db.team=Team;

db.notification = Notification;
db.historique = HistoriqueAction;

export default db;
