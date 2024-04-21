const express = require('express');
let app = express()
const PORT = process.env.PORT || 8000

app.set('view engine', 'ejs')

app.use(express.static(__dirname +'/public'))

app.get('/', (req, res) => {
    res.render('pad')
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})

