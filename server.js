const express =require('express');
const errorHandler= require('./middlewares/errorHandler');
const connectDb = require('./config/dbConnection');
const dotenv =require('dotenv').config();
const app = express();


connectDb();
app.use(express.json());

const port =process.env.PORT || 5000
 
app.use(express.json());
app.use('/contacts',require('./routes/contactRoutes'));
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`server started running on port ${port}`)
})