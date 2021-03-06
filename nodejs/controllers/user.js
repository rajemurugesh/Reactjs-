const User = require("../models/user");


exports.signup = (req, res) => {
    const user = new User(req.body)
    user.save((err, user)=> {
        if(err) {
            return res.status(400).json({
                error: "Unable to add users"
            })
        }

        return res.json({
            message: "Success",
            user
        })
    })
}