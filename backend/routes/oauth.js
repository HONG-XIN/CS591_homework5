const router = require('express').Router();
const passport = require('passport');

router.get('/google',
	passport.authenticate('google', {scope: ['profile']}));

router.get('/google/callback',
	passport.authenticate('google', {failureRedirect: '/login'}),
	function(req, res) {
		res.render('index', {user: req.user});
	});

router.get('/logout', function(req, res, next) {
	req.logout();
	res.render('index', {user: req.user});
});

module.exports = router;
