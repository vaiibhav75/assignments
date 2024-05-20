const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    await Admin.create({
        username: req.body.username,
        password: req.body.password
    })

    res.json({
        msg: "User created successfully"
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const newCourse = await Course.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageLink: req.body.imageLink
    })


    res.json({
        msg: "Course created successfully",
        courseID : newCourse._id
    })


});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find({});
    res.json({
        courses: allCourses
    })
});

module.exports = router;