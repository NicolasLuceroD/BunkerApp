import App from '../App'
import Clientes from '../components/Clientes';
import { Button } from "react-bootstrap"
import {Dropdown} from "react-bootstrap"
import React, { useState, useEffect } from 'react';
import axios from 'axios';




const EditarCliente = () => {
    const [Id_cliente,setIdCliente] = useState('');
    const [nombre_cliente,setNombreCliente] = useState('');
    const [apellido_cliente,setApellidoCliente] = useState('');
    const [telefono_cliente,setTelefonoCliente] = useState();
    const [correo_cliente,setCorreoCliente] = useState();
    const [domicilio_cliente,setDomicilioCliente] = useState();
    const [ciudad_cliente,setCiudadCliente] = useState();
    const [codigoPostal_cliente,setCodigoPostal_cliente] = useState();
    const [estado_cliente,setEstadoCliente] = useState();
    const [ver,setVer] = useState([]);


    const verClientes = () => {
        axios.get("http://localhost:3001/cliente")
            .then((response) => {
                setVer(response.data);
            })
            .catch((error) => {
                console.log('Error al obtener los clientes:', error);
            });
    };

    const editarClientes = () =>{
        axios.put(`http://localhost:3001/cliente/put/${Id_cliente}`,
        {    
            Id_cliente:Id_cliente,
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


    const seeClientes = (val) =>{

        setIdCliente(val.Id_cliente)
        setNombreCliente(val.nombre_cliente)
        setApellidoCliente(val.apellido_cliente)
        setTelefonoCliente(val.telefono_cliente)
        setCorreoCliente(val.correo_cliente)
        setDomicilioCliente(val.domicilio_cliente)
        setCiudadCliente(val.ciudad_cliente)
        setCodigoPostal_cliente(val.codigoPostal_cliente)
        setEstadoCliente(val.estado_cliente)
    }

    useEffect(() => {
        verClientes();
    }, []);


  return (
<>
   <Clientes/>
   <h4>EDITAR CLIENTE</h4>
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
                        <Button className="btn btn-warning" onClick={editarClientes}>✔️Editar Cliente</Button>
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
                        ver.map((val, index) => (
                            <tr key={val.Id_cliente}>
                                <td>{val.nombre_cliente}</td>
                                <td>{val.apellido_cliente}</td>
                                <td>{val.telefono_cliente}</td>
                                <td>{val.correo_cliente}</td>
                                <td>{val.domicilio_cliente}</td>
                                <td>{val.ciudad_cliente}</td>
                                <td>{val.codigoPostal_cliente}</td>
                                <td>{val.estado_cliente}</td>
                                <div className='btn-group' role='group' aria-label="Basic example">
                                     <button type='button' className='btn btn-warning m-2' onClick={()=>{seeClientes(val)}}> EDITAR </button>
                                </div>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
    </>
  )
}

export default EditarCliente