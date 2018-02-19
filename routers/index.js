const {mainRouter} = require('./mainRouter')
const {userRouter} = require('./userRouter')
const {authedRouter} = require('./authedRouter')

module.exports = app => {
  app.use(mainRouter)
  app.use(userRouter)
  app.use(authedRouter)
}