function signup(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var mobile=document.getElementById("mobile").value;
    if(name!=" " && email!=" " && password!=" " && mobile!=" ")
    {
        var get_data={name:name,email:email,password:password,mobile:mobile};
        var user_data=JSON.stringify(get_data);
        localStorage.setItem(email,user_data);
        document.getElementById("signup_successful").innerHTML="signup successful";
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("password").value="";
        document.getElementById("mobile").value="";
        setTimeout(function(){document.getElementById("signup_successful").innerHTML=""},2000);
        return false;
    }
}
 
function user_exists()
{
    var email=document.getElementById("email").value;
    if(localStorage.getItem(email)!=null)
    {
        document.getElementById("exists_msg").innerHTML="user already exists";
        document.getElementById("password").disabled=true;
        document.getElementById("mobile").disabled=true;
        document.getElementById("submit_btn").disabled=true;
        document.getElementById("email").style.background="black";
        document.getElementById("email").style.color="white";
        document.getElementById("email").classList.add("pulse");
        document.getElementById("email").onclick = function(){
            this.value=" ";
            this.style.background="white";
            this.style.color=" ";
            document.getElementById("exists_msg").innerHTML=" ";
            document.getElementById("password").disabled=false;
            document.getElementById("mobile").disabled=false;
            document.getElementById("submit_btn").disabled=false;
        }
    }
}

function login()
{
    var username=document.getElementById("login_user").value;
    var password=document.getElementById("login_password").value;
    var login_input={username:username,password:password};
    var login_data=JSON.stringify(login_input);
    sessionStorage.setItem(username,login_data);
    var session_data=sessionStorage.getItem(username);
    var user_details=JSON.parse(session_data);
    if(localStorage.getItem(user_details.username)==null)
    {
        alert("user not found");
    }
    else
    {
        if(localStorage.getItem(user_details.username).match(user_details.password))
        {
           location.replace("profile/profile.html");
           sessionStorage.setItem('user_email' ,username);
           return false;
        }
        else
        {
            alert("wrong password");
        }
    }
}