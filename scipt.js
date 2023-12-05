const loopValue = true;
const grabCursor = true;
const keyControl = true;
const initialSlide = 10;
const speed = 200;

const videoSwiper = new Swiper(".swiper.is-video-swiper", {
  speed: speed,
  spaceBetween: 0,
  initialSlide: initialSlide,
  slideActiveClass: "current-video-slide",
  loop: loopValue,
  grabCursor: grabCursor,
  navigation: {
    nextEl: ".swiper-arrow.photo-swiper-next",
    prevEl: ".swiper-arrow.photo-swiper-prev",
  },
  keyboard: {
    enabled: keyControl,
  },
});

const photoSwiper = new Swiper(".swiper.is-photo-swiper", {
  speed: speed,
  spaceBetween: 16,
  slidesPerView: 2.5,
  centeredSlides: true,
  initialSlide: initialSlide,
  loop: loopValue,
  grabCursor: grabCursor,

  breakpoints: {
    // mobile landscape
    480: {
      slidesPerView: 1,
    },
    // tablet
    768: {
      slidesPerView: 2,
    },
    // desktop
    992: {
      slidesPerView: 6.5,
    },
  },
});

const headingSwiper = new Swiper(".swiper.is-heading-swiper", {
  speed: speed,
  spaceBetween: 0,
  initialSlide: initialSlide,
  loop: loopValue,
  direction: "vertical",
});

const contentSwiper = new Swiper(".swiper.is-content-swiper", {
  speed: speed,
  spaceBetween: 0,
  initialSlide: initialSlide,
  loop: loopValue,
  direction: "vertical",
});

videoSwiper.controller.control = [photoSwiper, headingSwiper, contentSwiper];
photoSwiper.controller.control = [videoSwiper, headingSwiper, contentSwiper];

