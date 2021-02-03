const validators = require("./validators/custom-validations.js");
var cors = require("cors");
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('config');
const connectDB = require('./startup/db');
const bookings = require('./routes/bookins');

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => validators.body(req, res, next));
app.use('/api/bookings', bookings);








app.listen(3000, function () {
    console.log("Server started. Listening on port 3000.");
});

app.get("/api/bookings", (req, res) => {
    let bookings = repoContext.bookings.findAllBookings();
    res.send(bookings);
   });

app.get("/api/bookings/:id", (req, res) => {
    let id = req.params.id;
    let bookings = repoContext.bookings.findBookingsById(id);
    res.send(bookings);
   });
   

app.post("/api/bookings", (req, res) => {
    let newBookings = req.body;
    let addedBookings = repoContext.bookings.createBookings(newBookings);
    res.send(addedBookings);
   });

app.put("/api/bookings", (req, res) => {
    let bookingsToUpdate = req.body;
    let updatedBookings = repoContext.bookings.updateBookings(bookingsToUpdate);
    res.send(updatedBookings);
   });

app.delete("/api/bookings/:id", (req, res) => {
    let id = req.params.id;
    let updatedDataSet = repoContext.bookings.deleteBookings(id);
    res.send(updatedDataSet);
   });
   

const port = process.env.PORT || 5000;
app.listen(port, () => {
 console.log(`Server started on port: ${port}`);
});
