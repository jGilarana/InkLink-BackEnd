const router = require("express").Router();
const { getAllArtists } = require("../controllers/artist.controller");

router.get('/', getAllArtists);

module.exports = router