const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")


router.post("/createBook", BookController.createBook  )

router.get("/bookList", BookController.bookList  )

router.post("/getBooksInYear", BookController.getBooksInYear)

// router.post("/bookList", BookController.bookList )



module.exports = router;