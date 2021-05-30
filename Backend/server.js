const express = require ('express');
const connectDB = require ("./config/db")
const bodyParser = require('body-parser')

const app = express();

connectDB();

app.use(bodyParser.json({ extended: false }))

app.get('/', (req, res)=> res.send('api running '))

//define routes 

app.use('/api/user', require('./routes/api/user'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/booking', require('./routes/api/booking'))

const PORT =  5000;

app.listen(PORT, ()=> {console.log('server connected ')});