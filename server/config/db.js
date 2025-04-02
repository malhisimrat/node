let mongoose = require('mongoose')
const dbPath = 'mongodb+srv://malhi:Rocky13june@malhi.6rips.mongodb.net/bicycleDb'
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(dbPath, options).then(res => {
    console.log("Db Connected")
}).catch(err => {
    console.log("Db Connect Err", err)
})
