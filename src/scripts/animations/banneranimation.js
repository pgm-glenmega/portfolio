import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);


const $heroTitle = document.querySelector(".hero-title");

export const heroTitleAnimation = () => {
  gsap.from($heroTitle, {
    y: -500,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: $heroTitle,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "restart none restart none",
    },
  });
};

export default heroTitleAnimation;
