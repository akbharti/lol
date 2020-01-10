const util = require('util');

async function fn() {
  
   let promise = new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(("Hello World"))
        }, 1000);
    })
    
    return promise
    
}

const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  if (err) throw err;
  console.log(ret);
});
