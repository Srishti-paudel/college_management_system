const { Attendance } = require('../model/attendencemodel')

const markAttendance = async (req, res) => {
    try {
        const { studentId, studentName, semester, section, subject, date, status } = req.body

        if (!studentId || !studentName || !semester || !section || !subject || !date || !status) {
            return res.status(400).json({ message: "All fields are required" })
        }

        const existing = await Attendance.findOne({
            where: { studentId, subject, date }
        })
        if (existing) {
            return res.status(400).json({
                message: "Attendance already marked for this student on this date for this subject"
            })
        }

        const attendance = await Attendance.create({
            studentId,
            studentName,
            semester,
            section,
            subject,
            date,
            status,
            markedBy: req.user.userId,
            markedByName: req.user.name
        })

        return res.status(201).json({
            message: "Attendance marked successfully",
            attendance
        })

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const editAttendance = async (req, res) => {
    try {
        const { id } = req.params
        const { status } = req.body

        if (!status) {
            return res.status(400).json({ message: "Status is required" })
        }

        const attendance = await Attendance.findByPk(id)
        if (!attendance) {
            return res.status(404).json({ message: "Attendance record not found" })
        }

        // Teacher can only edit records THEY marked
        // Admin can edit any
        if (req.user.Role === 'teacher' && attendance.markedBy !== req.user.userId) {
            return res.status(403).json({
                message: "You can only edit attendance you marked"
            })
        }

        await attendance.update({
            status,
            editedBy: req.user.userId,
            editedByName: req.user.name
        })

        return res.json({
            message: "Attendance updated successfully",
            attendance
        })

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const getMyAttendance = async (req, res) => {
    try {
        const records = await Attendance.findAll({
            where: { studentId: req.user.userId },
            order: [['date', 'DESC']]
        })

        if (!records.length) {
            return res.status(404).json({ message: "No attendance records found" })
        }

        return res.json(records)

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const getAttendanceByClass = async (req, res) => {
    try {
        const { semester, section, subject } = req.query

        if (!semester || !section || !subject) {
            return res.status(400).json({ message: "semester, section and subject are required" })
        }

        const records = await Attendance.findAll({
            where: { semester, section, subject },
            order: [['date', 'DESC']]
        })

        return res.json(records)

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const getAllAttendance = async (req, res) => {
    try {
        const records = await Attendance.findAll({
            order: [['date', 'DESC']]
        })
        return res.json(records)

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const deleteAttendance = async (req, res) => {
    try {
        const { id } = req.params
        const attendance = await Attendance.findByPk(id)

        if (!attendance) {
            return res.status(404).json({ message: "Record not found" })
        }

        await attendance.destroy()
        return res.json({ message: "Attendance deleted successfully" })

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

module.exports = {
    markAttendance,
    editAttendance,
    getMyAttendance,
    getAttendanceByClass,
    getAllAttendance,
    deleteAttendance
}