const express = require("express"),
  mongoController = require("../mongo/mongoController")


const router = express.Router()


router.route('/books')
  .get(mongoController.getAllBooks)
  .post(mongoController.addNewBook)

router.route('/books/:bookId')
  .post(mongoController.addNewReview)
  .delete(mongoController.removeBook)

router.route('/books/:bookId/review/:reviewId')
  .delete(mongoController.deleteReview)


module.exports = router