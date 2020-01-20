const express = require("express");
var app = express();
var path = require("path");

// viewed at http://localhost:8080
app.use("/static", express.static("public"));
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(8080);