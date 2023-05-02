let miTienda = [];

miTienda.push(new Producto('arroz','comestibles','tres Hermanos',200,140));
miTienda.push(new Producto('pan','comestibles','bimbo',700,190));
miTienda.push(new Producto('lavandina','limpieza','ayudin',98,320));
miTienda.push(new Producto('jabon','limpieza','skip',70,85));
miTienda.push(new Producto('foco','ferreteria','lucecita',180,340));

///Opciones para buscar en el array o modificarlo:

///1- Mostrar todos los productos de un mismo tipo
function mostrarProducto(){
    const tipoIngresado = prompt("Indique el tipo de producto");
    miTienda.forEach((producto) => {
        if (producto.tipo === tipoIngresado.toLocaleLowerCase()){
            console.log(`Nombre: ${producto.nombre} - Tipo: ${producto.tipo} - Marca: ${producto.marca} - Precio: $${producto.precio} - Stock: ${producto.stock}`)}
    }
    )
};
mostrarProducto();

///2- Buscar un producto por su marca
function buscarMarca(){
    const marcaIngresada = prompt("Indique marca");
    const marcaEncontrada = miTienda.find((producto) => producto.marca === marcaIngresada.toLowerCase());
    if (marcaEncontrada) {
        console.log(`Nombre: ${marcaEncontrada.nombre} - Tipo: ${marcaEncontrada.tipo} - Marca: ${marcaEncontrada.marca} - Precio: $${marcaEncontrada.precio} - Stock: ${marcaEncontrada.stock}`) 
    }else {
        console.log("marca no encontrada");
    }
}
buscarMarca();

///3- Eliminar un producto por su nombre y mostrar array actualizado
function eliminarProductoNombre(){
    const nombreIngresado = prompt("Indique nombre del producto que desea eliminar");
    const tiendaDos = miTienda.filter(function(producto) {
        return producto.nombre !== nombreIngresado.toLowerCase();
    });
    miTienda = tiendaDos;
console.log("Listado actualizado de productos:")
miTienda.forEach((producto) => {
    console.log(`Nombre: ${producto.nombre} - Tipo: ${producto.tipo} - Marca: ${producto.marca} - Precio: $${producto.precio} - Stock: ${producto.stock}`)})
}
eliminarProductoNombre();


///4- Agregar un producto y mostrar array actualizado
function agregarNuevoProducto(){
const nuevoProdNombre = prompt('Indique el nombre del nuevo producto');
const nuevoProdTipo = prompt('Indique el tipo del nuevo producto');
const nuevoProdMarca = prompt('Indique la marca del nuevo producto');
const nuevoProdPrecio = prompt('Indique el precio del nuevo producto');
const nuevoProdStock = prompt('Indique el stock del nuevo producto');
miTienda.push(new Producto(nuevoProdNombre, nuevoProdTipo,nuevoProdMarca, nuevoProdPrecio, nuevoProdStock));
console.log('Listado actualizado de productos:');
miTienda.forEach((producto) => {
    console.log(`Nombre: ${producto.nombre} - Tipo: ${producto.tipo} - Marca: ${producto.marca} - Precio: $${producto.precio} - Stock: ${producto.stock}`)});
}
agregarNuevoProducto();