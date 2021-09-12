import postLike from './postLike.js';
import getLikes from './getLikes.js';
import homeCounter from './homeCounter.js';
import getComments from './getComments.js';
import postComment from './postComment.js';
import commentCounter from './commentCounter.js';

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
      div1.className = 'card';
      const image = document.createElement('img');
      image.className = 'card-img-top';
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
      likeIcon.className = 'far fa-heart fa-1x';
      likeIcon.addEventListener('click', async () => {
        likeIcon.style.color = 'red';
        const allLikesNumbers = Array.from(document.querySelectorAll('.like-number'));
        allLikesNumbers[index].innerHTML = `${
          allLikes[index + 1].likes + 1
        } Likes`;
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
      commentButton.className = 'CButton btn btn-primary';
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

      commentButton.addEventListener('click', async () => {
        const modalDetails = document.createElement('div');
        modalDetails.id = 'modal-details';
        modalDetails.className = 'project-details';
        const projectsCode = `
          <div class="details-container">
            <span id="closeDetails">X</span>
            <img src="${meal.strMealThumb}" class="popup-image">
            <div class="popup-title">
              <h2 class="project-title">${meal.strMeal}</h2>
            </div>
            <h4>Category: ${meal.strCategory}</h4>
            <div class="stats">
              <p>${meal.strInstructions}</p>
            </div>
            <div class="commentsDiv">
              <div class="comment-center">
                <h4 class="comment-count">Comments (0)</h4>
              </div>
              <ul class="comment-list"></ul>
              <div class="add-comment-center">
                <h3>Add a comment</h3>
              </div>
              <div class="comment-input">
              <input type="text" placeholder="Your name" class="name"/>
              <textarea placeholder="Your comment" class="comment" name="comments" rows="4" cols="50"></textarea>
              </div>
              <button type="button" id="save-comment" class="btn btn-primary popup-comment">Comment</button>
            </div>
          </div>`;
        modalDetails.innerHTML += projectsCode;
        document.body.appendChild(modalDetails);
        const saveComment = document.getElementById('save-comment');
        const allComments = await getComments(meal.idMeal);
        const ul = document.querySelector('.comment-list');
        ul.innerHTML = '';
        if (!allComments.error) {
          document.querySelector('.comment-count').innerHTML = `Comments (${commentCounter(allComments)})`;
        }
        if (!allComments.error) {
          allComments.forEach((commentObject) => {
            const li = document.createElement('li');
            li.className = 'comment-item';
            li.innerHTML = `${commentObject.creation_date} ${commentObject.username}: ${commentObject.comment}`;
            ul.appendChild(li);
          });
        }
        saveComment.addEventListener('click', async () => {
          const userName = document.querySelector('.name').value;
          const userComment = document.querySelector('.comment').value;
          const id = meal.idMeal;
          const body = {
            item_id: id,
            username: userName,
            comment: userComment,
          };
          if (userName && userComment) {
            await postComment(body);
            const allComments = await getComments(meal.idMeal);
            document.querySelector('.comment-count').innerHTML = `Comments (${commentCounter(allComments)})`;
            const ul = document.querySelector('.comment-list');
            const lastComment = allComments.pop();
            const li = document.createElement('li');
            li.className = 'comment-item';
            li.innerHTML = `${lastComment.creation_date} ${lastComment.username}: ${lastComment.comment}`;
            ul.appendChild(li);
            document.querySelector('.name').value = '';
            document.querySelector('.comment').value = '';
          }
        });
        document
          .getElementById('closeDetails')
          .addEventListener('click', () => {
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
