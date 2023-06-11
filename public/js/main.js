// public/js/main.js

// Escuchar el evento "submit" del formulario
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevenir que el formulario se envíe automáticamente

  // Obtener los valores de los campos de texto
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Enviar una solicitud POST al servidor con los datos del formulario
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then(response => response.text())
  .then(message => {
    // Mostrar un mensaje de bienvenida al usuario
    document.getElementById('message').textContent = message;
  })
  .catch(error => {
    console.error(error);
  });
});
