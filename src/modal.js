const modalDetails = document.createElement('div');
modalDetails.id = 'modal-details';
modalDetails.className = 'meal-details';

function showDetails(idMeal) {
  const mealsCode = `
  <div class="details-container">
  <span id="closeDetails">X</span>
  <h2 class="meal-title">${meal[idMeal].strMeal}</h2>
  <img src="${meal[idMeal].strMealThumb}" alt="${
  meal[idMeal].image.alt
}" />
  <div class="meal-info">
  <p class="description">
    ${meal[idMeal].strInstructions}
  </p>
  </div>
  </div>`;
  modalDetails.innerHTML += mealsCode;
  document.body.appendChild(modalDetails);
  document.getElementById('closeDetails').addEventListener('click', () => {
    modalDetails.innerHTML = '';
    document.body.removeChild(modalDetails);
    blurred.forEach((section) => {
      section.style.filter = 'blur(0)';
    });
  });
}

const showButton = document.querySelectorAll('.details-btn');
showButton.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    showDetails(event.target.dataset.id);
    blurred.forEach((section) => {
      section.style.filter = 'blur(5px)';
    });
  });
});

export default showDetails;
export default showButton;