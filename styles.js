// Add interactivity to the portfolio

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Theme customization: Computer Vision inspired theme
const body = document.body;
const themeToggle = document.createElement('button');
themeToggle.textContent = 'Toggle Theme';
themeToggle.style.position = 'fixed';
themeToggle.style.bottom = '20px';
themeToggle.style.right = '20px';
themeToggle.style.padding = '10px 20px';
themeToggle.style.background = '#0077b6';
themeToggle.style.color = '#fff';
themeToggle.style.border = 'none';
themeToggle.style.cursor = 'pointer';
document.body.appendChild(themeToggle);

let darkMode = false;

function applyTheme() {
    if (darkMode) {
        body.style.backgroundColor = '#0a0a23';
        body.style.color = '#f0f0f0';
        themeToggle.style.background = '#48cae4';
    } else {
        body.style.backgroundColor = '#f0f8ff';
        body.style.color = '#333';
        themeToggle.style.background = '#0077b6';
    }
}

applyTheme();

themeToggle.addEventListener('click', () => {
    darkMode = !darkMode;
    applyTheme();
});
