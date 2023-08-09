class crearProductos{
    constructor (nombre, precio, cantidad, categoria, id){
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=cantidad;
        this.categoria=categoria;
        this.id= id;
    }
}

const remera= new crearProductos ("remera", 1000, 5, "ropa", "555")
const pantalon= new crearProductos ("pantalon", 20000, 1, "ropa", "111")
const saco= new crearProductos ("saco", 30000, 10, "ropa", "222")
const media= new crearProductos ("media", 200, 100, "ropa", "001")
const zapatilla= new crearProductos ("zapatilla", 50000, 2, "calzado", "011")

const productos= [];

productos.push(remera, pantalon, saco, media, zapatilla)



productos.sort((x,y) => {
    if ( x.nombre < y.nombre ) {
        return -1;
    } else if ( x.nombre > y.nombre ) {
        return 1;
    } else {
        return 0;
    }
});

const IngresarProductoDeseado= prompt("Bienvenido, elija entre los siguientes productos: remera, pantalon, saco, media, zapatilla")

const productoDeseado = productos.find((x) => x.nombre===IngresarProductoDeseado)

function respuestaAPedido (eleccion){
    if (eleccion){
        alert (`su producto "${eleccion.nombre}" ya esta preparado para ir a su domicilio, el valor del mismo es "${eleccion.precio}" y el envio es gratuito`)
    }
    else {
        alert("producto no encontrado, intentelo nuevamente")
    }
};

respuestaAPedido(productoDeseado);
