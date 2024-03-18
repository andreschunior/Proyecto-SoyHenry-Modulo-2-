class carritoCompra {
constructor() {
    this.items = [];
    this.porcentajeDescuento = 0 ;
}
agregarProducto(producto) {
    this.items.push(producto);
}
calcularTotal() {
let total = 0;
    for ( let i = 0 ; i < this.items.length ; i ++) {

        total += this.items[i].precio; 
    }
    return total; 
}
setPorcentajeDescuento(porcentaje){
    this.porcentajeDescuento = porcentaje;

    return porcentaje;
}
aplicarDescuento(){
    let total = this.calcularTotal();
    let porcentajeDescuento = (this.porcentajeDescuento / 100);
    let precioDescuento = (total * porcentajeDescuento);

    return precioDescuento;
}


}

const miCarritoCompra =  new carritoCompra();
const producto = {
    id : 1 ,
    nombre : 'leche',
    precio : 15
} ;
const producto2 = {
    id : 2,
    nombre : 'queso',
    precio : 15
} ;
miCarritoCompra.agregarProducto(producto);
miCarritoCompra.agregarProducto(producto2);

miCarritoCompra.setPorcentajeDescuento(50);
const total = miCarritoCompra.calcularTotal();
const descuento = miCarritoCompra.aplicarDescuento();



console.log(miCarritoCompra);
console.log('Total sin descuento:', total);
console.log('Total con descuento:', descuento);
module.exports = carritoCompra;