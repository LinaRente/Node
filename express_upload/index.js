const express = require('express');
const exphbs = require('express-handlebars');
const multer  = require('multer');
const upload = multer({ dest: 'public/uploads/' });
const app = express();
const port = 3000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/upload', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err => console.log(err))

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

let userarray = [];

app.get('/', (req, res) => {
    res.render('home');
});

// app.post('/form', (req, res) => {
//     console.log('mon form', req.body)
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.post('/upload', upload.single('image'),  (req, res) => {
//   console.log(req.file);
// });

app.post("/upload", upload.single('image'), (req, res, next) => {
    let userprofil = req.body.username;
    userarray.push(userprofil)
    let img = req.file.path
    console.log(img)
    res.render("donnes", {
        username: userprofil,
        image : img
    });
});

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    firstName: {
        type: String,
    },
    surname: {
        type: String,
    },
    profilePicture: {
        type: String
    }
})

const User = mongoose.model('User', UserSchema);

User.create({
    username: 'IcePrincess',
    firstName: 'Lina',
    surname: 'Renteria',
    profilePicture: ''
}).then(body => console.log(body))
    .catch(err => console.error(err))

app.listen(port, () => {
    console.log('Server started on port: ' + port);
});


// const express = require('express');
// const app = express();
// const PORT = 3001;
// const mongoose = require('mongoose');
// const exphbs = require('express-handlebars');
// const multer = require('multer');
// const upload = multer({ dest: 'public/uploads/' });
// //const path = require('path')
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');
// app.use(express.json());
// app.use(express.static('public'));
// mongoose.connect('mongodb://localhost:27017/upload',
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }
// ).catch(error => console.log(error));
// /// pour s'assuerer que le server est bien connecter 
// mongoose.connection.on('connected', function () {
//     console.log(`Database connection open to ${mongoose.connection.host} ${mongoose.connection.name}`);
// });
// mongoose.connection.on('error', function (err) {
//     console.log('Mongoose default connection error: ' + err);
// });
// mongoose.connection.on('disconnected', function () {
//     console.log('Mongoose default connection disconnected');
// });
// /////
// const UserShema = new mongoose.Schema({
//     username: { type: [String], index: true },
//     firstName: String,
//     surname: String,
//     profilePicture: String
// });
// const UserModel = mongoose.model('User', UserShema);
//  app.post('/upload', upload.single('image'), (req, res, next) => {   
//     res.json(req.file);
    
//     const username= req.body.UserName;
//     const image = req.file.path;
//     console.log(req.body.Username);
//    console.log(req.file.path)
//    UserModel.create({
//     username: username,
//     profilePicture: image,
// })
// });
// app.get('/', function (req, res) {
//     res.render('home');
//     //res.send('Welcome to express upload');
// });
// app.listen(PORT, () => {
//     console.log(`Vous etes sur le prt ${PORT}`)
// })