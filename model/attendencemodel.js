const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/dbConfig')

const Attendance = sequelize.define('Attendance', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    // which student
    studentId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    studentName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // class info
    semester: {
        type: DataTypes.STRING,
        allowNull: false
    },
    section: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATEONLY,   // stores only date, no time
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('present', 'absent', 'late'),
        allowNull: false
    },
    // who marked it
    markedBy: {
        type: DataTypes.STRING,     // teacher's userId from token
        allowNull: false
    },
    markedByName: {
        type: DataTypes.STRING,     // teacher's name for display
        allowNull: false
    },
    // who last edited (null if never edited)
    editedBy: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    editedByName: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    }
})

module.exports = { Attendance }