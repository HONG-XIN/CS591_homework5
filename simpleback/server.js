const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./routes/oauth');

let db = require('./mongo/mongo');
db.connect((err, client) => {
	if (err) {console.log(`ERR: ${err}`)}
	else {console.log(`CONNECTED`)}
})

let googleConfig = require('./config/google');
let passport = require('passport');
let googleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new googleStrategy({
	clientID: googleConfig.clientID,
	clientSecret: googleConfig.clientSecret,
	callbackURL: googleConfig.clientURL
},
function(accessToken, refreshTocken, profile, cb) {
	db.getDB().collection('users')
	.findOneAndReplace(
		{googleId: profile.id}, {googleId: profile.id}, {upsert: true},
		function(err, user) {
			return cb(err, user);
		})
}));

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});

const app = express();

const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(require('express-session')({
	secret: 'keyboard cat',
	resave: true,
	saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes)

app.listen(port, () => {
	console.log('We are live on ' + port);
});