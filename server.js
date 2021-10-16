const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.resolve(__dirname, 'dist')))

app.get('/', (req, res) => {
    console.log('aaa')
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`listening http://localhost:${PORT}`)
})