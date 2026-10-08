const express = require("express")
const router = express.Router();
const outbackController = require("../controllers/outbackController")

router.get("/",outbackController.home)


module.exports = router;
