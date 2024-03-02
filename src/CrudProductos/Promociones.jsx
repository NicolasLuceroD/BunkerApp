import { Button } from "react-bootstrap"
import Table from 'react-bootstrap/Table';
import Producto from "../components/Productos"

const Promociones = () => {
  return (
    <>
       <Producto/>
        <div className="container-fluid">
            <div className="row">
                <div classNamer="col">
                    <h3>Nueva Promocion</h3>                   
                </div>
            </div>
            <div className="row">
                <div classNamer="col">
                    Nombre de la promocion: <input type="text"/>                  
                </div>
            </div>
            <div className="row">
                <div classNamer="col">
                    Codigo de barras: <input type="text"/>                     
                </div>
            </div>
            <div className="row">
                <div classNamer="col">
                Cuando la cantidad vaya desde : <input type="text"/>             
                </div>
                <div classNamer="col">
                Hasta : <input type="text"/>             
                </div>
            </div>
            <div className="row">
                <div classNamer="col">
                    Usar precio unitario: <input type="number"/>               
                </div>
                <div classNamer="col">
                    Precio normal:
                    Precio de costo:          
                </div>

            </div>
            <div className="row">
                <div classNamer="col">
                    <Button className="btn btn-success">Guardar Nueva Promocion</Button>               
                </div>
            </div>
        </div>

    <div>
        <h3>PROMOCIONES VIGENTES</h3>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Nombre de la Promocion</th>
                <th>Codigo producto</th>
                <th>Desde</th>
                <th>Hasta</th>
                <th>Precio Promocion</th>
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
                <tr>
                <td>4</td>
                
                </tr>
                <tr>
                <td>5</td>
                
                </tr>
            </tbody>
        </Table>
    </div>




    </>
  )
}

export default Promociones
