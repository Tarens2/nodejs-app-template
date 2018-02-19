const express = require('express');

function renderLogin(req, res, next) {
  res.render('./login');
}

function renderRegistration(req, res, next) {
  res.render('./registration');
}

function renderMainPage(req, res, next) {
  res.send('Main page');
}

let mainRouter = express.Router();
mainRouter.get('/', renderMainPage);
mainRouter.get('/login', renderLogin)
mainRouter.get('/registration', renderRegistration)

/**
 * @type {{ mainRouter: *}}
 */
module.exports = {mainRouter};