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

background.addEventListener('click', () => {
  hideModal();
  closeBurger();
});

//logic connected to a carousel
const arrows = document.querySelectorAll('.arrow');
const arrowsSvg = document.querySelectorAll('.arrow path');

let counter = 0;

arrowsController('left', 'off');

arrows.forEach((item) => {
  item.addEventListener('click', scrollCarousel);
});

function scrollCarousel(event) {
  if (window.matchMedia('(max-width: 500px)').matches) {
    switch (event.currentTarget.dataset.direction) {
      case 'right': {
        if (counter === -6) {
          return;
        }
        if (counter === -5) {
          arrowsController('right', 'off');
        }
        arrowsController('left', 'on');
        cards.style.transform = `translateX(${
          (305 / 375) * 100 * --counter
        }vw)`;
        break;
      }
      case 'left': {
        if (counter === 0) {
          return;
        }
        if (counter === -1) {
          arrowsController('left', 'off');
        }
        arrowsController('right', 'on');
        cards.style.transform = `translateX(${
          (305 / 375) * 100 * ++counter
        }vw)`;
      }
    }
  } else {
    switch (event.currentTarget.dataset.direction) {
      case 'right': {
        if (counter === -3) {
          return;
        }
        if (counter === -2) {
          arrowsController('right', 'off');
        }
        arrowsController('left', 'on');
        cards.style.transform = `translateX(${
          (412 / 1920) * 100 * --counter
        }vw)`;
        break;
      }
      case 'left': {
        if (counter === 0) {
          return;
        }
        if (counter === -1) {
          arrowsController('left', 'off');
        }
        arrowsController('right', 'on');
        cards.style.transform = `translateX(${
          (412 / 1920) * 100 * ++counter
        }vw)`;
      }
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
const input2 = document.querySelector('.modal input:nth-child(2)');

function modalDropdown() {
  dropdown.classList.toggle('disable');
  console.log(dropdown);
}

dropdownArrow.addEventListener('click', modalDropdown);
input2.addEventListener('click', modalDropdown);

dropdownItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    input.value = event.target.textContent;
    dropdown.classList.add('disable');
  });
});

document.body.addEventListener('click', (event) => {
  if (
    !dropdown.classList.contains('disable') &&
    !(
      event.composedPath().includes(dropdownArrow) ||
      event.composedPath().includes(input2)
    )
  ) {
    dropdown.classList.add('disable');
  }
});

//modal validation
const modalForm = document.querySelector('.modal form');
const phoneInput = document.querySelector('.modal form input[type="tel"]');
const validationError = document.querySelector('.modal .error');

modalForm.addEventListener('submit', (event) => {
  if (phoneInput.value === '') {
    event.preventDefault();
    validationError.classList.remove('disable');
  }
});

phoneInput.addEventListener('input', () => {
  validationError.classList.add('disable');
});

//mobile version

//dropdown guarantees

const onClick = ({ target }) => {
  let currentIndex;
  guaranteesArrows.forEach((item, index) => {
    if (item === target) {
      currentIndex = index;
    }
  });
  if (target.classList.contains('rotate')) {
    target.classList.remove('rotate');
    guaranteesTexts[currentIndex].style.display = 'none';
  } else {
    target.classList.add('rotate');
    guaranteesTexts[currentIndex].style.display = 'block';
  }
};

const guaranteesArrows = document.querySelectorAll('.guarantees img');
const guaranteesTexts = document.querySelectorAll('.guarantees__cards p');

guaranteesArrows.forEach((item) => {
  item.addEventListener('click', onClick);
});

//about team carousel

const arrowsContainer = document.querySelector('.arrows');

window.addEventListener('load', () => {
  if (window.matchMedia('(max-width: 500px)').matches) {
    arrowsContainer.style.display = 'none';
  }
});

const arrows2 = document.querySelectorAll('.arrow2');
const pluses = document.querySelectorAll('.about-team__wrapper');

arrows2.forEach((item) => {
  item.addEventListener('click', onClickArrows2);
});

const arrowsSvg2 = document.querySelectorAll('.arrow2 path');

function arrows2Controller(direction, toggle) {
  if (direction === 'left') {
    arrowsSvg2[0].style.stroke = toggle === 'on' ? '#F64C71' : '#999999';
    arrowsSvg2[1].style.stroke = toggle === 'on' ? '#F64C71' : '#999999';
  }
  if (direction === 'right') {
    arrowsSvg2[2].style.stroke = toggle === 'on' ? '#F64C71' : '#999999';
    arrowsSvg2[3].style.stroke = toggle === 'on' ? '#F64C71' : '#999999';
  }
}

let counter2 = 0;
arrows2Controller('left', 'off');
function onClickArrows2(e) {
  switch (e.currentTarget.dataset.direction) {
    case 'right':
      if (counter2 === -4) return;
      if (counter2 === -3) {
        arrows2Controller('right', 'off');
      }
      arrows2Controller('left', 'on');
      pluses.forEach((plus) => {
        plus.style.transform = `translateX(${
          (296 / 375) * 100 * (counter2 - 1)
        }vw)`;
      });
      --counter2;
      break;
    case 'left':
      if (counter2 === 0) return;
      if (counter2 === -1) {
        arrows2Controller('left', 'off');
      }
      arrows2Controller('right', 'on');
      pluses.forEach((plus) => {
        plus.style.transform = `translateX(${
          (296 / 375) * 100 * (counter2 + 1)
        }vw)`;
      });
      ++counter2;
      break;
  }
}

//swipe

const wrapper = document.querySelector('.wrapper');
const wrapper2 = document.querySelector('.about-team__container');
window.onload = () => {
  let cardsStartX;
  let cardsEndX;

  let teamStartX;
  let teamEndX;

  wrapper.addEventListener('touchstart', (e) => {
    cardsStartX = e.touches[0].clientX;
  });

  wrapper.addEventListener('touchend', (e) => {
    cardsEndX = e.changedTouches[0].clientX;

    if (cardsStartX > cardsEndX) {
      if (counter === -6) {
        return;
      }
      if (counter === -5) {
        arrowsController('right', 'off');
      }
      arrowsController('left', 'on');
      cards.style.transform = `translateX(${(305 / 375) * 100 * --counter}vw)`;
    } else {
      if (counter === 0) {
        return;
      }
      if (counter === -1) {
        arrowsController('left', 'off');
      }
      arrowsController('right', 'on');
      cards.style.transform = `translateX(${(305 / 375) * 100 * ++counter}vw)`;
    }
  });

  wrapper2.addEventListener('touchstart', (e) => {
    teamStartX = e.touches[0].clientX;
  });

  wrapper2.addEventListener('touchend', (e) => {
    teamEndX = e.changedTouches[0].clientX;

    if (teamStartX > teamEndX) {
      if (counter2 === -4) return;
      if (counter2 === -3) {
        arrows2Controller('right', 'off');
      }
      arrows2Controller('left', 'on');
      pluses.forEach((plus) => {
        plus.style.transform = `translateX(${
          (296 / 375) * 100 * (counter2 - 1)
        }vw)`;
      });
      --counter2;
    } else {
      if (counter2 === 0) return;
      if (counter2 === -1) {
        arrows2Controller('left', 'off');
      }
      arrows2Controller('right', 'on');
      pluses.forEach((plus) => {
        plus.style.transform = `translateX(${
          (296 / 375) * 100 * (counter2 + 1)
        }vw)`;
      });
      ++counter2;
    }
  });
};

//header dropdown

const headerDropdown = document.querySelector('.header__dropdown');
const headerBurger = document.querySelector('.header__burger ');
const headerBurgerCross = document.querySelector('.header__burger img');

const burgerLinks = document.querySelectorAll('.header__burger a');

headerDropdown.addEventListener('click', () => {
  background.classList.remove('disable');
  headerBurger.classList.remove('off');
  document.body.style.overflowY = 'hidden';
});

const closeBurger = () => {
  background.classList.add('disable');
  headerBurger.classList.add('off');
  document.body.style.overflowY = 'overlay';
};

headerBurgerCross.addEventListener('click', closeBurger);
burgerLinks.forEach((item) => {
  item.addEventListener('click', closeBurger);
});
