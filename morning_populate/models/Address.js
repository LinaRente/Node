const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongoose_populate', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const addressSchema = new mongoose.Schema({ 
    streetName: { 
        type: String,
    },
    streetNumber: { 
        type : String,
    },
    postCode: { 
        type: String,
    },
    city: { 
        type: String,
    }
})

const Address = mongoose.model('Address', addressSchema);
module.exports = Address;