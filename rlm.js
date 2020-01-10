 const express = require('express')
 const router = express.Router()
 const app = express()

 let port = 3000


 router.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
  })
/*
  router.use('/users/:id', function (req, res) {
      let obj = req.params
      console.log(obj)
      console.log('Request URL:', req.originalUrl)
    res.send(obj)
  })
*/

//   router.use('/user/:id', function (req, res, next) {
//     console.log('Request URL:', req.originalUrl)
//     next()
//   }, function (req, res, next) {
//     let obj = req.params
//     console.log('Request Type:', req.method)
//     next()
//   })


//   router.get('/user/:id', function (req, res, next) {
//     // if the user ID is 0, skip to the next router
//     if (req.params.id === '0') next('route')
//     // otherwise pass control to the next middleware function in this stack
//     else next()
//   }, function (req, res, next) {
//     // render a regular page
//     res.send('regular')
//   })

//   // handler for the /user/:id path, which renders a special page
//   router.get('/user/:id', function (req, res, next) {
//     console.log(req.params.id)
//     res.send('special')
//   })

  app.get('/', ( req, res) => {
    console.error(req)
    res.status(500).send('Something broke!')
  })


 app.listen(port, () => console.log(`Example app listening on port ${port}!`))         