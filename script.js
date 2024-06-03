document.getElementById('theme').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent the default anchor behavior
    document.body.classList.toggle('dark-mode');
    
    // Toggle dark mode for nav items
    let navItems = document.querySelectorAll('.nav_item');
    navItems.forEach(function(item) {
        item.classList.toggle('dark-mode');
    });

    // Toggle dark mode for <i> items inside nav items
    let navIcons = document.querySelectorAll('.nav_item i');
    navIcons.forEach(function(icon) {
        icon.classList.toggle('dark-mode-icon');
    });
});
