import { Button } from "react-bootstrap"
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Clientes from "../components/Clientes";

const EliminarCliente = () => {
    
    const [Id_cliente, setId_Cliente] = useState('');
    const [ver, setVer] = useState([]);
    
    const verClientes = () => {
        axios.get("http://localhost:3001/cliente")
            .then((response) => {
                setVer(response.data);
            })
            .catch((error) => {
                console.log('Error al obtener los productos', error);
            });
    };


    const eliminarCliente =(Id_cliente) =>{
        axios.delete(`http://localhost:3001/cliente/delete/${Id_cliente}`,
        {}
        ).then(()=>{
            verClientes()
        }).catch((error)=>{
            console.log('No se pudo eliimnar wachin', error)
        })
    }

    useEffect(() => {
        verClientes();
    }, []);


  return (
    <>
        <Clientes/>
      <h4>ELIMINAR CLIENTE</h4>
        <br />
        <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Departamento</th>
                        <th>Codigo Postal</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ver.map((val, key) => (
                            <tr key={val.Id_producto}>
                                <td>{val.nombre_cliente}</td>
                                <td>{val.apellido_cliente}</td>
                                <td>{val.telefono_cliente}</td>
                                <td>{val.correo_cliente}</td>
                                <td>{val.domicilio_cliente}</td>
                                <td>{val.ciudad_cliente}</td>
                                <td>{val.codigoPostal_cliente}</td>
                                <td>{val.estado_cliente}</td>
                                <div className='btn-group' role='group' aria-label="Basic example">
                                     <button type='button' className='btn btn-danger m-2' onClick={() => eliminarCliente(val.Id_cliente)}> Eliminar </button>
                                </div>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
    </>
  )
}

export default EliminarCliente
