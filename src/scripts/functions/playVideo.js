const playVideo = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project");
    const overlay = document.getElementById("video-overlay");
    const closeBtn = document.getElementById("close-overlay");
    const video = document.getElementById("project-video");
    const videoSource = document.getElementById("video-source");

    // Function to play the video
    function playVideo(videoSrc) {
      videoSource.src = videoSrc;
      video.load(); // Reload the video with the new source
      overlay.style.display = "flex"; // Show the overlay
      video.play(); // Play the video
    }

    // Click event for each project
    projects.forEach((project) => {
      project.addEventListener("click", () => {
        const videoSrc = project.getAttribute("data-video-src");
        playVideo(videoSrc);
      });
    });

    // Close the overlay when clicking the close button
    closeBtn.addEventListener("click", () => {
      overlay.style.display = "none"; // Hide the overlay
      video.pause(); // Pause the video
      video.currentTime = 0; // Reset the video to the beginning
    });

    // Optional: Close the overlay if the user clicks outside the video
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) {
        overlay.style.display = "none";
        video.pause();
        video.currentTime = 0;
      }
    });
  });
};

export default playVideo;
