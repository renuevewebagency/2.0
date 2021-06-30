function sendMail(params){
var tempParams = {
    user_name: document.getElementById("name").value,
    user_email:document.getElementById("email").value,
    user_number:document.getElementById("number").value,
    message:document.getElementById("msg").value
};
emailjs.send("service_td22mp4","template_gid9hs3",tempParams)
.then(function(res){
    console.log("succes", res.status);
})
}


