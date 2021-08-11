const createError = require('http-errors');
const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/about.html'))
})

app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/contact-me.html'))
})

app.use(function (req, res, next) {
  res.status(404).sendFile(path.join(__dirname, '/views/404.html'))
})

app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
