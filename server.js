const express = require('express');
let sharejs = require('share')
require('redis')
let app = express()
const PORT = process.env.PORT || 8000

app.set('view engine', 'ejs')

app.use(express.static(__dirname +'/public'))

app.get('/', (req, res) => {
    res.render('pad')
})
app.get('/(:id)', (req, res) => {
    res.render('pad')
})

let options = {
    db: {type: 'redis'}
}

sharejs.server.attach(app, options)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})

