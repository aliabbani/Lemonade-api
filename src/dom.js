import postLike from './postLike.js';
import getLikes from './getLikes.js';
import homeCounter from './homeCounter.js';

const main = document.getElementById('main');

const generateHome = () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=e';
  const displayFoods = async (foods) => {
    main.innerHTML = '';
    let allLikes = await getLikes();

    foods.meals.forEach((meal, index) => {
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
      const div4 = document.createElement('div');
      div4.className = 'card-like';
      const likeIcon = document.createElement('i');
      likeIcon.className = 'far fa-heart';
      likeIcon.addEventListener('click', async () => {
        likeIcon.style.color = 'red';
        const allLikesNumbers = Array.from(document.querySelectorAll('.like-number'));
        allLikesNumbers[index].innerHTML = `${allLikes[index + 1].likes + 1} Likes`;
        await postLike(meal.idMeal);
        allLikes = await getLikes();
      });
      const likeNumber = document.createElement('p');
      likeNumber.className = 'like-number';
      likeNumber.innerHTML = `${allLikes[index + 1].likes} likes`;
      const div5 = document.createElement('div');
      div5.className = 'card-btn';
      const commentButton = document.createElement('button');
      commentButton.type = 'button';
      commentButton.className = 'CButton';
      commentButton.innerHTML = 'Comments';
      section.appendChild(div1);
      div1.appendChild(image);
      div1.appendChild(div2);
      div2.appendChild(div3);
      div2.appendChild(div4);
      div2.appendChild(div5);
      div3.appendChild(title);
      div3.appendChild(div4);
      div4.appendChild(likeIcon);
      div4.appendChild(likeNumber);
      div5.appendChild(commentButton);

      main.appendChild(section);

      commentButton.addEventListener('click', () => {
        const modalDetails = document.createElement('div');
        modalDetails.id = 'modal-details';
        modalDetails.className = 'project-details';
        const projectsCode = `
          <div class="details-container">
          <span id="closeDetails">X</span>
          <img src="${meal.strMealThumb}">
          <h2 class="project-title">${meal.strMeal}</h2>
          <h4>Category: ${meal.strCategory}</h4>
          <div class="stats">
              <p>${meal.strInstructions}</p>
          </div>
          <div class="commentsDiv">
          <ul>
          <li>Here will be comments</li>
          </ul>
          <h3>Add a comment</h3>
          <input type="text" placeholder="Your name" />
          <input type="text" placeholder="Your insights" />
          <button type="button">Comment</button>
          </div>
          </div>`;
        modalDetails.innerHTML += projectsCode;
        document.body.appendChild(modalDetails);
        document.getElementById('closeDetails').addEventListener('click', () => {
          modalDetails.innerHTML = '';
          document.body.removeChild(modalDetails);
        });
      });
    });

    const counterDisplay = document.querySelector('.nav-item-1');
    const count = Array.from(document.querySelectorAll('.card-group'));
    counterDisplay.innerHTML = `${homeCounter(count)} Dishes`;
  };
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayFoods(data));
};

export default generateHome;