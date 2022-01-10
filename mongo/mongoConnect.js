const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

function connect() {
  mongoose.connect('mongodb://localhost/book_nook', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connection to mongoDB successful"))
  .catch(err => console.error(err))
}

module.exports = { connect, mongoose };