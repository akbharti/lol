const Joi = require('joi');

let obj1 = {
    name : "Abhishek",
    age : 23
}

const s1 = Joi.object()
    .keys({

    name: Joi.string()
             .trim()
             .alphanum(),

         age: Joi.number(),
  })



// let obj2 = {
//     com : "Neviton",
//     bond : '2 years'
// }

// const schema2 = Joi.object()

// .keys({

//          com : Joi.string()
//                   .trim(),
                  
//          bond : Joi.string()
//          .trim(),        

// })


  let result1 = Joi.validate(obj1, s1);
//  console.log(result1.error);
//  console.log(result1);

//  let result2 = Joi.validate(obj2, schema1);
//  console.log(result2.error);

module.exports= {
    result1 : result1.error
}