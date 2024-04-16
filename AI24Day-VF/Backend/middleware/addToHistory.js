import HistoriqueAction from "../Models/History.schema.js";
import onFinished from "on-finished";

const ActionTypes = {
  TYPE1: "Create",
  TYPE2: "Update",
  TYPE3: "Delete",
  TYPE4: "Read",
};

export const responseHandler = (req, res, next) => {
  onFinished(res, (err, data) => {
    const userID =
      req.params.idP || req.params.userId || req.params.id || req.userId;
      if(!userID) return;
    const username = req.baseUrl.split("/")[1];
    if(!ressourceName) return;
    const actionType =
      req.method === "POST"
        ? ActionTypes.TYPE1
        : req.method === "PUT"
        ? ActionTypes.TYPE2
        : req.method === "DELETE"
        ? ActionTypes.TYPE3
        : ActionTypes.TYPE4;

    // Add a record to the HistoriqueAction collection
    HistoriqueAction.create({
      userId: resourceId,
      Username: username,
      actionType,
    });
  });
  next();
};

export default responseHandler;
