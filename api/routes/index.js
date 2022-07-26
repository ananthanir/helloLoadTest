var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

router.post('/test', function (req, res, next) {
  const data = req.body
  res.send({ status: 'sucess' })
  console.log(data);
})

module.exports = router
