const Races = require("../models/Races");

exports.GetRacesList = (req, res, next) => {

  const user = req.user;
  Races.findAll({where: {userId: user.id}})
    .then((result) => {
      const races = result.map((result) => result.dataValues);

      res.render("races/races-list", {
        pageTitle: "Races",
        racesActive: true,
        races: races,
        hasRaces: races.length > 0,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.GetCreateRaces = (req, res, next) => {
  res.render("races/save-races", {
    pageTitle: "Create races",
    racesActive: true,
    editMode: false,
  });
};

exports.PostCreateRaces = (req, res, next) => {
  const raceName = req.body.Name;
  const user = req.user;

  Races.create({ name: raceName,userId: user.id})
    .then((result) => {
      res.redirect("/races");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.GetEditRaces = (req, res, next) => {
  const edit = req.query.edit;
  const raceId = req.params.racesId;

  if (!edit) {
    return res.redirect("/races");
  }

  Races.findOne({ where: { id: raceId } })
    .then((result) => {
      const race = result.dataValues;

      if (!race) {
        return res.redirect("/races");
      }
      res.render("races/save-races", {
        pageTitle: "Edit races",
        racesActive: true,
        editMode: edit,
        race: race,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.PostEditRaces = (req, res, next) => {
  const raceName = req.body.Name; 
  const raceId = req.body.raceId;
  const user = req.user;

  Races.update({ name: raceName,userId: user.id  }, { where: { id: raceId } })
    .then((result) => {
      return res.redirect("/races");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.PostDeleteRaces = (req, res, next) => {
  const raceId = req.body.racesId;

  Races.destroy({ where: { id: raceId } })
    .then((result) => {
      return res.redirect("/races");
    })
    .catch((err) => {
      console.log(err);
    });
};
