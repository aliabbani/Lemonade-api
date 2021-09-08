import generateHome from './dom.js';

const modalDetails = document.createElement('div');
modalDetails.id = 'modal-details';
modalDetails.className = 'meal-details';

function showDetails(idMeal) {
  const mealsCode = `
  <div class="details-container">
  <span id="closeDetails">X</span>
  <h2 class="meal-title">${generateHome.meal[idMeal].strMeal}</h2>
  <img src="${generateHome.meal[idMeal].strMealThumb}" alt="${generateHome.meal[idMeal].image.alt
}" />
  <div class="meal-info">
  <p class="description">
    ${generateHome.meal[idMeal].strInstructions}
  </p>
  </div>
  </div>`;
  modalDetails.innerHTML += mealsCode;
  document.body.appendChild(modalDetails);
  document.getElementById('closeDetails').addEventListener('click', () => {
    modalDetails.innerHTML = '';
    document.body.removeChild(modalDetails);
  });
}

const showButton = document.querySelectorAll('.details-btn');
showButton.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    showDetails(event.target.dataset.id);
    });
  });
});