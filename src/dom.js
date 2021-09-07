const section = document.createElement('section');
const div1 = document.createElement('div');
const image1 = document.createElement('img');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const title1 = document.createElement('h5');
const div4 = document.createElement('div');
const likeIcon = document.createElement('i');
const likeNumber = document.createElement('p');
const commentButton = document.createElement('button');
commentButton.type = 'button';

section.appendChild(div1);
div1.appendChild(image1);
div1.appendChild(div2);
div2.appendChild(div3);
div3.appendChild(title1);
div3.appendChild(div4);
div4.appendChild(likeIcon);
div4.appendChild(likeNumber);
div3.appendChild(commentButton);

section.className = 'card-group';
div1.className = 'card';
div1.className = 'card-img-top';
div2.className = 'card-body';
div3.className = 'title-like';
title1.className = 'card-title';
div4.className = 'card-like';
likeIcon.className = 'far fa-heart';
likeNumber.className = 'like-number';
commentButton.className = 'CButton';

const main = document.querySelector('main');
main.appendChild(section);