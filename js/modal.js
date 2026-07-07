function closeModal() {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImage");

  modal.style.display = "none";

  // 이미지 관련 스타일/클래스 초기화
  modalImg.src = "";
  modalImg.style.maxWidth = "";
  modalImg.style.width = "";
  modalImg.style.height = "";
  modalImg.style.borderRadius = "";
  modalImg.className = "modal-content"; // 필요하면 초기 클래스 유지
}

function openModal(imageElement) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImage");

  modal.style.display = "block";
  modalImg.src = imageElement.getAttribute("data-full") || imageElement.src;

  const maxWidth = imageElement.getAttribute("data-maxwidth") || "800";
  modalImg.style.maxWidth = maxWidth + "px";
  modalImg.style.width = "100%";
  modalImg.style.height = "auto";
  modalImg.style.borderRadius = window.getComputedStyle(imageElement).borderRadius;
}