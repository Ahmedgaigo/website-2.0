document.getElementById('theme').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent the default anchor behavior
    document.body.classList.toggle('dark-mode');
});

