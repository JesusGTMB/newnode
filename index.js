const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Configurar la aplicación para analizar los datos de las solicitudes HTTP
app.use(bodyParser.urlencoded({ extended: false }));

// Configurar la aplicación para servir archivos estáticos desde la carpeta "public"
app.use(express.static(__dirname + '/public'))

// Manejar la ruta raíz del sitio
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

// Manejar la ruta del formulario de inicio de sesión
app.post('/', (req, res) => {
  const { username, password } = req.body;
  // Aquí puedes verificar las credenciales del usuario
  res.send(`Bienvenido, ${username}!`);
});

// Manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Oops! Algo salió mal.');
});

// Iniciar el servidor web en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});
