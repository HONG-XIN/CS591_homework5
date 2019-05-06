const router = require('express').Router();
const passport = require('passport');

router.get('/google',
	passport.authenticate('google', {scope: ['profile']}));

router.get('/google/callback',
	passport.authenticate('google', {failureRedirect: '/login'}),
	function(req, res) {
		res.send({user: req.user});
	});

router.get('/logout', function(req, res, next) {
	req.logout();
	res.send({user: req.user});
});

module.exports = router;
