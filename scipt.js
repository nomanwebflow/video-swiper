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
    nextEl: ".swiper-arrow.swiper-next",
    prevEl: ".swiper-arrow.swiper-prev",
  },
  keyboard: {
    enabled: keyControl,
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

const photoSwiper = new Swiper(".swiper.is-photo-swiper", {
  speed: speed,
  spaceBetween: 16,
  slidesPerView: 1,
  centeredSlides: true,
  initialSlide: initialSlide,
  loop: loopValue,
  grabCursor: grabCursor,
});

videoSwiper.controller.control = [photoSwiper, headingSwiper, contentSwiper];
photoSwiper.controller.control = [videoSwiper, headingSwiper, contentSwiper];
headingSwiper.controller.control = [videoSwiper, photoSwiper, contentSwiper];
contentSwiper.controller.control = [videoSwiper, photoSwiper, headingSwiper];