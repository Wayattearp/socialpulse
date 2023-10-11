const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;



mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully!"))
    .catch(err => {
        console.error("MongoDB connection error:", err);
    });

app.get("/", (req, res) => res.send("Hello world"))
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`))