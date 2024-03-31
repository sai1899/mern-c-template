const express = require("express");
var createError = require("http-errors");

const app = express();

app.get("/", async (req, res, next) => {
    console.log("server started");
    // res.json("Hello");
});

app.use((err, req, res, next) => {
    console.log(err.statusCode);
    res.status(err.statusCode).json({
        errors: [
            {
                type: err.name,
                message: err.message,
                path: "",
                location: "",
            },
        ],
    });
});

module.exports = app;
