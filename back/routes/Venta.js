const {Router} = require('express')
const router = Router() 

const {verVenta, crearVenta,crearDetalleVenta,eliminarVenta, verDetalleVenta, eliminarDetalleVenta} = require('../controllers/Venta')

/* VENTA*/
router.get("/venta",verVenta)
router.post("/venta/post", crearVenta)
router.delete("/venta/delete/:Id_venta", eliminarVenta)


/*DETALLE VENTA*/
router.get("/detalleVenta", verDetalleVenta)
router.post("/detalleVenta/post", crearDetalleVenta)
router.delete("/detalleVenta/delete/:Id_detalleVenta", eliminarDetalleVenta)


module.exports= router



