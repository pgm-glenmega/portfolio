
gsap.registerPlugin(ScrollTrigger);

const $moveTitles = document.querySelectorAll("[data-animation='moveUpTitle']");
const $moveTitlesRight = document.querySelectorAll("[data-animation='moveUpTitleRight']");

export const moveUpTitle = () => {
  $moveTitles.forEach((e) => {
    gsap.from(e, {
      y: 150,
      opacity: 0,
      rotate: 5,
      duration: 1,
      stagger: 1,
      scrub: true,
      scrollTrigger: {
        trigger: e,
        toggleActions: "restart none restart none",
      },
    });
  });
};

export const moveUpTitleRight = () => { 
  $moveTitlesRight.forEach((e) => {
    gsap.from(e, {
      y: 150,
      opacity: 0,
      rotate: -5,
      duration: 1,
      stagger: 0.2,
      scrub: true,
      scrollTrigger: {
        trigger: e,
        toggleActions: "restart none restart none",
      },
    });
  });
};
