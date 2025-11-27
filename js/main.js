document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Product Filters
    const categoryFilters = document.getElementById('categoryFilters');
    const productsGrid = document.getElementById('productsGrid');
    const productSearch = document.getElementById('productSearch');

    if (categoryFilters && productsGrid) {
        const filterBtns = categoryFilters.querySelectorAll('.filter-btn');
        const productItems = productsGrid.querySelectorAll('.product-item');

        // Category Filter
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');

                const filterValue = this.getAttribute('data-filter');
                filterProducts(filterValue, productSearch ? productSearch.value : '');
            });
        });

        // Search Filter
        if (productSearch) {
            productSearch.addEventListener('input', function() {
                const activeBtn = categoryFilters.querySelector('.filter-btn.active');
                const filterValue = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
                filterProducts(filterValue, this.value);
            });
        }

        function filterProducts(category, searchTerm) {
            searchTerm = searchTerm.toLowerCase();

            productItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                const itemName = item.getAttribute('data-name').toLowerCase();
                const itemDesc = item.querySelector('.product-desc').textContent.toLowerCase();

                const matchesCategory = category === 'all' || itemCategory === category;
                const matchesSearch = itemName.includes(searchTerm) || itemDesc.includes(searchTerm);

                if (matchesCategory && matchesSearch) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }
    }

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    const icon = mobileToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }

                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Função global para solicitar orçamento via WhatsApp com nome do produto
function requestQuote(productName) {
    var base = 'https://wa.me/5531975643554';
    var message = 'Olá! Gostaria de solicitar um orçamento para: ' + productName + '.';
    var url = base + '?text=' + encodeURIComponent(message);
    window.open(url, '_blank');
}
