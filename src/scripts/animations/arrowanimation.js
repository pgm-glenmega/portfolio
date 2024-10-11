
const emailLink = document.querySelector(".email-link"); // Select the <a> element
const arrow = document.querySelector(".arrow"); // Select the arrow inside <a>

// Attach the animation to the email link hover
export const arrowAnimation = () => {
  emailLink.addEventListener("mouseenter", () => {
    gsap.to(arrow, { scaleX: 1.5, duration: 0.3, ease: "power1.out" }); // Only animate the arrow
  });

  emailLink.addEventListener("mouseleave", () => {
    gsap.to(arrow, { scaleX: 1, duration: 0.3, ease: "power1.in" }); // Reset the arrow on mouse leave
  });
};

export default arrowAnimation;

