const nodemailer = require("nodemailer");


const emailVerification= async (email)=>{
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
    html: `<div style="width:500px;background:#f0f8ff;padding:50px 50px;border-radius:10px;text-align:center"><h2 style=color:#00f;font-size:50px>Ecommersc</h2><h3 style=font-size:30px;font-weight:500>This is a verification System. So Please write the messages and verified you Account!</h3><p>${email}<p>If you didn't generate this password for demo2, someone might be using your account. Check and secure your account now.</p><a href=# style="background-color:#00f;padding:10px 20px;border-radius:10px;color:#fff;font-size:20px;font-weight:500;text-decoration:none;margin-bottom:30px;display:inline-block">Verified</a><br><span>You can also see security activity at</span> <a>https://myaccount.google.com/notifications</a><div style=padding-top:30px><img alt=""src=https://i.ibb.co.com/B2xm9LKg/Facebook-logo-square.png style=width:60px> <img alt=""src=https://i.ibb.co.com/QFPcnbqr/images.jpg style=width:60px> <img alt=""src=0/twitter-logo-png-seeklogo-318424.png style=width:60px></div></div>`, 
  });

}
module.exports=emailVerification