import React from 'react'
import Creditos from '../components/Creditos'
import { Button, Dropdown, Table } from 'react-bootstrap'

export default function EstadoCuenta() {
  return (
    <>
    <Creditos/>
    <br /> <br />
    <h4>Nombre Ciente:</h4>
          
            <Button variant='info'>Abonar a deuda</Button>
            <Button variant='danger'>Liquidar</Button>
            <Button variant='warning'>Imprimir estado de Cuenta</Button>
            <label htmlFor="">Movimientos:</label>  
            <Dropdown>      
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">-Ultimos 90 dias-</Dropdown.Item>
                <Dropdown.Item href="#/action-1">-De este mes-</Dropdown.Item>
                <Dropdown.Item href="#/action-1">-De esta semana-</Dropdown.Item>
                <Dropdown.Item href="#/action-1">-Desde ultima liquidacion-</Dropdown.Item>
              </Dropdown.Menu>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                  De siempre 
                </Dropdown.Toggle>
            </Dropdown>

      <div className="container-fluid">
        <div className="row">
          <div className="col-7">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Fecha/Hora</th>
                  <th>Folio</th>
                  <th>Movimiento</th>
                  <th>Descripcion</th>
                  <th>Monto</th>
                  <th>Saldo Actual</th>
                  <th>Cajero</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className='col-5'>
              Folio:
              Cajero:
              Cliente:
              Fecha
            <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Cant.</th>
                      <th>Descripcion</th>
                      <th>Importe</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                    </tr>
                  </tbody>
            </Table>
              Total:<br/>
              Pago con:<br/>
              Monto Pendiente<br/>
            <Button className="btn btn-success">Imprimir</Button>
            <Button className="btn btn-danger">Cancelar</Button>
          </div>
        </div>
      </div>
    </>
  )
}
