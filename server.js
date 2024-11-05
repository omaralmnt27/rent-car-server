const express = require("express");
const cors = require("cors");
const usuariosRoutes = require('./rutas/usuario'); // Asegúrate de que la ruta sea correcta

const app = express();

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Middleware para habilitar CORS
app.use(cors({
  origin: 'http://192.168.100.23:3000' // Permitir solo el frontend en esta dirección
}));

// Configuración de las rutas
app.use('/usuarios', usuariosRoutes);

// Inicio del servidor
const PORT = 4000; // Puerto en el que el servidor escuchará
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
