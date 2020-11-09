class Producto {
    constructor(codigo, producto, descripcion, cantidad, costo){
        this.codigo = codigo
        this.producto = producto
        this.descripcion = descripcion
        this.cantidad = cantidad
        this.costo = costo
        this.siguiente = null
    }

    calcularPrecio(){
        let producto = this.cantidad
        let costoProducto = this.costo
        let costoTotal = producto * costoProducto
        return costoTotal
    }
}

class Almacen {
    constructor(){
        this.capacidad = []
        
    }
}