const express = require('express')
const app = express()

//routes
app.get('/', (req, res) => {
    res.send('hello node api')
})

app.get('/blog', (req, res) => {
    res.send('hello node api')
})


app.listen(3000, ()=> {
    console.log(`Node API app is running on port 3000`)
})