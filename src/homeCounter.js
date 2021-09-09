const counterDisplay = document.querySelector('.nav-item-1');

const homeCounter = () => {
  const count = Array.from(document.querySelectorAll('section')).length - 1;
  counterDisplay.innerHTML = `${count} Dishes`;
};

export default homeCounter;