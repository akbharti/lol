const express = require('express')
const formidable = require('formidable')
const app = express()
let port = 3000;


app.get('/file',(req,res) => {

    var form = new formidable.IncomingForm();  // Take file from postman, in body 

    form.parse(req, (err, fields, files) => {
console.log(files.foo.size)
    });
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))