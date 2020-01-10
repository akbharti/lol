const fs = require('fs');
const formidable = require('formidable');   // to accept file from postman


// fs.unlink('E:/weather/room.txt', (err) => {
//     if (err) throw err;
//     console.log('successfully deleted /tmp/hello');
//   });

// try {
//     fs.unlinkSync('E:/weather/links.txt');
//     console.log('successfully deleted /tmp/hello');
//   } catch (err) {
//     // handle the error
//   }

// fs.rename('E:/weather/linka.txt', 'E:/weather/link.txt', (err) => {
//     if (err) throw err;
//     console.log('renamed complete');
//   });

// fs.stat('E:/weather/link.txt', (err, stats) => {
//     if (err) throw err;
//     console.log(`stats: ${JSON.stringify(stats)}`);
//   });

// fs.readFile('E:/weather/link.txt','utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });

// fs.appendFile('E:/weather/room.txt',' Data', (err, data) => {
//     if (err) throw err;
//     console.log("Saved");
//   });
// appedFile : append content to the data present in the file 

// fs.writeFile('E:/weather/room.txt','kuch toh likh mere bhai', (err, data) => {
//     if (err) throw err;
//     console.log("Saved");
//   });   
// writeFile : Change all contents of file with new content . here with "kuch toh likh mere bhai"



