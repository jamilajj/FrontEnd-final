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

const openPopupButton_index = document.getElementById('open-popup_index');
const closePopupButton_index = document.getElementById('close-popup_index');
const popup_index = document.getElementById('popup_index');

openPopupButton_index.addEventListener('click', (e) => {
    e.preventDefault();
  popup_index.style.display = 'block';
});

closePopupButton_index.addEventListener('click', () => {
  popup_index.style.display = 'none';
});
