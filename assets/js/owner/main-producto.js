
const url = window.location.search;
const parameters = new URLSearchParams(url);
const idProducto = parameters.get("id");


function construirContenedorProducto(imagen,nombre,precio,descripcion){
	const linea2 = document.createElement("div");
	linea2.className="producto-descripcion";
	const contenido2 =
	`
    <div class="img-producto">
        <img class="img-producto-seleccionado" src=${imagen} alt="">
    </div>
    <div class="caracteristicas-producto">
        <div class="nombre-producto">${nombre}</div>
        <div class="precio-producto">${precio}</div>
        <div class="descripcion">${descripcion}</div>
    </div>
   
	`
	linea2.innerHTML = contenido2;
	return linea2;
}
function cajaProductos() {
    const linea3 = document.createElement("div");
	linea3.className="barProductos";
    const contenido3 =
    `
        <div class="navProductos">
            <div class="conceptoProducto">Productos similares</div>
        </div>
        <div class="productos">
        </div>
    `
    linea3.innerHTML = contenido3;
	return linea3;
}
function construirProducto(img,nombre,precio,id){
	const linea3 = document.createElement("div");
	linea3.className="producto"
	const contenido3 =
	`
        <a href="producto.html?id=${id}" class="imgProducto">   <img class="img-producto-barra" src=${img} alt=""></a>
        <div class="descripcionProducto">
            <div class="producto-nombre">${nombre}</div>
            <div class="producto-costo">${precio}</div>
            <a href="producto.html?id=${id}"  class="producto-caracteristicas">Ver producto</a>
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
    e[e.nombre].forEach((el,pl)=>{
        if(el.id==idProducto){
            const categoria = el.categoria;
            const Linea2 = construirContenedorProducto(el.nombreImagen,el.nombre,el.precio,el.descripcion);
            tabla2.appendChild(Linea2);
            const linea3=cajaProductos();
            tabla2.appendChild(linea3);
            if(categoria==el.categoria){
                e[e.nombre].forEach((el,pl)=>{
                    if(idProducto != el.id){
                        const tabla3 = document.querySelector(".productos");
                        const Linea4 = construirProducto(el.nombreImagen,el.nombre,el.precio,el.id);
                        tabla3.appendChild(Linea4);
                    }
                
                })
            }
        }
	})
})
);
