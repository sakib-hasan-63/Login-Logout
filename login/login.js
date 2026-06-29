const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit",function(event){

    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const user = JSON.parse(localStorage.getItem("user"));

    if(user === null){
        alert("User not found");
        return;
    }

    if(email === user.email && password === user.password){
        alert("Login Successful");
        localStorage.setItem("isLoggedIn","true");
        window.location.href="Home/home.html";
    }
    else{
        alert("Invalid Email and Password");
    }
});