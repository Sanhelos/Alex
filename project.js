
  const headerburger = document.querySelector('.header__burger');
  headerburger.addEventListener('click', function burger(){
    const burger = document.querySelector('.header__burger');
    burger.classList.toggle('active-burger');
    
    const menu = document.querySelector('.header__menu');
    menu.classList.toggle('active-menu');
    
    const body = document.querySelector('body');
    
    body.classList.toggle('lock');
    
    
  });

 
  
  const more = document.querySelector('.more');
  const menu2 = document.querySelector('.menu');
  more.addEventListener('click', function s(){
    more.classList.toggle('active');
    menu2.classList.toggle('add-menu')
    
    

  });
  menu2.addEventListener('click', function burger(){
    const burger = document.querySelector('.header__burger');
    burger.classList.remove('active-burger');
    
    const menu = document.querySelector('.header__menu');
    menu.classList.remove('active-menu');
    
    const body = document.querySelector('body');
    
    body.classList.remove('lock');
    
    
  });
 
 




const swiper = new Swiper('.smart__slider', {
    

    
    
    obserwer: true,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,

    autoHeight: true,
    
    navigation: {
      nextEl: '.smart__arrow.swiper-button-next',
      prevEl: '.smart__arrow.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 5,
        autoHeight: true,
      },
      610: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 56,
      },
    }
  });


const tabNavItems = document.querySelectorAll('.tab-button');
const tabItems = document.querySelectorAll('.tab-information');
document.addEventListener('click', function (e) {
  const targetElement = e.target;
  let currentActiveIndex = null;
  let newActiveIndex = null;
  if (targetElement.closest('.tab-button')) {
    tabNavItems.forEach((tabNavItems, index)=>{
      if (tabNavItems.classList.contains('active')) {
        currentActiveIndex = index;
        tabNavItems.classList.remove('active');
      }
      if (tabNavItems === targetElement) {
        newActiveIndex = index;
      }

    });
    targetElement.classList.add('active');
    tabItems[currentActiveIndex].classList.remove('active');
    tabItems[newActiveIndex].classList.add('active')
  }
})

  


let popupBg = document.querySelector('.resume-popap'); 
let popup = document.querySelector('.resume-popap-container'); 
let openPopupButtons = document.querySelectorAll('.button-popap'); 
openPopupButtons.forEach((button) => { // Перебираем все кнопки
  button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      popupBg.classList.add('active'); // Добавляем класс 'active' для фона
      popup.classList.add('active'); // И для самого окна
      const body = document.querySelector('body');
    
      body.classList.add('lock');

      const burger = document.querySelector('.header__burger');
      burger.classList.remove('active-burger');
      
      const menu = document.querySelector('.header__menu');
      menu.classList.remove('active-menu');


  })
});

document.addEventListener('click', (e) => { 
  if(e.target === popupBg) { 
      popupBg.classList.remove('active'); 
      popup.classList.remove('active');

      const body = document.querySelector('body');
      body.classList.remove('lock');
  }
});

document.addEventListener('keyup', function popapNone(event){
  if(event.code === 'Escape') {
    const resumepopap = document.querySelector('.resume-popap');
    resumepopap.classList.remove('active');


    const body = document.querySelector('body');
    body.classList.remove('lock');
  }
});




const animItems = document.querySelectorAll('[data-anims]');
if (animItems.length > 0) {
window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) { 
			const animItem = animItems [index];
			const animItemHeight = animItem.offsetHeight
			const animItemOffset = offset (animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) { 
				animItem.classList.add('_active-anim');
			} else {
				animItem.classList.remove('_active-anim');
			}

			animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}
			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				//remove class
				//animItem.classList.remove('_active');
			}
		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset ||document.documentElement.scrollTop;
		return {top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	
	//setTimeout (() => {
	//	animOnScroll();
	//}, time );

	animOnScroll();

	
}
 
 
 
 


