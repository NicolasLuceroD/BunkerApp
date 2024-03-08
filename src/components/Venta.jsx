import React, { useState,useEffect } from 'react';
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import App from '../App';import axios from 'axios'

const Venta = () => {
    //const [verVenta, setVerVenta] = useState([]);
    const [inputValue,setInputValue] = useState('');
    const [items, setItems] = useState([]);

    const [productosList,setProductosList] = useState([])  
    //PRODUCTOS 
    const [Id_producto, setId_producto] = useState("")
    const [nombre_producto, setNombreProducto] = useState("")
    const [descripcion_producto, setDescripcionProducto] = useState("")
    const [precio_producto, setPrecioProducto] = useState("")
    const [cantidad_producto, setCantidadProducto] = useState("")

    //VENTA
    const [Id_venta, setIdVenta] = useState("")
    const [drescripcion_venta, setDescripcion_venta] = useState("")
    const [precioTotal_venta, setPrecioTotal] = useState("")


    //CLIENTES
    const [Id_cliente, setIdCliente] = useState("")
    const [nombre_cliente, setNombre_cliente] = useState("")
    const [apellido_cliente, setApellido_cliente] = useState("")
    const [telefono_cliente, setTelefonoCliente] = useState("")
    const [correo_cliente, setCorreoCliente] = useState("")
    const [codigoPosta_cliente, setCodigoPostal] = useState("")



    //DETALLE VENTA
    const [Id_detalleVenta, setId_detalleVenta] = useState ("")
    const [Id_metodoPago, setId_metodoPago] = useState("")
    const [ventasTotales_detalleVenta, setventasTotales_detalleVenta] =useState ("")
    const [ganacia_detalleVenta, setGanacia_detalleVenta] =useState ("")
    const [descripcion_detalleVenta, setDescripcion_detalleVenta] = useState("")








    const handleInputChange = (e) => {
    setNombreProducto(e.target.value);
    };





    console.log(nombre_producto)


    const AgregarProducto = () => {
    axios.get(`http://localhost:3001/productos?nombre_producto=${nombre_producto}`).then((response) => {
    console.log(response)
    const product = response.data;

    if (product) {
    setId_producto(product.Id_producto)
    setNombreProducto(product.nombre_producto)
    setDescripcionProducto(product.descripcion_producto)
    setPrecioProducto(product.precio_producto)
    setCantidadProducto(product.cantidad_producto)

    } else {
    console.log('ERROR NO EXISTE ');
    }
    });
    };






    // const AgregarProducto = () => {
    //     axios.get(`http://localhost:3001/productos?nombre_producto=${nombre_producto}`)
    //     .then((response) => {
    //       console.log(response.data)
    //       const product = response.data;
    //       if (product) {
    //         setId_producto(product.Id_producto)
    //         setNombreProducto(product.nombre_producto)
    //         setDescripcionProducto(product.descripcion_producto)
    //         setPrecioProducto(product.precio_producto)
    //         setCantidadProducto(product.cantidad_producto)
    //       } else {
    //         console.log('ERROR NO EXISTE ');
    //       }
    //     });
    //   };


    ///MOSTRAR  A MAURO LA

    // const registrarVenta = () =>{
    //   axios.post("http://localhost:3001/venta/post",{
    //     drescripcion_venta: drescripcion_venta,
    //     precioTotal_venta: precioTotal_venta,
    //     Id_detalleVenta: Id_detalleVenta
    //   }).then(()=>{
    //     items.forEach((producto)=>{
    //       axios.post("http://localhost:3001/detalleVenta/post",{
    //         descripcion_detalleVenta: descripcion_detalleVenta,
    //         ventasTotales: ventasTotales,
    //         ganacia_detalleVenta: ganacia_detalleVenta, 
    //         Id_metodoPago: Id_metodoPago,
    //         Id_producto: Id_producto,
    //         Id_cliente: Id_cliente
    //     })  
    //     }).then(()=>{
    //       console.log('no se')      
    //     }).catch((error)=>{
    //       console.log(error)
    //     })
    //   })
    //   setProductosList()
    // }




    useEffect(() =>{
    AgregarProducto()
    }, []);


    return (
    <>
    <App/>

    <h4>VENTAS - Ticket</h4>

    <div className="container-fluid">
    <div className="row">
    <div className="col-8">
    <label htmlFor="nombre_producto">Nombre del producto</label>
    <input 
      type="text" 
      // id="nombre_producto" 
      value={nombre_producto} 
      onChange={handleInputChange}
      placeholder='Ingrese un producto...'
    />
    </div>
    <div className="col-4">
    <Button className="btn btn-primary" onClick={AgregarProducto} >ENTER - Agregar Producto</Button>

    </div>
    </div>
    </div> 
    <div className="row">
    <div className="col">
    <Button className="btn btn-primary">INS Varios</Button>
    </div>
    <div className="col">
    <Button className="btn btn-primary">CRTL+P Art. Comun</Button>
    </div>
    <div className="col">
    <Button className="btn btn-primary">F10 Buscar</Button>
    </div>
    <div className="col">
    <Button className="btn btn-primary">F11 Mayoreo</Button>
    </div>
    <div className="col">
    <Button className="btn btn-primary">F7 Entradas</Button>
    </div>
    <div className="col">
    <Button className="btn btn-primary">F8 Salidas</Button>
    </div>
    <div className="col">
    <Button className="btn btn-primary">DEL Borrar Art.</Button>
    </div>
    <div className="col">
    <Button className="btn btn-primary">F9 - Verificador</Button>
    </div>
    </div>
    <div className="container-fluid"> 
    <div className="row">
    <div className="col">
    <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Nombre producto</th>
        </tr>
      </thead>
      <tbody>
        {productosList && productosList.map((producto) => (
          <tr key={producto.Id_producto}>
            <td>{producto.Id_producto}</td>
            <td>{producto.nombre_producto}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
    </div>
    </div>

    <div className="container-fluid">
    <div className="row">
    <div className="col">
    "cantidad de product" Productos en la venta actual
    </div>
    </div>
    <div className="row">
    <div className="col">
    <Button className="btn btn-primary">F5-Cambiar</Button>
    </div>
    <div className="col">
      <Button className="btn btn-primary">F5-Pendiente</Button>
    </div>
    <div className="col">
      <Button className="btn btn-primary">Eliminar</Button>
    </div>
    <div className="col">
      <Button className="btn btn-primary">Asignar Cliente</Button>
    </div>
    <div className="col">
      <Button className="btn btn-primary">F12 COBRAR</Button>
    </div>
    <div className="col">
      <h3>$0.00</h3>
    </div>
    </div>

    <div className="row">
    <div className="col">
      Total: $0.00
    </div>
    <div className="col">
      Pago con:  $0.00
    </div>
    <div className="col">
      Cambio:  $0.00
    </div>
    <div className="col">
    <Button className="btn btn-primary">Borrar</Button>
    </div>
    <div className="col">
      <Button className="btn btn-primary">Reimprimir ultimo ticket</Button>
    </div>
    <div className="col">
      <Button className="btn btn-primary">Venta y devoluciones del dia</Button>
    </div>
    <div className="col">
    <Button className="btn btn-primary"  >TERMINAR VENTA</Button>
    </div>
    </div>


    </div>
    </>
  );
}

export default Venta;
