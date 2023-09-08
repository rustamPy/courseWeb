const images = document.querySelectorAll('.content img');
const preview_window = document.getElementById('preview');
let active_image = null;

for (let image of images) {
    image.addEventListener('click', () => {
        active_image = image;
        preview_window.style.display = 'block';
        active_image.classList.add('preview_picture');
    })
}

preview_window.addEventListener('click', () => {
    active_image.classList.remove('preview_picture');
    preview_window.style.display = 'none';
})

