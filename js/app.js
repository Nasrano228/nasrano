// Кешируем элементы
const body = document.body;
const themeToggle = document.querySelector('.theme-toggle');

// Тема из localStorage
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-mode');
}

// Переключение темы
themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  const mode = body.classList.contains('light-mode') ? 'light' : 'dark';
  localStorage.setItem('theme', mode);
});

// Поиск
function performSearch() {
  const q = document.getElementById('searchInput').value.trim();
  if (!q) return alert('Черкани сначала чё-нить');
  window.location.href = `https://www.google.com/search?q=${encodeURIComponent(q)}&btnI`;
}

// Мемы
function generateMeme() {
  const text = document.getElementById('memeText').value.trim();
  if (!text) return alert('Черкани сначала чё-нить');
  showMeme(`https://cataas.com/cat/says/${encodeURIComponent(text)}?size=50&style=original&t=${Date.now()}`);
}
function generateRandomMeme() {
  showMeme(`https://cataas.com/cat?random=${Math.random()}`);
}
function showMeme(url) {
  const out = document.getElementById('memeOutput');
  out.innerHTML = `<img src="${url}" alt="Мем с котиком" loading="lazy">`;
}

// Снежинки (по кнопке, а не сразу)
function generateSnowflakes() {
  /* … ваша логика … */
}
// (вызывайте generateSnowflakes() только когда нужно)
