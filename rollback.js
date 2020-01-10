const mysql  = require('mysql');
const util = require('util')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
const port = 3000

const con = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'student'
  });
  
  con.connect((err)=> {
      if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      console.log('connected as id ' + con.threadId);
    });
///

con.beginTransaction(function(err) {
    if (err) { throw err; }
let body = {usn: '2gi15cs024',name : 'abhi'}

    con.query('INSERT INTO stud_info SET ?',  body ,  (error, results, fields)=> {

      if (error) {
        return con.rollback(function() {
          throw error;
        });
      }
   
      var log = 'Post ' + results.insertId + ' added';
      console.log(log)
   
      con.query('INSERT INTO stud_file SET ?', {usn: `${body.usn}`, filepath : `fila palth ${log}`},  (error, results, fields)=> {
        if (error) {
          return con.rollback(() =>{
            throw error;
          });
        }

        con.commit((err) =>{
          if (err) {
            return con.rollback(()=> {
              throw err;
            });
          }
           console.log('success!');          
        });
      });
    });
  });

///

    app.listen(port, () => console.log(`Example app listening on port ${port}!`))