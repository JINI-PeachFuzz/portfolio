document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
  
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active"); // 메뉴 열고 닫기
      menuToggle.classList.toggle("active"); // 화살표 방향 변경
    });
  });