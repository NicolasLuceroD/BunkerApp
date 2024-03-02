const {connection} = require ('../database/config')
 
const verProductos =(req,res)=>{
    connection.query('SELECT * FROM Producto',
    (error,results)=>{
        if(error)throw error
        res.json(results)
    })
}


const crearProductos = (req,res) =>{
    connection.query('INSERT INTO Producto SET ? ',
    {
        Id_producto:req.body.Id_producto,
        nombre_producto: req.body.nombre_producto,
        descripcion_producto: req.body.descripcion_producto,
        precio_producto: req.body.precio_producto,
        cantidad_producto: req.body.cantidad_producto,
        Id_categoria: req.body.Id_categoria

    }, (error,results)=>{
        if(error) throw error
        res.json("Producto Agregado")
    })
}


const editarProductos = (req,res)=>{
    const Id_producto= req.params.Id_producto
    const{nombre_producto,descripcion_producto,precio_producto,cantidad_producto,Id_categoria} = req.body
    connection.query(`UPDATE Producto SET

                            nombre_producto='${nombre_producto}',
                            precio_producto='${precio_producto}',
                            cantidad_producto= '${cantidad_producto}',
                            descripcion_producto='${descripcion_producto}',
                            Id_categoria = '${Id_categoria}'

                            
                            WHERE Id_producto = ${Id_producto}`,
                    
                            (error,results)=>{
                                if(error) throw error
                                res.json("Producto Editado")
                            }
                            )
}


const eliminarProductos = (req,res) =>{
    const Id_producto=req.params.Id_producto
    connection.query('DELETE FROM Producto WHERE Id_producto= ' + Id_producto,
    (error,results)=>{
        if(error) throw error
        res.json(results)
    }
    )
}

module.exports= {verProductos,crearProductos,editarProductos,eliminarProductos}