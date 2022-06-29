





var correo = document.querySelector("#inputA");
var contraseña = document.querySelector("#inputB");
var btn = document.getElementById("btn-form");
var usuarioCorreo ="";
var usuarioContraseña="";

function verificar () {
    if (usuarioCorreo==correo.value && usuarioContraseña==contraseña.value) {
        correo.value="";
        contraseña.value="";
       
        window.location.href = "productos.html"
    } else if (usuarioCorreo==correo.value && contraseña.value == "") {
        alert("introduce tu contraseña");
    }
    else if (correo.value=="" && usuarioContraseña==contraseña.value) {
        alert("introduce tu correo");
    }else{
        alert("usuario o contraseña incorrecta");
    }
}


btn.addEventListener("click",verificar);
const myRequest2 = new Request("http://localhost:8000/usuarios");
fetch(myRequest2)
.then(response=>response.json())
.then((data)=>data.forEach((e,p) => {
    usuarioCorreo = e.correo;
    usuarioContraseña = e.contraseña;
	console.log(e.contraseña);
})
);