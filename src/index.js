// eslint-disable-next-line no-unused-vars
import _, { reduce } from 'lodash';
import './style.css';
import generateHome from './dom.js';
import * as modal from './modal.js';

generateHome();
modal.showDetails();
modal.showButton();