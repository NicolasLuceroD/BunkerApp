const {connection} = require ('../database/config')

 
const verProductos =(req,res)=>{
    connection.query('SELECT p.Id_producto, p.nombre_producto, p.descripcion_producto, p.precio_producto, p.cantidad_producto, c.nombre_categoria, c.descripcion_categoria FROM Producto p  INNER JOIN Categoria c  ON p.Id_categoria = c.Id_categoria',
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


const ProductoList = (req,res) =>{
    const nombre_producto = req.query.nombre_producto
    if(!nombre_producto){
        res.status(400).sed("falta el producto capo")
        return;
    }

    db.query("SELECT Id_producto, nombre_producto, descripcion_producto, precio_producto, catindad_producto WHERE nombre_producto = ?" ,[nombre_producto],
    (err,result)=>{if (err) {
        console.log(err);
        res.status(500).send("Error al buscar el producto.");
      } else {
        if (result.length === 0) {
          res.status(404).send("Producto no encontrado.");
        } else {
          res.send(result[0]); 
        }
      }
    });
}


module.exports= {verProductos,crearProductos,editarProductos,eliminarProductos,ProductoList}