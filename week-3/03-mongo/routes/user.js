const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course} = require("../db/index");
const mongoose = require("mongoose");

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
    const username = req.headers.username;

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

    const thisUser = await User.findOne({
        username: req.headers.username,
        password: req.headers.password
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