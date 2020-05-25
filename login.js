function validation(){
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    let email = document.getElementById("email").value;
    
    
    if(user==""){
        document.getElementById('username').innerHTML="please fill the username";
        return false;
    }
    if((user.length<=2)||(user.length>10)){
        document.getElementById('username').innerHTML="kindly put a valid name";
        return false;
    }
    if(!isNaN(user)){
        document.getElementById('username').innerHTML = "only charecter are allowed";
        return false;
    }
    
    //condition for password
    if(pass==""){
        document.getElementById('passwd').innerHTML = "please fill password";
        return false;
    }
    if((pass.length<=5)||(pass.length>10)){
        document.getElementById('passwd').innerHTML = "password is not strong";
        return false;
    }

    
    
       //email validation
    
    if(email ==""){
        document.getElementById('emails').innerHTML = "please fill email id";
        return false;
    }
    if(email.indexOf('@')<=0){
        document.getElementById('emails').innerHTML = "invalid email id";
        return false;
    }
    if((email.charAt(email.length-4)!='.')&&(email.charAt(email.length-3)!='.')){
        document.getElementById('emails').innerHTML = "invalide email id";
        return false;
    }
    }