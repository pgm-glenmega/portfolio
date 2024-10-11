import gsap from "gsap";

export const heroAnimation = () => {
  gsap.fromTo(
    ".hero-title",
    {
      opacity: 0,
      y: 50, // Starting slightly below
    },
    {
      opacity: 1,
      y: 0, // Animating back to its original position
      duration: 1.5, // Duration of animation
      ease: "power3.out", // Smooth easing
      delay: 0.5, // Delay before the animation starts
    }
  );
};

export default heroAnimation;
