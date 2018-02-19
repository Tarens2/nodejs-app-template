const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../database/models/User')

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(new LocalStrategy((username, password, done) => {
  User.authenticate(username, password, done)
}))
