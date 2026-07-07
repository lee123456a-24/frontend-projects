let filter_btns = document.querySelectorAll('.filter-btn');
let projects = document.querySelectorAll('.filter-project-item');

// 필터링 함수 정의
function applyFilter(selected) {
  filter_btns.forEach((btn) => {
    if (btn.getAttribute('data-project') === selected) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  projects.forEach((project, index) => {
    let project_length = projects.length;
    if (
      project.getAttribute('data-project') === selected ||
      selected === 'all'
    ) {

      project.classList.add('show');
      project.classList.remove('hide');
    } else {

      project.classList.remove('show');
      project.classList.add('hide');
    }
  });
}

// 클릭 이벤트 설정
filter_btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    let selected = btn.getAttribute('data-project');
    applyFilter(selected);
  });
});

// 🚀 초기 로드시 "web" 필터 적용
window.addEventListener('DOMContentLoaded', () => {
  applyFilter('best');
});