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
const arrowsSvg = document.querySelectorAll('.arrow path');

let counter = 0;

arrowsController('left', 'off');

arrows.forEach((item) => {
  item.addEventListener('click', scrollCarousel);
});

function scrollCarousel(event) {
  switch (event.currentTarget.dataset.direction) {
    case 'right': {
      if (counter === -3) {
        arrowsController('right', 'off');
        return;
      }
      arrowsController('left', 'on');
      cards.style.transform = `translateX(${(412 / 1920) * 100 * --counter}vw)`;
      break;
    }
    case 'left': {
      if (counter === 0) {
        arrowsController('left', 'off');
        return;
      }
      arrowsController('right', 'on');
      cards.style.transform = `translateX(${(412 / 1920) * 100 * ++counter}vw)`;
    }
  }
}

function arrowsController(direction, toggle) {
  if (direction === 'left') {
    arrowsSvg[0].style.stroke = toggle === 'on' ? '#F64C71' : '#999999';
    arrowsSvg[1].style.stroke = toggle === 'on' ? '#F64C71' : '#999999';
  }
  if (direction === 'right') {
    arrowsSvg[2].style.stroke = toggle === 'on' ? '#F64C71' : '#999999';
    arrowsSvg[3].style.stroke = toggle === 'on' ? '#F64C71' : '#999999';
  }
}

//modal dropdown logic
const dropdownArrow = document.querySelector('.modal .arrow');
const dropdown = document.querySelector('.modal .dropdown');
const dropdownItems = document.querySelectorAll('.modal .dropdown li');
const input = document.querySelector('.modal form input[type="text"]');

dropdownArrow.addEventListener('click', () => {
  dropdown.classList.toggle('disable');
});

dropdownItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    input.value = event.target.textContent;
    dropdown.classList.add('disable');
  });
});
