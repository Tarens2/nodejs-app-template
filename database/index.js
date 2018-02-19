let mongoose = require('mongoose');
let Schema = mongoose.Schema
let seeder = require('./seeder')

mongoose.connect(`mongodb://localhost/birds_shop`, {
    keepAlive: 1
})
  .then(() => {
    console.log('Mongodb connected')
  })
  .then(seeder)
  .catch(err => {console.error(err.message)})


