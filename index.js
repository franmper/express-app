let express = require('express')
let nj = require('nunjucks')
const path = require('path')

let app = express()

nj.configure('views', {
    autoescape: true,
    express: app
})

app.listen(3000, () => console.log('server running on port 3000'))

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('index.html')
})

app.get('/linkone', (req, res) => {
    res.render('linkone.html')
})

app.get('/linktwo', (req, res) => {
    res.render('linktwo.html')
})