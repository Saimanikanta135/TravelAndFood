var email="vemisetty2000@gmail.com"
var pass="1234"
function autho()
{
    var usergivenUSID=document.getElementById("emali").value
    var usergivenPass=document.getElementById("pass").value
    if(email==usergivenUSID && pass==usergivenPass)
    {
        document.getElementById("fom").setAttribute("action","../index.html")
        document.getElementById("but").setAttribute("type","submit")
    }
 else if(email!=usergivenUSID && pass==usergivenPass) 
 {
    document.getElementById("emali").style.borderColor="red"
    document.getElementById("pass").style.borderColor="blue"
    document.getElementById("container").style.backgroundColor="red"
    document.getElementById("wrong").innerHTML="wrong emailId.."

 } 
 else if(email==usergivenUSID && pass!=usergivenPass) 
 {
    document.getElementById("emali").style.borderColor="blue"
    document.getElementById("pass").style.borderColor="red"
    document.getElementById("container").style.backgroundColor="red"
    document.getElementById("wrong").innerHTML="wrong password.."

 } 
 else
 {
    document.getElementById("emali").style.borderColor="red"
    document.getElementById("pass").style.borderColor="red"
    document.getElementById("container").style.backgroundColor="red"
    document.getElementById("wrong").innerHTML="wrong password.."


 }
}
function visiblePassword()
{
   document.getElementById("pass").removeAttribute("type")
   document.getElementById("visible").setAttribute("src","../assets/images/monkey.png")
   document.getElementById("visible").style.transform="rotateY(360deg)"
}
function hidePassword()
{
   document.getElementById("pass").setAttribute("type","password")
   document.getElementById("visible").setAttribute("src","../assets/images/monkey_eye.png")
   document.getElementById("visible").style.transform="rotateY(-360deg)"

}
