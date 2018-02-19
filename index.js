const express = require('express');
const database = require('./database')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const config = require('./config')
const path = require('path')

let app = express();
app.set('port', (process.env.PORT || 3000));
app.use(session({
  store: new RedisStore({
    url: config.redisStore.url
  }),
  secret: config.redisStore.secret,
  resave: false,
  saveUninitialized: false
}))
app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb'
}));

app.use(passport.initialize())
app.use(passport.session())

app.set('views', path.join(__dirname, '/templates'));
app.set('view engine', 'ejs');

require('./auth/init')
require('./routers')(app)


app.use(function (err, req, res, next) {
  res.status(500);
  res.send(err.toString())
})

app.listen(app.get('port'), function () {
  console.log(`Example app listening on port ${app.get('port')}!`);
});




