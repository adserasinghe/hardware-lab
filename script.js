document.addEventListener('DOMContentLoaded', function() {
    // Toggle sidebar on mobile
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menuToggle');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }

    // Set active menu item based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const menuItems = document.querySelectorAll('.sidebar-menu li a');
    
    menuItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            item.parentElement.classList.add('active');
        } else {
            item.parentElement.classList.remove('active');
        }
    });

    // Initialize any page-specific scripts
    if (document.querySelector('.data-table')) {
        initDataTable();
    }

    if (document.getElementById('contactForm')) {
        initContactForm();
    }
});

function initDataTable() {
    // This would be replaced with actual data table initialization
    // For example using DataTables.js or similar library
    console.log('Data table initialized');
}

function initContactForm() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    });
}