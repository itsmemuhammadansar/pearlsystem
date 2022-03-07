const app = require('express')();
const dotenv = require('dotenv');


dotenv.config({path:'config.env'})
app.get('/',(req,res) => {
    return res.send('Welcome To Pearl')
})


app.get('/store',(req,res) => {
    return res.send('Welcome To Pearl')
})


app.listen(process.env.PORT || 5000,() => console.log('Express Server is Listening On PORT' + process.env.PORT))