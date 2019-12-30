const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index.html')
})

router.get('/linkone', (req, res) => {
    res.render('linkone.html')
})

router.get('/linktwo', (req, res) => {
    res.render('linktwo.html')
})

module.exports = router;