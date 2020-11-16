const mongoose = require("mongoose");
const AddressModel = require('./Address');

mongoose.connect('mongodb://localhost:27017/mongoose_populate', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const studentSchema = mongoose.Schema({
    firstname: { 
        type: String,
    },
    surname: {
        type: String,
    },
    address: {
        type: mongoose.Types.ObjectId,
        ref: "Address"
    }
})

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
