//logic conneted to a modal
const buttons = document.querySelectorAll('.button');
const background = document.querySelector('.background');
const modal = document.querySelector('.modal');
const cross = document.querySelector('.modal .cross');
const cards = document.querySelector('.cards');

buttons.forEach((item) => {
  item.addEventListener('click', showModal);
});

cross.addEventListener('click', hideModal);

function showModal() {
  document.body.style.overflowY = 'hidden';
  background.classList.remove('disable');
  modal.classList.remove('disable');
}

function hideModal() {
  document.body.style.overflowY = 'overlay';
  background.classList.add('disable');
  modal.classList.add('disable');
}

//logic connected to a carousel
const arrows = document.querySelectorAll('.arrow');

let counter = 0;

arrows.forEach((item) => {
  item.addEventListener('click', scrollCarousel);
});

function scrollCarousel(event) {
  switch (event.target.dataset.direction) {
    case 'left': {
      if (counter === -3) return;
      cards.style.transform = `translateX(${(412 / 1920) * 100 * --counter}vw)`;
      break;
    }
    case 'right': {
      if (counter === 0) return;
      cards.style.transform = `translateX(${(412 / 1920) * 100 * ++counter}vw)`;
    }
  }
}
