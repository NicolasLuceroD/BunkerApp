import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { reportMovimientos, promociones,bajoInventario, ventaxPeriodo,departamentos, compra, corte, ventas, cliente, productos, reportes, facturas, creditos, inventario, configuracion, nuevoProducto, editarProducto, eliminarProducto, catalogo, agregarInventario, ajustesInventario, reportesInventario, estadoCuenta, reporteSaldos, nuevoCliente,editarCliente,eliminarCliente} from './routes/routes.js'
import Clientes from './components/Clientes.jsx'
import Venta from "./components/Venta.jsx"
import Compra from './components/Compras.jsx'
import {Corte} from "./components/Corte.jsx"
import Productos from './components/Productos.jsx'
import Inventario from "./components/Inventario.jsx"
import Reportes from "./components/Reportes.jsx"
import { Facturas } from './components/Facturas.jsx'
import Configuracion from "./components/Configuracion.jsx"
import Creditos from "./components/Creditos.jsx"
import NuevoProduct from "./CrudProductos/NuevoProduct.jsx"
import Eliminar from "./CrudProductos/Eliminar.jsx"
import Editar from "./CrudProductos/Editar.jsx"
import Departamentos from "./CrudProductos/Departamento/Departamento.jsx"
import Promociones from "./CrudProductos/Promociones.jsx"
import VentasXPeriodo from "./CrudProductos/VentasXPeriodo.jsx"
import Catalogo from "./CrudProductos/Catalago.jsx"
import AgregarInv from './CrudInventario/AgregarInv.jsx'
import AjustarInv from './CrudInventario/AjustarInv.jsx'
import BajosInv from './CrudInventario/BajosInv.jsx'
import ReportesInv from './CrudInventario/ReportesInv.jsx'
import ReportMovimientos from './CrudInventario/ReportMovimientos.jsx'
import EstadoCuenta from './CrudCreditos/EstadoCuenta.jsx'
import ReporteSaldos from './CrudCreditos/ReporteSaldos.jsx'
import NuevoCliente from './CrudClientes/NuevoCliente.jsx'
import EditarCliente from './CrudClientes/EditarCliente.jsx'
import EliminarCliente from './CrudClientes/EliminarCliente.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}/>  
          <Route path={ventas} element={<Venta/>}/>
          <Route path={compra} element={<Compra/>}/>
          <Route path={cliente} element={<Clientes/>}/>
          <Route path={corte} element={<Corte/>}/>
          <Route path={reportes} element={<Reportes/>}/>
          <Route path={facturas} element={<Facturas/>}/>
          <Route path={creditos} element={<Creditos/>}/>
          <Route path={configuracion} element={<Configuracion/>}/>
          <Route path={inventario} element={<Inventario/>}/>

          {/* PRODUCTOS */}
          <Route path={productos} element={<Productos/>}/>
          <Route path={nuevoProducto} element={<NuevoProduct/>}/>
          <Route path={editarProducto} element={<Editar/>}/>
          <Route path={eliminarProducto} element={<Eliminar/>}/>
          <Route path={catalogo} element={<Catalogo/>}/>
          <Route path={promociones} element={<Promociones/>}/>
          <Route path={ventaxPeriodo} element={<VentasXPeriodo/>}/>
          <Route path={departamentos} element={<Departamentos/>}/>

          {/* INVENTARIO */}
          <Route path={agregarInventario} element={<AgregarInv/>}/>
          <Route path={ajustesInventario} element={<AjustarInv/>}/>
          <Route path={bajoInventario} element={<BajosInv/>}/>
          <Route path={reportesInventario} element={<ReportesInv/>}/>
          <Route path={reportMovimientos} element={<ReportMovimientos/>}/>
          
          
          {/* CREDITOS */}
          <Route path={estadoCuenta} element={<EstadoCuenta/>}/>
          <Route path={reporteSaldos} element={<ReporteSaldos/>}/>

           {/* CLIENTES*/}
           <Route path={nuevoCliente} element={<NuevoCliente/>}/>
           <Route path={editarCliente} element={<EditarCliente/>}/>
           <Route path={eliminarCliente} element={<EliminarCliente/>}/>

      </Routes>
    </BrowserRouter>
   
  </React.StrictMode>,
)
