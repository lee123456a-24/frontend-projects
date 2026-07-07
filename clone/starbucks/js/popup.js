window.onload = function () {
  closePopup();
};
function openPopup(title, description, imageSrc) {
  console.log("팝업 열기:", title, description, imageSrc);  // 이 줄을 추가해서 로그 확인
  document.getElementById('popup-title').textContent = title;
  document.getElementById('popup-description').textContent = description;
  document.getElementById('popup-image').src = imageSrc;
  document.getElementById('popup').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
  document.body.style.overflow = '';
}