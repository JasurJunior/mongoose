// imports
import express from 'express'
import mongoose from 'mongoose'
import router from './router.js';
// group const
const PORT = 3000
const db_url = 'mongodb://localhost:27017/test'
const app = express()
// midleware
app.use(express.json())
app.use('/api',router)
async function startApp()
    {
    try
        {
        await mongoose.connect(db_url,
            {
            useNewUrlParser:true,
            useUnifiedTopology: true
            })
        // listen port
        app.listen(PORT, ()=>
            {
            console.log('ishlepman...');
            })
        }
    catch (e)
        {
        console.log(e);
        }
    }
// call function
startApp()