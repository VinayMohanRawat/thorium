const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")


router.post("/createBook", BookController.createBook  )

router.post("/createAuthor", BookController.createAuthor )

router.get("/getBookByAnAuthor", BookController.getBookByAnAuthor )

router.get("/getUpdatePrice", BookController.getUpdatePrice )

router.get("/authorsName", BookController.authorsName )


module.exports = router;