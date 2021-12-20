function openPopup() {
  const popup = document.querySelector('.js-popup');
  const btns = document.querySelectorAll('.js-open-popup');

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
      popup.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  }
}

function hidePopup() {
  const popup = document.querySelector('.js-popup');
  const cross = document.querySelector('.js-popup-cross');

  cross.addEventListener('click', function() {
    popup.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
}

openPopup();
hidePopup();
