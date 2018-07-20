// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var reservations = [];

var waitList = [];

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "home.html"))
});

app.get("/home", function(req,res){
    res.sendFile(path.join(__dirname, "/home.html"))
});

app.get("/view", function(req, res){
    res.sendFile(path.join(__dirname,"/view.html"))
});

app.get("/reserve", function(req,res){
    res.sendFile(path.join(__dirname, "/reserve.html"))
});

app.get("/api/tables", function(req,res){
    console.log(reservations);
    return res.json(reservations)
});

app.get("api/tables", function(req,res){
    return res.json(waitList)
});

app.post("/api/tables", function(req,res){


    var posted = req.body;

    console.log(posted);

    posted.routeName = posted.name.replace(/\s+/g, "").toLowerCase();

    if(reservations.length>5){
        waitlist.push(posted);
    }
    else if(reservations.length<5){
        reservations.push(posted);
    }

    res.json(posted);

});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});