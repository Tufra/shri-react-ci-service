const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.resolve(__dirname, 'dist')))

app.get('/', (req, res) => {
    console.log('aaa')
    res.sendFile('index.html')
})

app.listen(3000, () => {
    console.log('listening http://localhost:3000')
})