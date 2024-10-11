
// Select the span and the image
const interactTitle = document.querySelector('.interact');
const slideImg = document.querySelector('.slide-img');

// Function for GSAP hover animation
export const interactAnimation = () => {
  // On hover over the span, animate the image sliding upwards
  interactTitle.addEventListener('mouseenter', () => {
    gsap.to(slideImg, { 
      y: -60,       // Slide the image upwards (adjust as needed)
      opacity: 1,    // Make the image visible
      duration: 0.5, // Animation duration
      ease: "power2.out",  // Smooth easing
    });
  });

  // On hover out of the span, animate the image sliding back down
  interactTitle.addEventListener('mouseleave', () => {
    gsap.to(slideImg, { 
      y: -55,        // Slide back down to hide it below the span
      opacity: 0,    // Make it invisible again
      duration: 0.5, 
      ease: "power2.in",  // Smooth easing
    });
  });
};

export default interactAnimation;
