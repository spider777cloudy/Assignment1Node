
// Pariket #301315508

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

// routes
const indexRoute = require('./public/routes/index');
app.use('/', indexRoute);

app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
