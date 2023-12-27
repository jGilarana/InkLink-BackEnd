const router = require("express").Router();

router.use('/artists', require('./artist.router'));
// router.use('/tattoos', require('./tattoo.router'));
// router.use('/users', require('./user.router'));
// router.use('/messages', require('./message.router'));
// router.use('/photos', require('./photo.router'));


module.exports = router