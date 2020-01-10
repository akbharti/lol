
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: 'Abhishek.Bharti@neviton.com',
      pass: '********'
    }
  });
  
  let mailOptions = {
    from: 'Abhishek.Bharti@neviton.com',
    to: 'dashing.abhi517@gmail.com,hrishikesh.belgaumkar@neviton.com',
    subject: 'Sending Email using Node.js',
    text: `That was easy!`
  };
  
  transporter.sendMail(mailOptions, (error, info)=>{
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });


  