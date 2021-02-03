const validators = require("./validators/custom-validations.js");

const express = require('express');


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));





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
   
   