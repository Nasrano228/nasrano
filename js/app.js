// Элементы DOM
const body = document.body;
const themeToggle = document.querySelector('.theme-toggle');

// Инициализация темы (сохраняется в localStorage)
if (themeToggle) {
  // Загрузка сохранённой темы
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    body.classList.add('light-mode');
    themeToggle.textContent = 'Ночь – День';
  }

  // Обработчик переключения темы
  themeToggle.addEventListener('click', () => {
    const isLight = body.classList.toggle('light-mode');
    themeToggle.textContent = isLight ? 'День☀️' : 'Ночь🌙';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}

// Выполняет «Мне повезёт» поиск в Google по введённой фразе
function performSearch() {
  const q = document.getElementById('searchInput').value.trim();
  if (!q) return alert('Черкани сначала чё-нить');
  window.location.href = `https://www.google.com/search?q=${encodeURIComponent(q)}&btnI`;
}

// Генерирует изображение котика с текстом
function generateCat() {
  const text = document.getElementById('catText').value.trim();
  if (!text) return alert('Черкани сначала чё-нить');
  showCat(`https://cataas.com/cat/says/${encodeURIComponent(text)}?size=50&style=original&t=${Date.now()}`);
}

// Генерирует случайное изображение котика
function generateRandomCat() {
  showCat(`https://cataas.com/cat?random=${Math.random()}`);
}

// Отображает изображение котика с анимацией загрузки
// @param {string} url - URL изображения котика
function showCat(url) {
  const out = document.getElementById('catOutput');
  const existingCat = out.querySelector('img');

  let spinner;
  if (existingCat) {
    // Добавляем спиннер поверх старого изображения
    spinner = document.createElement('div');
    spinner.className = 'spinner-overlay';
    existingCat.style.position = 'relative';
    existingCat.parentNode.style.position = 'relative';
    out.appendChild(spinner);
  }

  // Создаём новый элемент img
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
    if (spinner) spinner.remove();

    // Удаляем старое изображение
    const allCats = out.querySelectorAll('img');
    if (allCats.length > 1) {
      out.removeChild(allCats[0]);
    }

    // Плавно показываем новую картинку и скроллим к ней
    requestAnimationFrame(() => {
      newImg.style.opacity = '1';
      newImg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  };
}

// Смена catblimp.gif по порядку
const headerImgs = document.querySelectorAll('.header-img');
const altImages = [
  'assets/catblimp.gif',
  'assets/mion.avif',
  'assets/mion2.avif',
  'assets/nasral.avif',
  'assets/taa.avif'
];

// Для каждого изображения храним свой индекс
headerImgs.forEach(img => {
  img.dataset.imgIndex = '0'; // начальное значение

  img.addEventListener('click', () => {
    let index = parseInt(img.dataset.imgIndex, 10);
    index = (index + 1) % altImages.length;
    img.dataset.imgIndex = index;
    img.src = altImages[index];
  });
});
