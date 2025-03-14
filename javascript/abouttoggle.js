document.addEventListener("DOMContentLoaded", function () {
    const toggleHeaders = document.querySelectorAll(".toggle-header");
  
    toggleHeaders.forEach((header) => {
      header.addEventListener("click", function () {
        const content = this.nextElementSibling;
        this.classList.toggle("active");
  
        // 토글 기능
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    });
  });