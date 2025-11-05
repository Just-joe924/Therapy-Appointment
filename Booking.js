function Register(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("pwd").value;

    const namePattern = /^[A-Za-z ]+(?:[-][A-Za-z ]+)*$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const pwdPattern = /^(?=.*[A-Z]).{6,}$/;
    if(name === "" || email === "" || pwd === "" ){
        alert("missing field");
    }else if(!namePattern.test(name)){
        alert("enter valid name");
    }else if(!emailPattern.test(email)){
        alert("enter valid email");
    }else if(!pwdPattern.test(pwd)){
        alert("enter a stronger password");
    }else{
        alert("Account successfully created.")
        storeData();
    }
}
class UserData {
    constructor() {
      this.email = '';
      this.pwd = '';
    }
  
    storeData() {
      const emailInput = document.getElementById("email");
      const pwdInput = document.getElementById("pwd");
  
      if (emailInput && pwdInput) {
        this.email = emailInput.value;
        this.pwd = pwdInput.value;
  
        // ⚠️ For demo only. Do NOT store passwords like this in real apps.
        localStorage.setItem('userEmail', this.email);
        localStorage.setItem('userPassword', this.pwd);
      } else {
        console.error("Email or password input not found.");
      }
    }
}

function verify(){
    const storedUserEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("pwd").value;
    if(email === storedUserEmail && pwd === storedPassword){
        console.log("login successful")
    }else{
        console.log("invalid credentials")
    }
}

function Login(){
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("pwd").value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    var pwdPattern = /^{.}{6,}[A-Za-z]+/i;
    if(email === "" || pwd === "" ){
        alert("missing field!");
    }else if(!emailPattern.test(email)){
        alert("Invalid username or password.");
    }else if(!pwdPattern.test(pwd)){
        alert("Invalid username or password.");
    }else{
        verify();
    }
}