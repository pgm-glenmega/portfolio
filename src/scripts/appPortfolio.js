import fadeAnimation from "./animations/fadeupanimation.js";
import arrowAnimation from "./animations/arrowanimation.js";
import mouseMove from "./animations/mouseanimation.js";
import interactAnimation from "./animations/interactanimation.js";

//class functions
import headerBackground from "./functions/headerBackground.js";
import playVideo from "./functions/playVideo.js";

const executeAnimations = () => {
  mouseMove();
  headerBackground();
  interactAnimation();
  fadeAnimation();
  arrowAnimation();
  playVideo();
};

executeAnimations();
