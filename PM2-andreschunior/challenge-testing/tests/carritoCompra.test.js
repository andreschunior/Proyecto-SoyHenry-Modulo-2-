const carritoCompra = require("../tests/index");


// test 1 constructor 

describe('CarritoCompra', () => {
    test('El carrito se inicializa como un array vacío', () => {
      const carrito = new carritoCompra();
      expect(carrito.items).toEqual([]);
    });
  });


  // segundo test agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

  describe('carritoCompra', () => {
    test('Debe agregar un producto al carrito', () => {
      const carrito = new carritoCompra();
      const producto = { id: 1, nombre: 'Producto de prueba', precio: 10 };
  
      carrito.agregarProducto(producto);
  
      expect(carrito.items).toContain(producto);
     
    });
  });
// tercer test calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.
describe('carritoCompra', () => {
    test('Calcula el total de la compra sumando los precios de todos los productos en el carrito', () => {
      const carrito = new carritoCompra();
      const producto = { id: 1, nombre: 'Producto de prueba', precio: 10 };
      const producto2 = { id: 2, nombre: 'Producto de prueba2', precio: 15 };

      carrito.agregarProducto(producto2);
      carrito.agregarProducto(producto);
      
      
  
      const total = carrito.calcularTotal();
  
      expect(total).toEqual(25);
    });
  });


// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.
describe('carritoCompra', () => {
    test('Aplica un descuento al total de la compra según el porcentaje especificado.', () => {
      const carrito = new carritoCompra();
      const producto = { id: 1, nombre: 'Producto de prueba', precio: 15 };
      const producto2 = { id: 2, nombre: 'Producto de prueba2', precio: 15 };

      carrito.agregarProducto(producto2);
      carrito.agregarProducto(producto);

      carrito.setPorcentajeDescuento(50);

      const totalAntesDescuento = carrito.calcularTotal();

      const descuento = carrito.aplicarDescuento();

      const totalDespuesDescuento = totalAntesDescuento - descuento;
      expect(totalDespuesDescuento).toEqual(totalAntesDescuento * 0.5);
    });
  });
