const express = require('express');

const router = express.Router();

const racesController = require('../controllers/RacesController');
const isAuth = require("../middleware/is-auth");

router.get("/races",isAuth ,racesController.GetRacesList);
router.get("/create-races",isAuth , racesController.GetCreateRaces);
router.post("/create-races",isAuth , racesController.PostCreateRaces);
router.get("/edit-races/:racesId",isAuth , racesController.GetEditRaces);
router.post("/edit-races",isAuth , racesController.PostEditRaces);
router.post("/delete-races",isAuth , racesController.PostDeleteRaces);


module.exports = router;
