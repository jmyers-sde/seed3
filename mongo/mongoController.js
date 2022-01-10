const Books = require("./models/Books")
const { Reviews } = require('./models/Reviews')

require("./mongoConnect").connect()

module.exports = {
  // Add a new book to the database
  addNewBook(req, res, next) {
    const review = new Reviews({ name: req.body.name, comment: req.body.comment, rating: req.body.rating })

    Books.create(req.body)
      .then((book) =>
        Books.findByIdAndUpdate(book._id, { $push: { reviews: review } }, { new: true }))
      .then(result => res.json(result))
      .catch(next)
  },

  // Get all books currently in the database
  getAllBooks(req, res, next) {
    Books.find()
      .then(items => res.json(items))
      .catch(next)
  },


  // Add a new review to a book
  addNewReview(req, res, next) {
    const bookId = req.params.bookId

    const review = new Reviews({ name: req.body.name, comment: req.body.comment, rating: req.body.rating })

    Books.findByIdAndUpdate(bookId, { $push: { reviews: review } }, { new: true })
      .then(result => res.json(result))
      .catch(next)
  },

  // Delete a specific book
  removeBook(req, res, next) {
    const { bookId } = req.params
    Books.findByIdAndRemove(bookId)
      .then(result => res.json(result))
      .catch(next)
  },

  // Delete one specific review in a book
  deleteReview(req, res, next) {
    const bookId = req.params.bookId,
      reviewId = req.params.reviewId

    Books.findByIdAndUpdate(bookId, { $pull: { reviews: { _id: reviewId } } }, { new: true })
      .then(items => res.json(items))
      .catch(next)
  }
}