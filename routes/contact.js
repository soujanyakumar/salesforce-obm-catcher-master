var express = require('express');
var _ = require("lodash");
var router = express.Router();

app.post("/contact", function (req, res) {
    // do something with req.body
    console.log("http post /contact call. processing..");
    res.status(201).end();
}); 
app.get("/contact", function (req, res) {
    // do something with req.body
    console.log("HTTP get on /contact. processing..");
    res.status(201).end();
}); 


module.exports = router;
