document.addEventListener("DOMContentLoaded", function() {
   fetch('https://valorant-api.com/v1/agents')
      .then(response => response.json())
      .then(data => {
        const cardContainer = document.querySelector('.card-container');
     data.data.forEach(personaje => {
          const card = document.createElement('div');
          card.classList.add('card');
          card.innerHTML = `
            <img src="${personaje.displayIcon}" alt="Foto de ${personaje.displayName}">
            <div>
           <h2>${personaje.displayName}</h2>
            <p>${personaje.description}</p>
            <button onclick="verInformacionDetallada('${personaje.displayName}')">Ver información detallada</button>
            <i class="fas fa-trash"></i>
           </div>
          `;
    cardContainer.appendChild(card);
      });
      })
      .catch(error => {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
      });
  });
  
  function verInformacionDetallada(displayName) {
    window.location.href = `informacion-detallada.html?personaje=${encodeURIComponent(displayName)}`;
  }
  