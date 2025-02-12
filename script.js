window.onload = function() {
  window.scrollTo(0, 0);
  };

// Показуємо кнопку при прокручуванні вниз
window.onscroll = function() {
    let button = document.getElementById('scrollToTop');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      button.classList.add('show');
    } else {
      button.classList.remove('show');
    }
  };
  
  // Прокрутка наверх при натисканні на кнопку
  document.getElementById('scrollToTop').onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
