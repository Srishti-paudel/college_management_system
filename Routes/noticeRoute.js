const {createNotice,deleteNotice}=require('../controllers/noticeController');
const { storage, multer } = require("../middlewares/multerConfig");

const upload = multer({ storage: storage });
const router= require('express').Router();
router.route("/addnotice").post(upload.single("image"), createNotice);
router.delete("/notice/:id", deleteNotice);
module.exports=router;