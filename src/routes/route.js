const express = require('express');
const router = express.Router();

const orderController= require("../controllers/orderController")
const productController= require("../controllers/productController")
const userController = require("../controllers/userController")

const Middleware = require("../middleware/middleware")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser",  Middleware.freeAppUser, userController.createUser  )

router.post("/createProduct",   productController.createProduct  )

router.post("/createOrder", Middleware.freeAppUser, orderController.createOrder  )

// router.get("/getBooks", bookController.getBooks  )
// router.put("/books", bookController.updateBooks)

// router.put("/updatePrice", bookController.updatePrice)

// app.use( )


module.exports = router;