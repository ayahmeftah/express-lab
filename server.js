const express = require('express')
const app = express()

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/about.html")
})

app.get("/test", (req, res) => {
    res.sendFile("<p>Success!</p>")
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})