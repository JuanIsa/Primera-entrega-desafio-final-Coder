'use strict';
import express from 'express';
import productosRoute from './routes/productos.js';
import carritoRoute from './routes/carrito.js';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = process.env.PORT || 8080;

//Midlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(cors())

//SET TEMPLATE ENGINES
app.set('views', './src/views');
app.set('view engine', 'ejs');

//ROUTES
app.use('/api/productos', productosRoute);
app.use('/api/carrito', carritoRoute);
//RUTA 404
app.use('*', (req, res) => {
    res.status(404).json({ error: -2, descripcion: `ruta:${req.url}`, método: `${req.method} no implementado.`});
});

//PUBLIC
app.get('/prueba', (req, res) => {
    res.render('index');
});


//ESCUCHA DEL SERVER
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto: ${PORT}.`);
});