const coverPage = document.getElementById('coverPage');
const mainPage = document.getElementById('mainPage');
const enterBtn = document.getElementById('playBtn'); // heart button
const bgm = document.getElementById('bgm');

// Heart button click
enterBtn.addEventListener('click', () => {
  // Hide cover, show main page
  coverPage.style.display = 'none';
  mainPage.style.display = 'block';

  // Allow body scrolling for main page
  document.body.style.overflowY = 'auto';

  // Play music
  bgm.play();

  // Start floating hearts
  setInterval(createHeart, 500);
});
