import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios'
import Clientes from '../components/Clientes';
import { Button } from 'react-bootstrap';


const NuevoCliente = () => {

const[id_cliente,setIdCliente] = useState();
const[nombre_cliente,setNombreCliente] = useState();
const[apellido_cliente,setApellidoCliente] = useState();
const[telefono_cliente,setTelefonoCliente] = useState();
const[correo_cliente,setCorreoCliente] = useState();
const[domicilio_cliente,setDomicilioCliente] = useState();
const[ciudad_cliente,setCiudadCliente] = useState();
const[codigoPostal_cliente,setCodigoPostal_cliente] = useState();
const[estado_cliente,setEstadoCliente] = useState();
const[ver,setVer] = useState([]);



/**********VER CLIENTES************/
const verClientes = () =>{
  axios.get("http://localhost:3001/cliente").then((response) =>{
    setVer(response.data)
  });
}

/*********CREAR CLIENTES************/

const agregarClientes = () =>{
  axios.post("http://localhost:3001/cliente/post",{
    id_cliente:id_cliente,
    nombre_cliente:nombre_cliente,
    apellido_cliente:apellido_cliente,
    telefono_cliente:telefono_cliente,
    correo_cliente:correo_cliente,
    domicilio_cliente:domicilio_cliente,
    ciudad_cliente:ciudad_cliente,
    codigoPostal_cliente:codigoPostal_cliente,
    estado_cliente: estado_cliente
  }).then(()=>{
    verClientes()
  });      
}


  useEffect(() => {
    verClientes()
  }, [])
  


  return (
   <>
   <Clientes/>
   <h4>AGREGAR NUEVO CLIENTE</h4>
   <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        Nombre: <input type="text" value={nombre_cliente} onChange={(e) => setNombreCliente(e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Apellidos: <input type="text" value={apellido_cliente} onChange={(e) => setApellidoCliente(e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Telefono: <input type="text" value={telefono_cliente} onChange={(e) => setTelefonoCliente(e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Correo: <input type="text" value={correo_cliente} onChange={(e) => setCorreoCliente(e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Domicilio: <input type="text" value={domicilio_cliente} onChange={(e) => setDomicilioCliente(e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Ciudad: <input type="text" value={ciudad_cliente} onChange={(e) => setCiudadCliente(e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Codigo Postal: <input type="text" value={codigoPostal_cliente} onChange={(e) => setCodigoPostal_cliente(e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Estado: <input type="text" value={estado_cliente} onChange={(e) => setEstadoCliente(e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Button className="btn btn-info" onClick={agregarClientes}>✔️Guardar Cliente</Button>
                    </div> 
                </div>
            </div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Telefono</th>
                        <th>Correo</th>
                        <th>Domicilio</th>
                        <th>Ciudad</th>
                        <th>Codigo Postal</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ver.map((val, key) => (
                            <tr key={val.Id_cliente}>
                                <td>{val.nombre_cliente}</td>
                                <td>{val.apellido_cliente}</td>
                                <td>{val.telefono_cliente}</td>
                                <td>{val.correo_cliente}</td>
                                <td>{val.domicilio_cliente}</td>
                                <td>{val.ciudad_cliente}</td>
                                <td>{val.codigoPostal_cliente}</td>
                                <td>{val.estado_cliente}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
   
   </>
  )
}

export default NuevoCliente