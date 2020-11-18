// const mongoose = require('mongoose');

// const Student = require('./models/Student');
// const Address = require('./models/Address');

// mongoose.connect('mongodb://localhost:27017/mongoose_populate', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).catch(err => console.log(err));

// const AddressOne = new Address({
//     streetName: 'Rue Paul Vaillant Couturier',
//     streetNumber: '54',
//     postCode: '93130',
//     city: 'Noisy le Sec'
// })
// const resAddressOne = await AddressOne.save(),

// // let addressID = Address.findOne(AddressOne.id, function (err, result) {
// //     console.log('Mon Id ', result.id);
// // });


// const StudentOne = Student.create({
//     firstname: 'Lina',
//     surname: 'Ice',
//     address: AddressOne._id
// })

// const resStudent = await StudentOne.save()

// StudentModel
//     .findOne({ adressId })
//     .populate('Adress')
//     .exec((err, student1) => {
//         console.log('the id is', adress1._id)
//     });
    
async function student() {
    const AdressModel = require('./models/Address');
    const StudentModel = require('./models/Student');
​
    const mongoose = require('mongoose')
    mongoose.connect('mongodb://localhost:27017/mongoose_populate',
        { useUnifiedTopology: true, useNewUrlParser: true })
​
        
        const Adress1 = new AdressModel({
            streetName: 'Rue Crimée',
            streetNumber: '10',
        postCode: '75015',
        city: 'Paris'
    })
​
    // let addressID = AdressModel.findOne(Adress1._id, function (err, result) {
        //     console.log('here I am', result.id)
    // })
    // console.log('addressID', addressID);
    const resAdress1 = await Adress1.save()
    
    const Student1 = new StudentModel({
        firstName: 'Lili',
        surname: 'Line',
        address: Adress1._id
    });
​
    const resStudent = await Student1.save()
    }
​
​
    StudentModel
    .findOne({ address: '5fb2f1992be52566fcc6b52c' })
    .populate('StudentModel')
    .exec((err, story) => {
      console.log('The author is',story.StudentModel.surname);
      // displays "The author is Ian Fleming"
    });
​
student()
​
// const Adress1 = await AdressModel.create({
//     streetName: 'Rue Crimée',
//     streetNumber: '10',
//     postCode: '75015',
//     city: 'Paris'
// })
//     .then(data => console.log('data', data))
//     .catch(err => console.log(err))
​
// // let addressID = AdressModel.findOne(Adress1, function (err, result) {
// //     console.log('here I am', result.id)
// // })
​
​
​
// const Student1 = await StudentModel.create({
//     firstName: 'Lilli',
//     surname: 'Line',
//     address: AdressModel.id,
​
// }).then(data => console.log('data student', data))
//     .catch(err => console.log(err))
​
