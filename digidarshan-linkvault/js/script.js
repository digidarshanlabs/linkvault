// Dropdown toggle
const menuButton = document.querySelector('.menu-button');
const menuDropdown = document.querySelector('.menu-dropdown');

if (menuButton && menuDropdown) {
    menuButton.addEventListener('click', () => {
        menuDropdown.style.display = (menuDropdown.style.display === 'block') ? 'none' : 'block';
    });

    window.addEventListener('click', function(e) {
        if (!menuButton.contains(e.target) && !menuDropdown.contains(e.target)) {
            menuDropdown.style.display = 'none';
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Basic search fallback
function searchLinks(query) {
    const links = document.querySelectorAll('.link-block');
    const searchTerm = query.toLowerCase();
    links.forEach(link => {
        const text = link.textContent.toLowerCase();
        link.style.display = text.includes(searchTerm) ? 'block' : 'none';
    });
}

// Search input handler
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();
        searchLinks(query);
        // Future: replace with vectorSearch(query).then(...)
    });
}
