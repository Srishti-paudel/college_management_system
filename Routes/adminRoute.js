const express = require("express")
const router = express.Router()

const { isAuthenticated, isAdmin } = require("../middlewares/authMiddleware")
const { adminDashboard } = require("../controllers/adminController")

router.get("/dashboard",
    isAuthenticated,
    isAdmin,
    adminDashboard
)

module.exports = router;