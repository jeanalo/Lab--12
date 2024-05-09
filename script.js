document.addEventListener("DOMContentLoaded", function() {
  fetch('https://valorant-api.com/v1/agents')
    .then(response => response.json())
    .then(data => {
      const cardContainer = document.querySelector('.card-container');
      const searchInput = document.getElementById('searchInput');

      data.data.forEach(personaje => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <img src="${personaje.displayIcon}" alt="Foto de ${personaje.displayName}">
          <div>
            <h2>${personaje.displayName}</h2>
            <p>${personaje.description}</p>
            <button onclick="verInformacionDetallada('${personaje.displayName}')">Ver información detallada</button>
            <i class="fa-solid fa-trash" onclick="eliminarPersonaje(this)"></i>
          </div>
        `;
        cardContainer.appendChild(card);
      });

      searchInput.addEventListener('input', function() {
        const searchText = searchInput.value.toLowerCase();
        const cards = cardContainer.getElementsByClassName('card');
        for (let i = 0; i < cards.length; i++) {
          const personajeName = cards[i].querySelector('h2').textContent.toLowerCase();
          if (personajeName.includes(searchText)) {
            cards[i].style.display = 'flex';
          } else {
            cards[i].style.display = 'none';
          }
        }
      });
    })
    .catch(error => {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    });
});

function verInformacionDetallada(displayName) {
  window.location.href = `informacion-detallada.html?personaje=${encodeURIComponent(displayName)}`;
}

function eliminarPersonaje(button) {
  const card = button.closest('.card');
  card.remove();
}
