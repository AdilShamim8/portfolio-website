// Dynamic theme colors
const root = document.documentElement;
const colors = ['#6c63ff', '#ff6f61', '#ffcc00', '#6dbf63'];
let currentColorIndex = 0;

function changeThemeColor() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    root.style.setProperty('--theme-color', colors[currentColorIndex]);
}

setInterval(changeThemeColor, 5000);
