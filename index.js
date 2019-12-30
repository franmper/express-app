let express = require('express')
let nj = require('nunjucks')
const path = require('path')
let app = express()

nj.configure('views', {
    autoescape: true,
    express: app
})
app.use('/', require('./routes/routes'))
app.listen(3000, () => console.log('server running on port 3000'))

app.use(express.static(__dirname + '/public'))

