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
    themeToggle.textContent = isLight ? 'День☀️' : 'Ночь🌙';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}

// Поиск
function performSearch() {
  const q = document.getElementById('searchInput').value.trim();
  if (!q) return alert('Черкани сначала чё-нить');
  window.location.href = `https://www.google.com/search?q=${encodeURIComponent(q)}&btnI`;
}

// Котики с текстом
function generateCat() {
  const text = document.getElementById('catText').value.trim();
  if (!text) return alert('Черкани сначала чё-нить');
  showCat(`https://cataas.com/cat/says/${encodeURIComponent(text)}?size=50&style=original&t=${Date.now()}`);
}

function generateRandomCat() {
  showCat(`https://cataas.com/cat?random=${Math.random()}`);
}

function showCat(url) {
  const out = document.getElementById('catOutput');

  const newImg = document.createElement('img');
  newImg.src = url;
  newImg.alt = 'Котик';
  newImg.loading = 'lazy';
  newImg.style.margin = '20px auto';
  newImg.style.display = 'block';
  newImg.style.opacity = '0';
  newImg.style.transition = 'opacity 0.5s ease';

  // Сначала вставляем картинку, но невидимую
  out.appendChild(newImg);

  newImg.onload = () => {
    // Когда загрузилась — убираем предыдущего (если он есть)
    const allCats = out.querySelectorAll('img');
    if (allCats.length > 1) {
      out.removeChild(allCats[0]); // удаляем первого (старого)
    }

    // Затем плавно показываем нового
    requestAnimationFrame(() => {
      newImg.style.opacity = '1';
      newImg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  };
}

// Функция для снежинок (при необходимости)
function generateSnowflakes() {
  /* ваша логика */
}
