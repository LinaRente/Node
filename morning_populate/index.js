// Requires
const express = require('express')
const mongoose = require('mongoose');
const Student = require('./models/Student');
const Address = require('./models/Address');

// Configuration
mongoose.connect('mongodb://localhost:27017/mongoose_populate', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    userCreateIndex: true
});

const app = express();

app.use(express.json());

const port = 3000;

app.get('/', async (req, res) => {
    try {
        const students = await Student.find().populate('address')

        res.json(students)
    } catch (error) {
        console.log(error);
        res.status(400).json('Error')
    }
})

app.post('/add/', async (req, res) => {
    try {
        // console.log(req.body)
        const newAddress = new Address(req.body.address)

        const newAddressAdded = await newAddress.save();
        // console.log('newAddressAdded', newAddressAdded);
        const { firstName, surname } = req.body.student

        const newStudent = new Student({
            firstName,
            surname,
            address: newAddressAdded._id
        })
        // console.log('New student', newStudent)
        await newStudent.save()
        res.json('Ok')
    } catch (error) {
        console.log(error);
        res.status(400).json('Error')
    }
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
