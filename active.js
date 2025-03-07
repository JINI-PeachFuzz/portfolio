document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".links li");
  
    function activateMenu() {
      let scrollPosition = window.scrollY;
  
      sections.forEach((section) => {
        let sectionTop = section.offsetTop - 100; // 네비게이션 높이 고려
        let sectionBottom = sectionTop + section.offsetHeight;
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          let id = section.getAttribute("id");
  
          navLinks.forEach((link) => {
            link.classList.remove("active"); // 기존 active 제거
            if (link.innerText.includes(id)) {
              link.classList.add("active"); // 현재 보이는 섹션의 링크 활성화
            }
          });
        }
      });
    }
  
    window.addEventListener("scroll", activateMenu);
  });