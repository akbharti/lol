
const express = require('express')
const app = express()
app.use(express.static('public'))

const port = 3000
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send('Birds home page')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = router

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// ((141T4844)[~][A-Za-z]*)