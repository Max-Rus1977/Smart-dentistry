/* Burger menu */
let burgerMenu = document.querySelector('.burger');
let allMobailMenu = document.querySelector('.header-menu');

burgerMenu.addEventListener('click', openMobaleMenu);
function openMobaleMenu() {
  burgerMenu.classList.toggle('_burger-animate');
  allMobailMenu.classList.toggle('_visibl-mabale-menu');
}

/* Scroll animste */
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight; //Получаем высоту элемента
      
      const animItemOffset = offset(animItem).top; //Позиция обекта
      
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart; //Точка старта
      //window.innerHeight высота окна браузера
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active');
        } 
      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      } 
    }
  }
  function offset(el) {
    let rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop  = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);
} 

/* Acardion services */
const blok = document.querySelectorAll('.services_label');

 for (let i =  0; i < blok.length; i++) {

 blok[i].addEventListener('click', addShadow);
 function addShadow() {
  this.parentElement.classList.toggle('_active-acardion');
 }

}

/* -Modals- */
const btnSignUp = document.querySelectorAll('.btn-sign-up');
const btnTheanks = document.querySelector('.btn-theanks');
const btnErorr = document.querySelector('.btn-erorr');
const modalSignUp = document.querySelector('.modal-sign-up');
const modalPhone = document.querySelector('.modal-phon');
const modalTheanks = document.querySelector('.modal-thanks');
const modalErorr = document.querySelector('.modal-erorr');
const btncoloseModal = document.querySelectorAll('.wrap-closes');


for (let i = 0; i < btnSignUp.length; i++) {
  btnSignUp[i].addEventListener('click', openModalUser);
  function openModalUser() {
    modalSignUp.classList.add('modal-visibl');
  }
}

btnTheanks.addEventListener('click', openModalTheanks);
  function openModalTheanks() {
    modalTheanks.classList.add('modal-visibl');
  }

btnErorr.addEventListener('click', openModalErorr);
  function openModalErorr() {
    modalErorr.classList.add('modal-visibl');
  }

/* Closes modals */
for (let i = 0; i < btncoloseModal.length; i++) {

    btncoloseModal[i].addEventListener('click', close);
  function close() {
    this.closest('.modal').classList.remove('modal-visibl');
  }
}

/* Scroll menu */
const anchors = document.querySelectorAll('a[href*="#id"]');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function(eveniet){
      eveniet.preventDefault();
      const blockId = anchor.getAttribute('href').substr(1);
      document.getElementById(blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }  

/* Photo Gallery big img */
const normalImages = document.querySelectorAll('.big-and-normal');

for (let i =  0; i < normalImages.length; i++) {
  
  normalImages[i].addEventListener('click', bigImages)
    function bigImages() {
      
      this.classList.toggle('_active-photo-gallery');
    }
}

/* Input box shadow */
const singUpInput = document.querySelectorAll('.sing-up_input');

 for (let i =  0; i < singUpInput.length; i++) {

 singUpInput[i].addEventListener('focus', addBoxInputShadow);
 function addBoxInputShadow() {
  
    this.parentElement.classList.add('_focus-input-box');
 }

 singUpInput[i].addEventListener('blur', remuveBoxInputShadow);
 function remuveBoxInputShadow() {
  
    this.parentElement.classList.remove('_focus-input-box');
 }

}


/* Owl carusel */
$(document).ready(function(){

  $(".stocks-slide").owlCarousel({
    items: 1,
    /*animateOut: 'zoomOut',*/
    loop:true, //Зацикливаем слайдер
    nav:true, // Стрелочки
    dots:true,
    autoplayHoverPause: true,
    autoplay: false, //Автозапуск слайдера
    smartSpeed:1000, //Время движения слайда
    autoplayTimeout:2000, //Время смены слайда
  });

   $(".doctors-slide").owlCarousel({
    items: 3,
    loop:true, 
    nav:true, //Отключил навигацию
    dots:true,
    responsive:{
      0:{
          items: 1
      },
      780:{
          items: 2
      },
      1000:{
          items: 3
      },
    },
    autoplay:false, 
    center:true,
    smartSpeed:2000, 
    autoplayTimeout:4000,
  });

   $(".coments-slide").owlCarousel({
    items: 2,
    loop:true, 
    nav:true, 
    dots:true,
     responsive:{
      0:{
          items: 1
      },
      850:{
          items: 2
      },
    },
    autoplay:false, 
    smartSpeed:2000,
    autoplayTimeout:4000, 
  });

   $(".portfolio-slide-implants").owlCarousel({
    items: 1,
    loop:true, 
    nav:true, 
    dots:true,
    autoplay:false, 
    smartSpeed:2000, 
    autoplayTimeout:4000, 
  });

   $(".portfolio-slide-prosthetics").owlCarousel({
    items: 1,
    loop:true, 
    nav:true, 
    dots:true,
    autoplay:false, 
    smartSpeed:2000, 
    autoplayTimeout:4000, 
  });

   $(".portfolio-slide-veneers").owlCarousel({
    items: 1,
    loop:true, 
    nav:true, 
    dots:true,
    autoplay:false, 
    smartSpeed:2000, 
    autoplayTimeout:4000, 
  });

   $(".photo-gallery-slide").owlCarousel({
    items: 5,
    loop:true, 
    nav:true, 
    responsive:{
      0:{
          items: 3
      },
      780:{
          items: 3
      },
      1010:{
          items: 4
      },
    },
    dots:true,
    autoplay:false, 
    smartSpeed:2000, 
    autoplayTimeout:4000, 
  });

   $(".certificates-slide").owlCarousel({
    items: 5,
    loop:true, 
    nav:true, 
    responsive:{
      0:{
          items: 3
      },
      780:{
          items: 3
      },
      1010:{
          items: 4
      },
    },
    dots:true,
    autoplay:false,
    smartSpeed:2000, 
    autoplayTimeout:4000, 
  });

});

/* -Photo gallery slide- -Certificates slide- */
const sladBoxImage = document.querySelectorAll('.js-slad_box-img');
const modalBoxImage = document.querySelectorAll('.photo-gallery_modal-box-img');

for (let i = 0; i < sladBoxImage.length; i++) {
  sladBoxImage[i].addEventListener('click', modalVisibl);

  function modalVisibl() {
    let sladBoxImageId = sladBoxImage[i].id;
    
    const childImage = document.querySelector(`.modal-box-images img[src="img/${sladBoxImageId}.jpg"]`);
    childImage.parentElement.classList.add('_visible_gallery_modal');
  }
}

/* CLOSE -Photo gallery slide- -Certificates slide- */
const modalClose = document.querySelectorAll('.modal-box-images .photo-gallery_modal-box-img');

for (let i = 0; i < modalClose.length; i++) {
  modalClose[i].addEventListener('click', modalNonVisibl);
  function modalNonVisibl() {
    this.classList.remove('_visible_gallery_modal');
  }
}

/* Mask phone */
window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});

/* Lazy load */
const lazyImages = document.querySelectorAll('img[data-src]');
const loadMapBlock = document.querySelector('._load-map');
const windowHeighth = document.documentElement.clientHeight;

let lazyImagesPosition = [];
if (lazyImages.length > 0) {
  lazyImages.forEach(img => {
    if (img.dataset.src || img.dataset.srcset) {
      lazyImagesPosition.push(img.getBoundingClientRect().top + pageYOffset);
      lazyImagesPosition = lazyImagesPosition.map(function(each_element){
        return Number(Math.round(each_element));
      });
      lazyScrollCheck();
    } 
  });
}

window.addEventListener('scroll', lazyScroll);

function lazyScroll() {
  if (document.querySelectorAll('img[data-src]').length > 0) {
    lazyScrollCheck(); 
  } 
  if (!loadMapBlock.classList.contains('_loader')) {
    getMap();
  }
}

function lazyScrollCheck() {
  let imgIndex = lazyImagesPosition.findIndex(item => pageYOffset > item - windowHeighth);
  if (imgIndex >=0) {
    if (lazyImages[imgIndex].dataset.src) {
      lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
      lazyImages[imgIndex].removeAttribute('data-src');
    }
    delete lazyImagesPosition[imgIndex];
  }
}

function getMap() {
  const loadMapBlockPos = loadMapBlock.getBoundingClientRect().top + pageYOffset;
  if (pageYOffset > loadMapBlockPos - windowHeighth) {
    loadMapUrl = loadMapBlock.dataset.map;
    if (loadMapUrl) {
      loadMapBlock.insertAdjacentHTML(
        "beforeend", 
        `<iframe src="${loadMapUrl}" width="100%" height="400" frameborder="0"></iframe>`
        );
      loadMapBlock.classList.add('_loader');
    } 
  } 
}

