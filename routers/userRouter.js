const express = require('express');
const userRouter = express.Router();
const passport = require('passport')


userRouter.post('/login',
  passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
  })
);

userRouter.post('/registration', function (req, res, next) {
    if (req.body.username &&
      req.body.password &&
      req.body.confirm_password) {
      const userData = {
        username: req.body.username,
        password: req.body.password,
      }

      User.create(userData, function (err, user) {
        if (err) {
          return next(err)
        }
        else {
          return res.redirect('/profile');
        }
      });
    }
  }
);

module.exports = {userRouter}
