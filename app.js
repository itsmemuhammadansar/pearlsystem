const app = require('express')();

app.get('/',(req,res) => {
    return res.send('Welcome To Pearl')
})

app.listen(3000,() => console.log('Express Server is Listening On PORT 3000'))