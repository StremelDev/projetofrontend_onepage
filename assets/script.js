// ========================================
// ELETRONGOLD - JavaScript
// ========================================

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Validação e envio do formulário
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Obter valores do formulário
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validação básica
    if (!name || !email || !phone || !message) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, insira um email válido!');
      return;
    }

    // Validar telefone (apenas números)
    const phoneRegex = /^\d{10,}$/;
    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
      alert('Por favor, insira um telefone válido!');
      return;
    }

    // Simular envio (em produção, isso seria enviado para um servidor)
    console.log('Formulário enviado:', { name, email, phone, message });

    // Mostrar mensagem de sucesso
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');

    // Limpar formulário
    this.reset();
  });
}

// Adicionar efeito de hover nos cards
const cards = document.querySelectorAll('.service-card, .advantage-item');
cards.forEach(card => {
  card.addEventListener('mouseenter', function () {
    this.style.transition = 'all 0.3s ease';
  });
});

// Efeito de scroll para mostrar elementos
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observar elementos
document.querySelectorAll('.service-card, .advantage-item, .about-feature').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.6s ease';
  observer.observe(el);
});

// Menu mobile responsivo
function setupMobileMenu() {
  const navbar = document.querySelector('.navbar');
  const nav = document.querySelector('nav');

  if (window.innerWidth <= 768) {
    // Adicionar botão de menu se não existir
    if (!document.querySelector('.menu-toggle')) {
      const menuToggle = document.createElement('button');
      menuToggle.className = 'menu-toggle';
      menuToggle.innerHTML = '☰';
      menuToggle.style.cssText = `
        background: none;
        border: none;
        color: var(--primary);
        font-size: 1.5rem;
        cursor: pointer;
        display: block;
      `;

      menuToggle.addEventListener('click', function () {
        nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
      });

      navbar.appendChild(menuToggle);
    }
  }
}

// Inicializar menu mobile
setupMobileMenu();
window.addEventListener('resize', setupMobileMenu);

// Fechar menu ao clicar em um link
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function () {
    const nav = document.querySelector('nav');
    if (window.innerWidth <= 768) {
      nav.style.display = 'none';
    }
  });
});

// Animação de números (contador)
function animateCounter(element, target, duration = 2000, prefix = '', suffix = '') {
  let current = 0;
  const increment = target / (duration / 16);
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = prefix + target + suffix;
      clearInterval(timer);
    } else {
      element.textContent = prefix + Math.floor(current) + suffix;
    }
  }, 16);
}

// Iniciar animação quando a seção é visível
const statsSection = document.querySelector('.stats');
if (statsSection) {
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.stat-number').forEach(stat => {
          const originalText = stat.textContent.trim();
          const match = originalText.match(/^([^\d]*?)(\d+)(.*)$/);
          let target = 0;
          let prefix = '';
          let suffix = '';

          if (match) {
            prefix = match[1];
            target = parseInt(match[2]);
            suffix = match[3];
          } else if (!isNaN(parseInt(originalText))) {
            target = parseInt(originalText);
          } else {
            // Se não for um número animável, apenas exibe o texto original e continua
            return;
          }
if (target > 0) {
	            animateCounter(stat, target, 2000, prefix, suffix);
		          } else {
		            // Se não for um número animável, apenas exibe o texto original e continua
		            stat.textContent = originalText;
		          }
        });
        statsObserver.unobserve(entry.target);
      }
    });
  });

  statsObserver.observe(statsSection);
}

// Log de inicialização
console.log('Eletrongold - Site carregado com sucesso!');
