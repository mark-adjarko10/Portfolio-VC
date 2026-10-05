function sendMail(){
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  }

  emailjs.send("service_rgfmfac","template_my0yinr",parms).then(alert("Email sent successfully!"))
}