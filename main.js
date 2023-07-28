const lista = document.getElementById('weather-details_list');
const itens = lista.getElementsByTagName('li');
const icon = document.querySelector('.weather-details-icon i');

function removeActiveClass() {
  for (let i = 0; i < itens.length; i++) {
    itens[i].classList.remove('active');
  }
}

function removeActiveClassFromIcon() {
    icon.classList.remove('active');
}

function onItemClick(event) {
  removeActiveClass();
  const clickedItem = event.target;
  clickedItem.classList.add('active');
}

function onItemClickIcon() {
  icon.classList.add('active');
}

// Adicionar o evento de clique a cada item
for (let i = 0; i < itens.length; i++) {
  itens[i].addEventListener('click', onItemClick);
}

// Adicionar o evento de mouseover ao ícone
icon.addEventListener('mouseover', onItemClickIcon);
icon.addEventListener('mouseout', removeActiveClassFromIcon);
