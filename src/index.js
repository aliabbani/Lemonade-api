import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import generateHome from './dom.js';
import showDetails from './modal.js';

generateHome();
showDetails();

generateHome.commentButton.addEventListener('click', (event) => {
  showDetails(event.target.dataset.idMeal);
});
