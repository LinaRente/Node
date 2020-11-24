const express = require("express");
const exphbs = require("express-handlebars");
const expressSession = require("express-session");
const MongoStore = require("connect-mongo")(expressSession);
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const User = require('./models/user')

const port = 3010;

mongoose.connect(
    "mongodb://localhost:27017/authentification_exercise",
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });

const app = express();


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(
    expressSession({
        secret: "konexioasso07",
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection })
    })
);

// enable Passport
app.use(passport.initialize());
app.use(passport.session());

// passport config
passport.use(new LocalStrategy(User.authenticate()));

// Configuration pour utilisation de passport avec sessions
passport.serializeUser(User.serializeUser()); // Save the user.id to the session
passport.deserializeUser(User.deserializeUser()); // Receive the user.id from the session and fetch the User from the DB by its ID

// requetes => session => passportSessions => routes 

app.get('/', (req, res) => {
    console.log(req.session);
    console.log(req.sessionID);
    console.log(req.isAuthenticated());
    res.render('home')
});

app.get('/login', (req, res) => {
    res.render('login')
});

app.get('/signup', (req, res) => {
    res.render('signup')
});

app.get('/admin', (req, res) => {
    console.log('connecté', req.isAuthenticated());
    if (req.isAuthenticated()) {
        res.render('admin')
    } else {
        res.redirect('/login');
    }
});

app.get('/logout', (req, res) => {
    console.log('logout');
    res.send('logout')
});


app.post('/signup', (req, res) => {
    const { username, password } = req.body
    // const username = req.body.username;
    // const password = req.body.password;
    console.log('username', username);
    console.log('password', password);

    User.register({ username }, password, (err, user) => {
        console.log('Bibi');
        if (err) {
            console.log(err)
            return res.render('signup');
        } else {
            console.log('baba');
            passport.authenticate('local')(req, res, () => {
                console.log('connecté signup', req.isAuthenticated());
                res.redirect('/admin');
            });
        }
    });

    console.log('hello');
});



app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});