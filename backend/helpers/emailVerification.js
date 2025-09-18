const nodemailer = require("nodemailer");


const emailVerification= async (email,otp)=>{
  console.log(otp);
  
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "intesmern2401@gmail.com",
    pass: "oujeayggatxlauav",
  },
});
const info = await transporter.sendMail({
    from: 'intesmern2401@gmail.com',
    to: email,
    subject: "Email Verification",
    text: "Hello world?", 
    html: `Please verified your account <a href=http://localhost:5173/otp/${email}/${otp} style="background-color:#00f;padding:10px 20px;border-radius:10px;color:#fff;font-size:20px;font-weight:500;text-decoration:none;margin-bottom:30px;display:inline-block">Verifing......</a>`, 
  });

}
module.exports=emailVerification