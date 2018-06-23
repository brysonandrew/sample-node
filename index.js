const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hey, I\'m a Node.js app! How are you')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})