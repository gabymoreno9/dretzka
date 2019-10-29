const path = require('path')
const express = require('express')

const app = express()
const port = process.env.PORT || 42069
const indexPath = path.join(__dirname, 'build/index.html')
const publicPath = express.static(path.join(__dirname, 'build'))

// Set up all the static assets
app.use('/assets', publicPath)
app.use('*', function (_, response) { response.sendFile(indexPath) })

// Start the server
app.listen(port)

console.log(`Listening at http://localhost:${port}`)
