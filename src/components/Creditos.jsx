import React from 'react'
import App from '../App'
import { Link } from 'react-router-dom'

function Creditos() {
  return (
    <>
      <App/>
      <br /><br />
      <h2>CREDITOS A CLIENTES</h2>
      <section className='container-fluid'>
        <div>
          <div className='row'>
            <div className='col-xl'>
            <Link to="/estadoCuenta">Estado de Cuenta</Link>
            </div>
            <div className='col-xl'>
            <Link to="/reporteSaldos">Reportes de Saldos</Link>
            </div>
        </div>
        </div>
    </section>
    <h3>Estado de Cuenta</h3><input type="text"/>
    <h5>Ingresa el folio o nombre del cliente</h5>
    </>
  )
}

export default Creditos