const express = require('express')
const fs = require('fs');
const router = express.Router()
const app = express()

let port = 3000

// //  E:/weather/link.txt
// app.get('/write', [
//     function (req, res, next) {
//       fs.writeFile('E:/weather/links.js', 'data', next)
//     },
//     function (req, res) {
//       res.send('OK')
//     }
//   ])

//   app.get('/open', function (req, res, next) {
//     fs.readFile('E:/weather/links.txt', function (err, data) {
//       if (err) {
//         next(err) // Pass errors to Express.
//       } else {
//         res.send(data)
//       }
//     })
//   })


app.get('/', [
    function (req, res, next) {
      fs.readFile('E:/weather/link.txt', function (err, data) {
      //  res.locals.data = data
        next(err)
      })
    },
    function (req, res) {
      res.locals.data = res.locals.data.split(',')[1]
      res.send(data)
    }
  ])
  app.listen(port, () => console.log(`Example app listening on port ${port}!`))