const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
app.use(express.json());
mongoose.connect("mongodb+srv://ANSHITHA:anshitha@cluster0.xhh32qs.mongodb.net/?retryWrites=true&w=majority")
app.use("/", require("./routes/signRouter"));
app.listen(3001, function() {
    console.log("express server is running on server 3001");
})