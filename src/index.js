// eslint-disable-next-line no-unused-vars
import _, { reduce } from 'lodash';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import generateHome from './dom.js';

generateHome();

// When the user clicks on the Like button of an item, the interaction is recorded
// in the Involvement API and the screen is updated.

// const getLikes = async () => {
//   const response = await fetch(url2);
//   const result = await response.json();
//   return result;
// };

// const displayLikes = () => {
// //   postLikes();
//   getLikes();
// };
// displayLikes();
