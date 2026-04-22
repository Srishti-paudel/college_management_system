const {createEvent,deleteEvent}=require('../controllers/eventController')
const {storage,multer}=require('../middlewares/multerConfig')
const upload=multer({storage:storage});
const router=require('express').Router();
router.route("/addEvent").post(upload.single('image'),createEvent);
router.delete("/event/:id", deleteEvent);
module.exports=router