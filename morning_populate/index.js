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


//  GET
//  Async / Await
app.get('/', async (req, res) => {
    try {
        const students = await Student.find().populate('address')
        res.json(students)
    } catch (error) {
        console.log(error);
        res.status(400).json('Error')
    }
})

// //Promise
// app.get('/', async (req, res) => {
//     Student.find().populate('address')
//         .then(students => {
//             res.json(students)
//         })
//         .catch(error => {
//             console.log(error);
//             res.status(400).json('Error')
//         })
// })

// Callback
// app.get('/', (req, res) => {
//     Student.find().populate('address')
//         .exec((err, students) => {
//             if (!err) {
//                 res.json(students)
//             } else {
//                 console.log((error));
//                 res.status(400).json('Error')
//             }
//         })
// })

//  POST


//  Async / Await
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

//Promise
// app.post('/add/', (req, res) => {
//     const newAddress = new Address(req.body.address)

//     newAddress.save()
//         .then(newAddressAdded => {
//             console.log(newAddressAdded);

//             const { firstName, surname } = req.body.student

//             const newStudent = new Student({
//                 firstName,
//                 surname,
//                 address: newAddressAdded._id
//             })

//             newStudent.save()
//                 .then(newAddressAdded => {
//                     res.json('New student saved correctly' + newStudentAdded._id)
//                 })
//                 .catch(error => {
//                     console.log((error));
//                     res.status(400).json('Error')
//                 })
//         })
//         .catch(error => {
//             console.log((error));
//             res.status(400).json('Error')
//         })
// })

// Callback
// app.post('/add/', (req, res) => {
//     const newAddress = new Address(req.body.address)

//     newAddress.save((err, newAddressAdded) => {

//         if (!err) {
//             const { firstName, surname } = req.body.student

//             const newStudent = new Student({
//                 firstName,
//                 surname,
//                 address: newAddressAdded._id
//             })

//             newStudent.save((err, newStudentAdded) => {
//                 if (!err) {
//                     res.json('New student saved correctly' + newStudentAdded._id)
//                 } else {
//                     console.log((error));;
//                     res.status(400).json('Error')
//                 }
//             })
//         } else {
//             console.log((error));;
//             res.status(400).json('Error')
//         }
//     })
// })

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
