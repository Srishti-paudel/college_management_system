const express = require('express')
const router = express.Router()
const {
    markAttendance,
    editAttendance,
    getMyAttendance,
    getAttendanceByClass,
    getAllAttendance,
    deleteAttendance
} = require('../controllers/attendenceController')
const { isAuthenticated, isAdmin, isTeacher } = require('../middlewares/authMiddleware')


router.post('/mark', isAuthenticated, isTeacher, markAttendance)

router.put('/edit/:id', isAuthenticated, isTeacher, editAttendance)

router.get('/my', isAuthenticated, getMyAttendance)

router.get('/class', isAuthenticated, isTeacher, getAttendanceByClass)

router.get('/all', isAuthenticated, isAdmin, getAllAttendance)

router.delete('/delete/:id', isAuthenticated, isAdmin, deleteAttendance)

module.exports = router