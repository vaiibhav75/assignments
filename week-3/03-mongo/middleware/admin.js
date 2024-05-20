// Middleware for handling auth
const { Admin } = require("../db/index");
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    Admin.findOne({
        username: req.headers.username,
        password: req.headers.password,
    }).then((value) => {
        if (value) {
            next();
        } else {
            res.status(403).json({
                msg: "Admin not found"
            })
        }
    })
}

module.exports = adminMiddleware;