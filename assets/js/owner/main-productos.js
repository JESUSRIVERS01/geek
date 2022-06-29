
function construirContenedorProducto(categoria){
	const linea2 = document.createElement("div");
	linea2.className="barProductos";
	const contenido2 =
	`
		<div class="${categoria}"></div>
	`
	linea2.innerHTML = contenido2;
	return linea2;
}
function construirProducto(img,nombre,precio,id){
	const linea3 = document.createElement("div");
	linea3.className="barProductos"
	const contenido3 =
	`
    <div class="productos">
        <div class="producto">
            <div class="imgProducto">
                <div class="elimimar-editar-img">
                    <a href="eliminar.html?id=${id}" id="eliminar" class="vector-img">
                        <img class="vector" src="assets/img/eliminar.png" alt="">
                    </a>
                    <div class="vector-img">
                        <a href="editar.html?id=${id}" >
                            <img class="vector" src="assets/img/editar.png" alt="">
                        </a>
                    </div>
                </div>
                <img class="img-producto-barra" src=${img} alt="">
            </div>
            <div class="descripcionProducto">
                <div class="producto-nombre">${nombre}</div>
                <div class="producto-costo">${precio}</div>
                <div class="producto-caracteristicas">#${id}</div>
            </div>
        </div>
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
			const linea3 = construirProducto(el.nombreImagen,el.nombre,el.precio,el.id)
			tabla3.appendChild(linea3);
		}
	})
	
})

);


