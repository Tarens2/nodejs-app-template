const express = require('express');
const authedRouter = express.Router();
const User = require('../database/models/User')

function authenticationMiddleware() {
  return function (req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/login')
  }
}

function renderProfile(req, res, next) {
  User.findById(req.session.passport.user._id).exec(function (error, user) {
    if (error) {
      next(error);
    }
    else {
      if (user === null) {
        let err = new Error('Not authorized! Go back!');
        err.status = 400;
        next(err);
      }
      else {
        res.send('<h1>Name: </h1>' + user.username + '<br><a type="button" href="/logout">Logout</a>')
      }
    }
  });
}

authedRouter.use(authenticationMiddleware())
authedRouter.get('/profile', renderProfile)

module.exports = {authedRouter}