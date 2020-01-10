
 const express = require('express')
 const app = express()
 app.use(express.static('public'))
 
 const port = 3000
 
//  app.get('/example/a',  (req, res) => {
//      res.send('Hello from A!')
//    })
 
//  app.get('/example/b',  (req, res, next) => {
//     console.log('the response will be sent by the next function arr')
//     next()
//   }, function (req, res) {
//     res.send('Hello from B!')
//   })

// //
//   var cb0 =  (req, res, next) =>{
//     console.log('CB0 hola')
//     next()
//   }
  
//   var cb1 =  (req, res, next) =>{
//     console.log('CB1')
//     next()
//   }
  
//   var cb2 =  (req, res) => {
//     console.log("CB2")
//     res.send('Hello from C!')
//   }
  
//   app.get('/example/c', [cb0, cb1, cb2])

//   app.get('/example/d', cb0, function (req, res, next) {
//     console.log('the response will be sent by the next function mid')
//     next()
//   }, function (req, res) {
//     res.send('Hello from D!')
//   })


  var birds = require('./birds')
  app.use('/birds', birds)

  
  //...........................
// //Route 
//   app.route('/book')
//   .get(function (req, res) {
//     res.send('Get a random book')
//   })
//   .post(function (req, res) {
//     res.send('Add a book')
//   })
//   .put(function (req, res) {
//     res.send('Update the book')
//   })

// ...


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

