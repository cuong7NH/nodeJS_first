const express = require('express')
const app = express()
const port = 3000


// route
app.get('/', (req, res) => {

    const a = 1
    const b = a + 6
    console.log(b + 5)
    return res.send('Hello Worl  d!, haha hihi')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})