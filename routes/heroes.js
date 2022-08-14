const express = require('express');

const router = express.Router();

const heroesController = require('../controllers/HeroesController');
const isAuth = require("../middleware/is-auth");

router.get("/",heroesController.GetHeroesList);
router.get("/create-heroes",isAuth, heroesController.GetCreateHeroes);
router.post("/create-heroes",isAuth, heroesController.PostCreateHeroes);
router.get("/edit-heroes/:heroesId",isAuth, heroesController.GetEditHeroes);
router.post("/edit-heroes",isAuth, heroesController.PostEditHeroes);
router.post("/delete-heroes",isAuth, heroesController.PostDeleteHeroes);


module.exports = router;
