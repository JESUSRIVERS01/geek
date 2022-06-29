var imgUrl=document.getElementById("imgUrl");
var categoriaProductoNuevo=document.getElementById("categoriaProductoNuevo");
var nombreProducto=document.getElementById("nombreProducto");
var precioProducto=document.getElementById("precioProducto");
var descripcionProducto=document.getElementById("descripcionProducto");
var btnAgregarProducto=document.getElementById("btnAgregarProducto");
var form = document.getElementById("form");

btnAgregarProducto.addEventListener("click",(e)=>{
	var nombreImagen = imgUrl.value;
	var categoria = categoriaProductoNuevo.value;
	var nombre = nombreProducto.value;
	var precio = precioProducto.value;
 	var descripcion = descripcionProducto.value;
	
	const myRequest2 = new Request("http://localhost:8000/categorias",{
	method:"POST",
	headers:{
		"content-Type":"application/json"
	},
	body:JSON.stringify({nombreImagen,categoria,nombre,precio,descripcion})
	});
	fetch(myRequest2)
	.then(response=>response.json())
	.then((data)=>{
		formularioReset(data)
	})

});

function formularioReset(data) {
	alert(data.respuesta)
	form.reset();
}