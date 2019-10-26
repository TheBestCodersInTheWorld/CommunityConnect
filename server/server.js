//create data base
var path = require('path');
const cors = require('cors');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

mongoose.connect(require('./connection.js'), { useFindAndModify: false });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/food', (req, res) => {
    WorkOrder.find({
    }, function (err, doc) {
        res.status(200).send(doc);
    });
})


// make a GET request to "fnbconnect.com/food"
// =>
// server.js (running on some server)
// app.get('/food') {
//     // get all the foods 
// }


const port = process.env.PORT || 8000;

// remember to run webpack or this path wont find the files needed for the bundle
app.use(express.static(path.resolve(__dirname, '../public/')))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('File Not Found');
    err.status = 404;
    next(err);
});

// server error handle
app.use(function (req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
})

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});