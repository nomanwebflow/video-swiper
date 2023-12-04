const loopValue = true;
const grabCursor = true;
const keyControl = true;
const initialSlide = 6;

const videoSwiper = new Swiper(".swiper.is-video-swiper", {
  speed: 400,
  spaceBetween: 0,
  initialSlide: initialSlide,
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

const headingSwiper = new Swiper(".swiper.is-heading-swiper", {
  speed: 400,
  spaceBetween: 0,
  initialSlide: initialSlide,
  loop: loopValue,
  direction: "vertical",
  grabCursor: grabCursor,
});
const photoSwiper = new Swiper(".swiper.is-photo-swiper", {
  speed: 400,
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

photoSwiper.controller.control = videoSwiper;
videoSwiper.controller.control = photoSwiper;
photoSwiper.controller.control = headingSwiper;
