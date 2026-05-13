function login(){

    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;

    if(usuario === "admin" && password === "1234"){

        localStorage.setItem("admin", "true");

        window.location.href = "admin.html";

    }else{

        document.getElementById("mensaje").innerHTML =
        "Usuario o contraseña incorrectos";

    }
}

if(window.location.pathname.includes("admin.html")){

    let acceso = localStorage.getItem("admin");

    if(acceso !== "true"){
        window.location.href = "login.html";
    }
}

function cerrarSesion(){

    localStorage.removeItem("admin");

    window.location.href = "login.html";
}