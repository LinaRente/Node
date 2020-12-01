const express = require('express');
const mongoose = require('mongoose');

const port = 3000;

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost:27017/trippy-basics",
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }
);

const app = express();

app.use(express.json());

app.listen(port, () => {
    console.log("server started on port " + port)
})