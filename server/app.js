const express = require("express"),
  indexRouter = require("./routes/index")

const app = express();

// Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {console.log(`${req.method}: ${req.url}`); next()})

// Route anything prefixed with api to router
app.use("/api", indexRouter)

// catch 404 errors
app.use((err, req, res, next) => {
  res.send(err.message)
});

// catch 500 errors
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  console.log(err.stack)
  res.send(err.message)
});

// Export the app
module.exports = app;