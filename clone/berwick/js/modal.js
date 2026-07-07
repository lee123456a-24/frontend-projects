document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('product-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalPrice = document.getElementById('modal-price');
    const closeBtn = document.querySelector('.close');
  
    const movieItems = document.querySelectorAll('.movie-item');
  
    movieItems.forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault(); // 링크 이동 막기
        const imgSrc = this.querySelector('img').getAttribute('src');
        const title = this.querySelector('.movie-item-title').innerText;
        const price = this.querySelectorAll('.movie-info')[2].innerText;
  
        modalImg.setAttribute('src', imgSrc);
        modalTitle.innerText = title;
        modalPrice.innerText = price;
  
        modal.style.display = 'flex';
      });
    });
  
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function(e) {
      if (e.target == modal) {
        modal.style.display = 'none';
      }
    });
  });