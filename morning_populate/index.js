const mongoose = require('mongoose');

const Student = require('./models/Student');
const Address = require('./models/Address');

mongoose.connect('mongodb://localhost:27017/mongoose_populate', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err => console.log(err));

const AddressOne = Address.create({
    streetName: 'Rue Paul Vaillant Couturier',
    streetNumber: '54',
    postCode: '93130',
    city: 'Noisy le Sec'
}).then(body => console.log('My AddressBody',body))
    .catch(err => console.error(err))

let addressID = Address.findOne(AddressOne.id, function (err, result) {
    console.log('Mon Id ', result.id);
});


const StudentOne = Student.create({ 
    firstname: 'Lina',
    surname: 'Ice',
    address: addressID.id
}).then(body => console.log('Mon StudentBody', body))
.catch(err => console.error(err))