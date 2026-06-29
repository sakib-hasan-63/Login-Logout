const isLoggedIn = localStorage.getItem("isLoggedIn");
const user = JSON.parse(localStorage.getItem("user"));

if(isLoggedIn !== "true"){
    alert("Please login first")
    window.location.href="/login/login.html"
}

const welcomeText = document.getElementById("welcomeText");
welcomeText.innerText = "Welcome "+ user.name;

const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click",function(){
    localStorage.removeItem("isLoggedIn");
    alert("Logout Successful");
    window.location.href="login/login.html"
});