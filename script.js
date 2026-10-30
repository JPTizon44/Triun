// TRIUN - Interações Institucionais

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // 2. Initialize Lucide Icons
    if (window.lucide) {
        window.lucide.createIcons();
    }
});

// 3. Catálogo de Serviços Filter Switcher
function filterServices(category) {
    const categories = ['todos', 'financeira', 'contabil', 'empresarial'];
    
    // Update active state on filter buttons
    categories.forEach(cat => {
        const btn = document.getElementById(`filter-btn-${cat}`);
        if (btn) {
            if (cat === category) {
                btn.classList.add('active');
                btn.classList.remove('text-gray-500');
            } else {
                btn.classList.remove('active');
                btn.classList.add('text-gray-500');
            }
        }
    });

    // Show/hide service cards
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'todos' || cardCat === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });

    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// Pré-seleciona o serviço clicado no formulário de contato
function selectServiceInForm(serviceName) {
    const select = document.getElementById('serviceSelect');
    if (select && serviceName) {
        select.value = serviceName;
    }
}

// 4. FAQ Accordion Toggle
function toggleFaq(btn) {
    const content = btn.nextElementSibling;
    const isExpanded = btn.classList.contains('active');

    // Close all FAQs first for clean single-view accordion
    document.querySelectorAll('.faq-btn').forEach(b => {
        b.classList.remove('active');
        if (b.nextElementSibling) {
            b.nextElementSibling.classList.add('hidden');
        }
    });

    // If it wasn't open, open it
    if (!isExpanded && content) {
        btn.classList.add('active');
        content.classList.remove('hidden');
    }

    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// 5. Contact Form Handler (Polite institutional feedback)
function handleContactSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const successMsg = document.getElementById('formSuccessMsg');
    
    if (successMsg) {
        successMsg.classList.remove('hidden');
        form.reset();
        setTimeout(() => {
            successMsg.classList.add('hidden');
        }, 8000);
    } else {
        alert('Mensagem recebida com sucesso! Nossa equipe entrará em contato por e-mail.');
        form.reset();
    }
}
