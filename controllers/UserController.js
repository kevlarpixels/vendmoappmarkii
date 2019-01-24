//**Kevin */
const db = require("./../models");
// const passport = require('../client/services');

class userController {
    constructor() {
    }
    createUser(req, res) {
        // db.User.create(req.body).then(
        //     (results) => {
        //         res.json(results);
console.log(req.body)
            }
    //     );
    // }

    logInUser(req, res ){
        const {username, password} = req.body;
        console.log(username)
        db.User.findOne({username:username}).then(results=>{
            const {username, email, firstname, lastname, _id} = results;
            res.json({username, email, firstname, lastname, _id});
        })
    }

    findAllUsers(req, res) {

    }
}

module.exports = new userController();