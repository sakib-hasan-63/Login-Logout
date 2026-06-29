const form = document.getElementById('registerForm');
form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPass").value;

    if(name === "" || email === "" || password === "" || confirmPassword === ""){
        alert("Please fill all field");
        return;
    }
    if(password !== confirmPassword){
        alert("Password do not match")
        return;
    }

    const user = {
        name:name,
        email:email,
        password:password
    };
    localStorage.setItem("user",JSON.stringify(user));
    alert("Registeration Successful")
    window.location.href = "/login/login.html";
});