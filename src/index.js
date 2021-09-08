// eslint-disable-next-line no-unused-vars
import _, { reduce } from 'lodash';
import './style.css';
import generateHome from './dom.js';
import showDetails from './modal.js';

generateHome();
showDetails();
showButton();

generateHome.commentButton.addEventListener('click', (event) => {
  showDetails(event.target.dataset.idMeal);
});