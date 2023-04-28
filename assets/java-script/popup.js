const openPopupButton = document.getElementById('open-popup');
const closePopupButton = document.getElementById('close-popup');
const popup = document.getElementById('popup');

openPopupButton.addEventListener('click', (e) => {
    e.preventDefault();
  popup.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
  popup.style.display = 'none';
});
