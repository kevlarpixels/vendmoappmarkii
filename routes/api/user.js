//**Kevin Code */
const router = require("express").Router();

const UserController = require('./../../controllers/UserController');
// const passport = require('./../../services/passport');

router
.route('/create')
.post(UserController.createUser);

// router.route('/login',passport.authenticate('local'))
//     .post(userController.logInUser);

module.exports = router;