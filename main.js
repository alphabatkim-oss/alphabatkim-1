const themeToggle = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;

// Function to set the theme
const setTheme = (theme) => {
  htmlEl.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
};

// Toggle theme when button is clicked
themeToggle.addEventListener('click', () => {
  const currentTheme = htmlEl.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});

// Set theme on initial load
const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
  setTheme(storedTheme);
} else {
  // Default to light theme if no preference is stored
  setTheme('light');
}