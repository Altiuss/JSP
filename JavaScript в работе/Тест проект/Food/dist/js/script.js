/******/ (() => { // webpackBootstrap
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabheader__item');
  const tabsContent = document.querySelectorAll('.tabcontent');
  const tabsParent = document.querySelector('.tabheader__items');
  function hideTabContent() {
    tabsContent.forEach(item => {
      item.style.display = 'none';
    });
    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  }
  function showTabContent(i = 0) {
    tabsContent[i].style.display = 'block';
    tabs[i].classList.add('tabheader__item_active');
  }
  tabsParent.addEventListener('click', e => {
    const target = e.target;
    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((tab, index) => {
        if (target === tab) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });

  // Timer

  const deadLine = '2023-04-31';
  function getTimeRemaining(endTime) {
    let days, hours, minutes, seconds;
    const t = Date.parse(endTime) - Date.parse(new Date());
    if (t <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      days = Math.floor(t / (1000 * 60 * 60 * 24)), hours = Math.floor(t / (1000 * 60 * 60) % 24), minutes = Math.floor(t / 1000 / 60 % 60), seconds = Math.floor(t / 1000 % 60);
    }
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }
  function setClock(selector, endTime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);
    updateClock();
    function updateClock() {
      const t = getTimeRemaining(endTime);
      days.textContent = getZero(t.days);
      hours.textContent = getZero(t.hours);
      minutes.textContent = getZero(t.minutes);
      seconds.textContent = getZero(t.seconds);
      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setClock('.timer', deadLine);

  //Modal

  const modalTriger = document.querySelectorAll('[data-modal'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]');
  function openModal() {
    modal.classList.toggle('show');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
  }
  modalTriger.forEach(btn => {
    btn.addEventListener('click', openModal);
  });
  function closedModal() {
    modal.classList.toggle('show');
    document.body.style.overflow = '';
  }
  modalCloseBtn.addEventListener('click', closedModal);
  modal.addEventListener('click', e => {
    console.log('e.target:', e.target);
    console.log('modal:', modal);
    if (e.target === modal) {
      closedModal();
    }
  });
  document.addEventListener('keydown', e => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      closedModal();
    }
  });
  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal();
    }
  }
  window.addEventListener('scroll', showModalByScroll);

  //Use Classes

  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector) {
      this.src = src, this.alt = alt, this.title = title, this.descr = descr, this.price = price, this.parent = document.querySelector(parentSelector), this.transfer = 27;
      this.changeToUah();
    }
    changeToUah() {
      this.price = this.price * this.transfer;
    }
    render() {
      const element = document.createElement('div');
      element.innerHTML = `
             <div class="menu__item">
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                </div>
            `;
      this.parent.append(element);
    }
  }

  // const div = new MenuCard();
  // div.render();

  new MenuCard("img/tabs/vegy.jpg", "vegy", 'Меню "Фитнес"', `Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежиовощей и фруктов.
         Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальнойценой и высоким качеством!`, 9, '.menu .container').render();
  new MenuCard("img/tabs/elite.jpg", "elite", 'Меню “Премиум”', `В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд.
         Красная рыба, морепродукты, фрукты - ресторанное меню без походав ресторан!`, 9, '.menu .container').render();
  new MenuCard("img/tabs/post.jpg", "post", 'Меню "Постное"', `Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие
                        продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное
                        количество белков за счет тофу и импортных вегетарианских стейков.`, 9, '.menu .container').render();
});
/******/ })()
;
//# sourceMappingURL=script.js.map