const commentCounter = (itemId) => {
  const popup = document.getElementById(Number(itemId) + 1);
  const commentList = popup.childNodes[3].childNodes[1].childNodes;
  popup.childNodes[3].childNodes[0].innerHTML += `(${commentList.length})`;
};

const popup = () => {
  const commentBtns = document.querySelectorAll('.comment-btn');
  commentBtns.forEach((button) =>
    button.addEventListener('click', (e) => {
      const itemInfo = document.getElementById(Number(e.target.id) + 1);
      const memeContainer = document.getElementById('popup');
      const gridContainer = document.querySelector('.grid-section');
      gridContainer.classList.remove('visible');
      gridContainer.classList.add('hidden');
      memeContainer.classList.add('visible');
      itemInfo.classList.remove('hidden');
      itemInfo.classList.add('visible');
      commentCounter(e.target.id);
    })
  );

  const closeBtns = document.querySelectorAll('.close-btn');
  const closePopup = () => {
    const div = document.querySelector('#popup');
    const gridContainer = document.querySelector('.grid-section');
    const divItem = document.querySelectorAll('.meme-popup');
    divItem.forEach((item) => {
      item.classList.add('hidden');
      item.classList.remove('visible');
    });
    div.classList.remove('visible');
    div.classList.add('hidden');
    gridContainer.classList.remove('hidden');
    gridContainer.classList.add('visible');
  };

  closeBtns.forEach((closeBtn) =>
    closeBtn.addEventListener('click', (e) => {
      const title = e.target.parentNode.childNodes[3].childNodes[0];
      title.innerHTML = 'Comments';
      closePopup();
    })
  );
};

export default popup;
