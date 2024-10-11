import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const fadeAnimation = () => {
  const $fadeElements = document.querySelectorAll(
    '[data-animation="fade--in"]'
  );

  $fadeElements.forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      y: 20,
      duration: 2,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "restart none restart none",
      },
    });
  });
};

export default fadeAnimation;