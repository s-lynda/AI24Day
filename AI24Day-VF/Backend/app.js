import express from "express";
import connectDb from "./config/dbConnection.js";
import dotenv from "dotenv";
// import responseHandler from "./middleware/addToHistory.js";
// import { verifyTokenForHistory } from "./middleware/authJwt.js";
import cors from "cors";
dotenv.config();
const app = express();

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors());
app.use(express.json({ extended: false }));
// app.use(express.json()); // parse requests of content-type - application/json
// app.use(express.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded, 

// Apply the responseHandler middleware globally
// app.use(verifyTokenForHistory, responseHandler);

const port = process.env.PORT || 5000; // set port number


connectDb();

import userRouter from "./routes/user.routes.js";
app.use("/users", userRouter);

import CompRouter from "./routes/competition.routes.js";
app.use("/competitions", CompRouter);

import teamRouter from "./routes/team.routes.js";
app.use("/teams", teamRouter);



// import notificationRouter from "./routes/notification.routes.js";
// app.use("/notifications/", notificationRouter);



// import historyRouter from "./routes/history.routes.js";
// app.use("/history/", historyRouter);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hellooo..." });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); // start the server
