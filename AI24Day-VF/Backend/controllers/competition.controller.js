import db from "../Models/index.js";

const Competition = db.competition;



export const getAllCompetition = async (req, res) => {
  try {
    const competitions = await Competition.find();

    if (!competitions) {
      res.status(404).send(" No competition found");
      return;
    }
    res.send(rendezvous);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};



export const getCompetitionById = async (req, res) => {
  try {
    const comp = await Competition.findById(req.params.idC);
    if (!comp) {
      res.status(404).send("Competition not found");
      return;
    }
    res.send(rendez_vous);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const deleteCompetition = async (req, res) => {
  try {
    const comp = await Competition.findById(req.params.idC);
    if (!comp) {
      res.status(404).send("Competition not found");
      return;
    }
    await Competition.deleteOne(comp);
    res.send({ message: "Competition was deleted successfully!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const updateCompetition = async (req, res) => {
  try {
    const comp = await Competition.findById(req.params.idC);

    if (!comp) {
      res.status(404).send("Competition not found");
      return;
    }

    comp.title=req.body.title;
    comp.description=req.body.description;
    comp.startDate=req.body.startDate;
    comp.endDate=req.body.endDate;
    comp.organizer=req.body.organizer;
    comp.location= req.body.location;
    comp.registrationDeadline=req.body.registrationDeadline;
    comp.eligibilityCriteria=req.body.eligibilityCriteria;
    comp.prizes=req.body.prizes;
    comp.rules=req.body.rules;

    await comp.save();
    res.send({ message: "Competition was updated successfully!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

/*function to add a competition */
export const addCompetition= async (req,res)=>{

  const competition = new Competition({
    title:req.body.title,
    description:req.body.description,
    startDate:req.body.startDate,
    endDate:req.body.endDate,
    organizer:req.body.organizer,
    location: req.body.location,
    registrationDeadline:req.body.registrationDeadline,
    eligibilityCriteria:req.body.eligibilityCriteria,
    prizes:req.body.prizes,
    rules:req.body.rules
  });
  competition
    .save(competition)
    .then((data) => {
      res.send({ message: "Competition was registered successfully!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });

}

