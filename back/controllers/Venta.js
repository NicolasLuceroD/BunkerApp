const {connection} = require("../database/config")


const verVenta = (req,res) =>{
    connection.query('SELECT v.Id_venta, v.descripcion_venta, v.precioTotal_venta, dv.descripcion_detalleVenta, dv.ventasTotales_detalleVenta, dv.ganacia_detalleVenta, dv.Id_metodoPago, dv.Id_cliente, dv.Id_producto  FROM Venta v INNER JOIN DetalleVenta dv  ON v.Id_detalleVenta = dv.Id_detalleVenta', 
    (error,results) =>{                                                                                                                                                                                                               
        if(error)throw error
        res.json(results)
    }
    )
}



const verDetalleVenta = (req,res) =>{
    connection.query(`SELECT 
                    dv.Id_detalleVenta, dv.descripcion_detalleVenta, dv.ventasTotales_detalleVenta, dv.ganacia_detalleVenta,
                    cl.nombre_cliente, cl.apellido_cliente, cl.telefono_cliente, cl.correo_cliente, cl.domicilio_cliente, cl.ciudad_cliente, cl.codigoPostal_cliente, cl.estado_cliente,
                    mp.tipo_metodoPago,
                    p.nombre_producto, p.descripcion_producto, p.precio_producto, p.cantidad_producto
                    FROM DetalleVenta dv
                    INNER JOIN Cliente cl ON dv.Id_cliente = cl.Id_cliente
                    INNER JOIN MetoPago mp ON dv.Id_metodoPago = mp.Id_metodoPago
                    INNER JOIN Producto p ON dv.Id_producto = p.Id_producto;`,
    (error,results)=>{
        if(error) throw error
        res.json(results)
    })
}

const crearVenta = (req,res) => {
    connection.query('INSERT INTO Venta SET ? ',
    {
        Id_venta : req.body.Id_venta,
        descripcion_venta : req.body.descripcion_venta,
        precioTotal_venta: req.body.precioTotal_venta,
        Id_detalleVenta: req.body.Id_detalleVenta
    },(error,results)=>{
        if(error)throw error
        res.json(results)
    })
}


const crearDetalleVenta = (req,res) =>{
    connection.query("INSERT INTO DetalleVenta  SET ?",
    {
        Id_detalleVenta : req.body.Id_detalleVenta ,
        descripcion_detalleVenta: req.body.descripcion_detalleVenta,
        ventasTotales_detalleVenta: req.body.ventasTotales_detalleVenta,
        ganacia_detalleVenta: req.body.ganacia_detalleVenta,
        Id_metodoPago: req.body.Id_metodoPago,
        Id_producto: req.body.Id_producto,
        Id_cliente: req.body.Id_cliente,
    },(error,results)=>{
        if(error)throw error
        res.json(results)
    })
}


const eliminarVenta = (req,res) => {
    const Id_venta= req.params.Id_venta
    connection.query = ('DELETE FROM Venta WHERE Id_venta=' + Id_venta, 
    (error,results)=>{
        if(error) throw error
        res.json(results)
    })
}

const eliminarDetalleVenta = (req,res) =>{ 
    const Id_detalleVenta = req.params.Id_detalleVenta
    connection.query = ('DELETE FROM DetalleVenta WHERE Id_detalleVenta =' + Id_detalleVenta,
    (error,results)=>{
        if(error) throw error
        res.json(results)
    })
}



module.exports = {verDetalleVenta, verVenta,crearVenta,crearDetalleVenta,eliminarVenta,eliminarDetalleVenta}