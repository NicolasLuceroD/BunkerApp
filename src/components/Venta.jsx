import React from 'react'
import App from '../App'
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const Venta = () => {
  return (
    <>
    <App/>
      <h4>VENTAS - Ticket</h4>

      <div className="container-fluid">
        <div className="row">
          <div className="col-8">
              <label htmlFor="">Codigo del producto</label><input type="text" name="" id="" />
          </div>
          <div className="col-4">
              <Button className="btn btn-primary">ENTER-Agregar Producto</Button>
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
      </div>


    <div className="container-fluid"> 
      <div className="row">
        <div className="col">
        <Table striped bordered hover>
              <thead>
                <tr>
                  <th></th>
                  <th>Codigo de barras</th>
                  <th>Descripcion del producto</th>
                  <th>Precio Venta</th>
                  <th>Cantidad</th>
                  <th>Importe</th>
                  <th>Existencia</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                </tr>
                <tr>
                  <td>2</td>
                </tr>
                <tr>
                  <td>3</td>
                </tr>       
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
      </div>
      
        
    </div>



    </>
  )
}

export default Venta
