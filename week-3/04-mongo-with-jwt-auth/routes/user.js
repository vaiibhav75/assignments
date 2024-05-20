const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {Admin} = require("../db");
const jwt = require("jsonwebtoken");
const {Course, User} = require("../db");
const {JWT_SECRET} = require("../config");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    await User.create({
        username: req.body.username,
        password: req.body.password
    })

    res.json({
        msg: "User created successfully"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    })


    if (user) {
        const userToken = jwt.sign({username},JWT_SECRET);

        res.json({
            userToken
        })
    } else {
        res.status(403).json({
            msg: "user not found"
        })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const allCourses = await Course.find({});
    res.json({
        courses: allCourses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];

    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
    const username = decodedValue.username;

    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.json({
        message: "Purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];

    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
    const username = decodedValue.username;

    const thisUser = await User.findOne({
        username: username
    })
    const userCourses = await Course.find({
        _id: {
            "$in" : thisUser.purchasedCourses
        }
    })
    res.json({
        courses: userCourses
    })
});

module.exports = router