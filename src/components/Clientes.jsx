import React, { useState } from 'react'
import App from '../App'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


 const Clientes = () =>{

  const[id_cliente,setIdCliente] = useState();
  const[nombre_cliente,setNombreCliente] = useState();
  const[apelllido_cliente,setApellidoCliente] = useState();
  const[telefono_cliente,setTelefonoCliente] = useState();
  const[correo_cliente,setCorreoCliente] = useState();
  const[domicilio_cliente,setDomicilioCliente] = useState();
  const[ciudad_cliente,setCiudadCliente] = useState();
  const[codigoPostal_cliente,setCodigoPostal_cliente] = useState();
  const[estadoCliente,setEstadoCliente] = useState();
  
  
  /**********VER CLIENTES************/
  const verClientes = () =>{
    axios.get("http://localhost:3001/clientes").then((response) =>{
      setClientes(response.data)
    });
  }
  
  /*********CREAR CLIENTES************/
  
  const agregarClientes = () =>{
    axios.post("http://localhost:3001/clientes/post",{
      id_cliente:id_cliente,
      nombre_cliente:nombre_cliente,
      apelllido_cliente:apelllido_cliente,
      telefono_cliente:telefono_cliente,
      correo_cliente:correo_cliente,
      domicilio_cliente:domicilio_cliente,
      ciudad_cliente:ciudad_cliente,
      codigoPostal_cliente:codigoPostal_cliente,
      estadoCliente:estadoCliente
    }).then(()=>{
      verClientes()
      limpiarCampos()
    });      
  }

  return (
    <>
      <App/>
      <br />
      <h2>CLIENTES</h2>
      <h4>ADMINISTRACION DE CLIENTES</h4>
      <h4>
        Administra a todos los clientes de tu negocio(credito,facturacion,etc.)
        de forma centralizada.
      </h4>
      <br /><br />
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
        </div>
        <div className="col-">
          <Link to="/nuevoCliente" className='btn btn-info'>Nuevo cliente</Link>
          <Link to="/editarCliente" className='btn btn-warning'>Editar cliente</Link>
          <Link to="/eliminarCliente" className='btn btn-danger'>❌Eliminar cliente</Link>
          <br /> <br />
        
        </div>
      </div>
    </div>

    </>
  )

}
export default Clientes
