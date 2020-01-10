
 const express = require('express')
 const app = express()

 const port = 3000


 let birds = require('./birds')
 app.use('/birds', birds)

// var myLogger =  (req, res, next) => {
//     console.log('LOGGED')
//    next()
//   };
//   app.use(myLogger) // application level middleware  // Run for very http request


  // if we put 'mylogger' as a 2nd parameter in route function then it 
  // will be a route level middleware
  
//   app.use('/',  (req, res) =>{
//     console.log('Request Type:', req.method)
//     res.send('Hello World!')
//   })


  // app.use('/user/:id', function (req, res, next) {
  //   console.log('Request URL:', req.originalUrl)
  //   console.log(req.params)
  //   next()
  // }, function (req, res, next) {
  //   console.log('Request Type:', req.method)
  //   console.log(req.params)
    
  //   res.send('Hello World!')
  // })

// var requestTime = function (req, res, next) {
//     req.requestTime = Date.now()
//     next()
//   }
  
//   app.use(requestTime)
  
//   app.get('/', function (req, res) {
//     var responseText = 'Hello World!<br>'
//     responseText += '<small>Requested at: ' + req.requestTime + '</small>'
//     res.send(responseText)
//   })
  


// app.get('/user/:id', function (req, res, next) {
//   // if the user ID is 0, skip to the next route
//   if (req.params.id === '0') next('route')
//   // otherwise pass the control to the next middleware function in this stack
//   else next()
// }, function (req, res, next) {
//   // send a regular response
//   res.send('regular')
// })

// // handler for the /user/:id path, which sends a special response
// app.get('/user/:id', function (req, res, next) {
//   res.send('special ')

// })


function logOriginalUrl (req, res, next) {
  console.log('Request URL1:', req.originalUrl)
  next()
}

function logMethod (req, res, next) {
  console.log('Request Type2:', req.method)
  next()
}

app.get('/user/:id', [logOriginalUrl, logMethod], function (req, res, next) {
  res.send('User Info')
})

 app.listen(port, () => console.log(`Example app listening on port ${port}!`))