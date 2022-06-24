// function iniciar() {
// }
// // iniciar la solicitud de los modulos y la ejecucion inicial del sistema.
// //importamos los archivos y librerias necesarios
// requirejs.config({
// 	baseUrl: "assets/js/owner",
// 	paths: { a: "../animaciones", l: "../librerias", n: "/node_modules"},
// });
// requirejs(["l/modernizr",  "validaciones", "alertas", "peticiones"], iniciar);

// const cabecera = new Headers({
// 	"content-type":"text/plain"
// });
// const parametros = {
// 	method:"GET",
// 	header:cabecera,
// 	mode:"cors",
// 	cache:"no-cache"
// };

function construirContenedorProducto(categoria){
	const linea2 = document.createElement("div");
	linea2.className="barProductos";
	const contenido2 =
	`
		<div class="navProductos">
			<div class="conceptoProducto">${categoria}</div>
			<div class="verTodo">ver todo -></div>
		</div>
		<div class="${categoria}"></div>
	`
	linea2.innerHTML = contenido2;
	return linea2;
}
function construirProducto(img,nombre,precio){
	const linea3 = document.createElement("div");
	linea3.className="producto"
	const contenido3 =
	`
		<a href="producto.html" class="imgProducto"><img class="img-producto-barra" src=${img} alt=""></a>
		<div class="descripcionProducto">
			<div class="producto-nombre">${nombre}</div>
			<div class="producto-costo">${precio}</div>
			<a href="producto.html"  class="producto-caracteristicas">Ver producto</a>
		</div>
	`
	linea3.innerHTML = contenido3;
	return linea3;
}
const tabla2 = document.querySelector(".main");
const myRequest2 = new Request("http://localhost:8000/categorias");
fetch(myRequest2)
.then(response=>response.json())
.then((data)=>data.forEach((e,p) => {
	const Linea2 = construirContenedorProducto(e.nombre);
	tabla2.appendChild(Linea2);
	const elemento=`.${e.nombre}`
	const tabla3=document.querySelector(elemento);
	tabla3.classList.add("productos");
	e[e.nombre].forEach((el,pl)=>{
		if(el.categoria==e.nombre){
			const linea3 = construirProducto(el.nombreImagen,el.nombre,el.precio)
			tabla3.appendChild(linea3);
		}
	})
})
);