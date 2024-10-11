const headerBackground = () => { 
  document.addEventListener("scroll", function() {
    const header = document.querySelector("header");
  
    if (window.scrollY > 10) { // Adjust this value if needed
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
  
}

export default headerBackground;