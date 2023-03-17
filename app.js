const express = require('express')
const app = express()
const users = require('./routes/main')

//middleware for reading req.body
app.use(express.json())

app.use('/api/users',users);

app.listen(3000, () => console.log("Listening on port 3000"))