// Кешируем элементы
const body = document.body;
const themeToggle = document.querySelector('.theme-toggle');

if (themeToggle) {
  // Загрузка сохранённой темы
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    body.classList.add('light-mode');
    themeToggle.textContent = 'Ночь – День';
  }

  // Переключение темы
  themeToggle.addEventListener('click', () => {
    const isLight = body.classList.toggle('light-mode');
    themeToggle.textContent = isLight ? 'Ночь – День' : 'День – Ночь';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}

// Поиск
function performSearch() {
  const q = document.getElementById('searchInput').value.trim();
  if (!q) return alert('Черкани сначала чё-нить');
  window.location.href = `https://www.google.com/search?q=${encodeURIComponent(q)}&btnI`;
}

// Мемы с котиками
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

// Функция для снежинок (при необходимости)
function generateSnowflakes() {
  /* ваша логика */
}
