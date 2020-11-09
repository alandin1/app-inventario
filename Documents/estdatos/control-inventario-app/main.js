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
        this.capacidadMaxima = 30
        this.size = 0
        this.start = null
    }

    agregarProducto(producto){
        if(this.start == null){
            this.inicio = producto 
        } else {
            let pod = this.start
            while(pod.siguiente !== null) {
                pod = pod.siguiente 
            }
                pod.siguiente = producto
            }
            this.size++
            return Producto.producto
        }
    
    insertarProducto(producto, place){
        if(place<0 || this.capacidad.length >= this.size){
            return false
        }else{
            let pod = this.start
            let anterior 

            if(place==0){
                producto.siguiente = pod
                this.start = producto
            }else{
                for(let i=0; i<place; i++){
                    anterior = pod
                    pod = pod.siguiente
                }
                producto.siguiente = pod
                anterior.siguiente = producto
            }
            this.size++
        } return producto.producto
    }
    
} // final

let pruebaAlmacen = new Almacen()
let a1 = new Producto(556,"agua","agua ciel", 8, 20)
let a2 = new Producto(557,"coca","coca-cola ", 2, 20)
let a3 = new Producto(558,"papas","sabritas", 2, 20)
let a4 = new Producto(559,"fruta","manzana", 1, 20)
pruebaAlmacen.agregarProducto(a1)
pruebaAlmacen.agregarProducto(a2)
pruebaAlmacen.agregarProducto(a3)
pruebaAlmacen.insertarProducto(a4,1)
console.log(pruebaAlmacen.agregarProducto())
console.log(pruebaAlmacen)
