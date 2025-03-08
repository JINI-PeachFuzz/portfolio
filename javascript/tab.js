document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".tab-btn");
  const timelines = document.querySelectorAll(".timeline");

  // 초기값/ Education이 기본적으로 표시됨
  document.querySelector(".timeline.education").classList.add("active");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // 모든 버튼에서 active 클래스 제거
      buttons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // 모든 타임라인 숨기기
      timelines.forEach((timeline) => {
        timeline.classList.remove("active");
        timeline.style.display = "none"; // 숨김 처리
      });

      // 클릭한 버튼의 data-target 속성 가져오기
      const targetClass = this.getAttribute("data-target");

      // 해당 클래스를 가진 타임라인만 보이게 설정
      const activeTimeline = document.querySelector(`.timeline.${targetClass}`);
      if (activeTimeline) {
        activeTimeline.classList.add("active");
        activeTimeline.style.display = "flex"; // 보이게 설정
      }

      // 타임라인 높이 조정
      adjustTimelineHeight();
    });
  });

  function adjustTimelineHeight() {
    const activeTimeline = document.querySelector(".timeline.active");
    if (activeTimeline) {
      const items = activeTimeline.querySelectorAll(".timeline-item");
      activeTimeline.style.height = `${items.length * 83}px`; // 항목 개수에 따라 높이 조정
    }
  }
});


