const express = require('express')
const router = express.Router()

router.get('/',(req,res) =>{
    //res.send('hi')
    res.render('index')
})

module.exports = router