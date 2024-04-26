document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const displayName = urlParams.get('personaje');


  fetch('https://valorant-api.com/v1/agents')
  .then(response => response.json())
  .then(data => {
    const personaje = data.data.find(p => p.displayName === decodeURIComponent (displayName));
    const informacionDetallada = document.getElementById('informacion-detallada');
    informacionDetallada.innerHTML = `

      <img src="${personaje.displayIcon}" alt="Foto de ${personaje.displayName}">
      <h2>${personaje.displayName}</h2>
      <p>${personaje.description}</p>
      <p>${personaje.role.description}</p>
      `;
  })
.catch(error => {
  console.log('Hubo un problema con la petición Fetch:' + error.message);
});


});