// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir archivos estáticos desde la carpeta actual
app.use(express.static(path.join(__dirname)));

// Iniciar server
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
