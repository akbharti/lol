const express = require('express')
const mysql  = require('mysql');
const util = require('util')
const app = express()
const bodyParser = require('body-parser')
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
    con1sole.log('connected as id ' + con.threadId);
  });
  
  con.query = util.promisify(con.query)

  let r1;

    app.get('/student', async (req, res,next) => {

        let obj = req.body;
        console.log(obj)
        let querys = 'INSERT INTO stud_info SET ?';
        try {
             results = await con.query(querys, obj )  // here we can also use ["2gi15cs4" , 'kumar']  but we are not using it .
             // because in  stud_info table, columns name have exactly same as keys in this object {usn : "2gi15cs4",name: 'kumar'} // also in same fashhion
            console.log((results))
            res.send(results)   
        } 
        catch (err) {
            res.json(err)
        }
        console.log("baher hai : ",results.insertId)  
        r1 = results.insertId;
  })

  app.get('/test', async (req, res) => {
  
  let stat = `insert into stud_file (usn,filepath) values("bfb","2sc")`;

  let ress = await con.query(stat);
  

  console.log(ress)

  console.log(ress.insertId)

  res.send(ress)

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
