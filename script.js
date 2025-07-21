document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("animated-text");

  if (el) {
    const phrases = [
      "a Software Engineer",
      "a Web Developer",
      "a Tech Enthusiast",
      "an Open Source Contributor",
      "a Problem Solver",
      "a Full-Stack Developer",
    ];

    let currentPhrase = 0;
    let currentChar = 0;
    let isDeleteing = false;

    function typeLoop() {
      const current = phrases[currentPhrase];
      const partial = current.substring(0, currentChar);
      el.textContent = partial;

      if (!isDeleteing) {
        if (currentChar < current.length) {
          currentChar++;
          setTimeout(typeLoop, 100);
        } 
        else {
          isDeleteing = true;
          setTimeout(typeLoop, 2000);
          return;
        }
      } 
      else {
        if (currentChar > 0) {
          currentChar--;
        } 
        else {
          isDeleteing = false;
          currentPhrase = (currentPhrase + 1) % phrases.length;
        }
        setTimeout(typeLoop, isDeleteing ? 50 : 120);
      }
    }

    typeLoop();
  }

  // Custom cursor works on all pages:
  const cursor = document.querySelector(".custom-cursor");

  window.addEventListener("mousemove", (e) => {
    cursor.style.opacity = 1;
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
  });
});
