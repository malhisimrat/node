const express = require('express')
const res = require('express/lib/response')
const db = require('./server/config/db')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000;
const apiRoutes = require('./server/routes/apiRoutes')

app.use(cors());

app.use(express.static(__dirname + '/server/public/'));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false, parameterLimit: 500000000 }));
app.get('/', (req, res) => {
    res.send('Welcome to Bicycle Renter/Hirer Server')
})

app.use('/api', apiRoutes)



// require('./server/config/seed')
app.listen(PORT, '0.0.0.0',() => {
    console.log("Server Listerning to port 80",PORT)
})
