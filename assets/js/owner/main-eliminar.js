
var btnAgregarProducto=document.getElementById("btnAgregarProducto");



const url = window.location.search;
const parameters = new URLSearchParams(url);
const idProducto = parameters.get("id");



btnAgregarProducto.addEventListener("click",(e)=>{
	const myRequest2 = new Request(`http://localhost:8000/categorias/${idProducto}`,{
	method:"DELETE",
	headers:{
		"content-Type":"application/json"
	}
	});
	fetch(myRequest2)
	.then(response=>response.json())
	.then((data)=>{
		formularioReset(data)
	})
});


function formularioReset(data) {
	alert(data.respuesta)
    window.location.href = "productos.html"
}