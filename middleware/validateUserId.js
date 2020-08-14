const db = require("../users/userDb");

module.exports = () => {
    return (req, res, next) => {
        db.getById(req.params.id)
            .then((user) => {
                if (user) {
                    req.user = user;
                    next();
                } else if(!user){
                    res.status(400).json({message: "Missing user data."})
                } 
            })
            .catch(next)
    }
};