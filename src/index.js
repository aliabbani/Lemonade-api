// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=e';

const generateHome = () => {
  const displayFoods = (foods) => {
    const main = document.getElementById('main');
    main.innerHTML = '';

    foods.meals.forEach((meal) => {
      const section = document.createElement('section');
      section.className = 'card-group';

      const div1 = document.createElement('div');
      div1.className = 'cards';
      const image = document.createElement('img');
      image.className = 'card-img';
      image.src = `${meal.strMealThumb}`;
      const div2 = document.createElement('div');
      div2.className = 'card-body';
      const div3 = document.createElement('div');
      div3.className = 'title-info';
      const title = document.createElement('h4');
      title.className = 'card-title';
      title.innerHTML = `${meal.strMeal}`;
      //   const p1 = document.createElement('p');
      //   p1.className = 'origin';
      //   p1.innerHTML = `Origin : ${meal.strArea}`;
      //   const p2 = document.createElement('p');
      //   p2.className = 'category';
      //   p2.innerHTML = `Category : ${meal.strCategory}`;
      const div4 = document.createElement('div');
      div4.className = 'card-like';
      const likeIcon = document.createElement('i');
      likeIcon.className = 'far fa-heart';
      const likeNumber = document.createElement('p');
      likeNumber.className = 'like-number';
      likeNumber.innerHTML = '5 Likes';
      const div5 = document.createElement('div');
      div5.className = 'card-btn';
      const commentButton = document.createElement('button');
      commentButton.type = 'button';
      commentButton.className = 'CButton';
      commentButton.innerHTML = 'Comments';
      const reservationButton = document.createElement('button');
      reservationButton.type = 'button';
      reservationButton.className = 'RButton';
      reservationButton.innerHTML = 'Reservations';

      section.appendChild(div1);
      div1.appendChild(image);
      div1.appendChild(div2);
      div2.appendChild(div3);
      div2.appendChild(div4);
      div2.appendChild(div5);
      div3.appendChild(title);
      //   div3.appendChild(p1);
      //   div3.appendChild(p2);
      div3.appendChild(div4);
      div4.appendChild(likeIcon);
      div4.appendChild(likeNumber);
      div2.appendChild(commentButton);
      div2.appendChild(reservationButton);

      main.appendChild(section);
    });
  };
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayFoods(data));
};

generateHome();
