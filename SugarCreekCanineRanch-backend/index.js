const validators = require("./validators/custom-validations.js");
var cors = require("cors");
const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => validators.body(req, res, next));








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
   
mongoose
   .connect("mongodb+srv://Jordanb22:Yellow@Cluster1.5agus.mongodb.net/Cluster1?retryWrites=true&w=majority",
   { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.log(`Could not connect to MongoDB. ERROR: ${err}`));
   