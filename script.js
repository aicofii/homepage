document.addEventListener('DOMContentLoaded', () => {
  // Translations
  const translations = {
    en: {
      title: 'ERP System - Apolo-net',
      'company-name': 'Apolo-net',
      'hero-subtitle': 'Innovative Technology Solutions for a Connected Future',
      'hero-cta': 'Get Started',
      'company-title': 'About Us',
      'company-description': 'We are a leading technology company delivering innovative, scalable solutions to empower businesses in a connected world.',
      'company-feature1-title': 'Innovation',
      'company-feature1-description': 'Leading the industry with groundbreaking technology.',
      'company-feature2-title': 'Reliability',
      'company-feature2-description': 'Trusted by businesses worldwide for consistent performance.',
      'company-feature3-title': 'Support',
      'company-feature3-description': '24/7 customer support to ensure your success.',
      'products-title': 'Our ERP Solutions',
      'product1-title': 'Inventory Management',
      'product1-description': 'Streamline your inventory with real-time tracking and analytics.',
      'product2-title': 'Financial Tools',
      'product2-description': 'Manage finances with precision and automated reporting.',
      'product3-title': 'HR Module',
      'product3-description': 'Simplify HR processes with integrated payroll and employee management.',
      'plans-title': 'Choose Your Plan',
      'plan1-title': 'Basic',
      'plan1-feature1': 'Core ERP Features',
      'plan1-feature2': 'Up to 10 Users',
      'plan1-feature3': 'Basic Support',
      'plan1-cta': 'Select Plan',
      'plan2-title': 'Pro',
      'plan2-feature1': 'All Basic Features',
      'plan2-feature2': 'Up to 50 Users',
      'plan2-feature3': 'Priority Support',
      'plan2-cta': 'Select Plan',
      'plan3-title': 'Enterprise',
      'plan3-price': 'Custom',
      'plan3-feature1': 'All Pro Features',
      'plan3-feature2': 'Unlimited Users',
      'plan3-feature3': 'Dedicated Support',
      'plan3-cta': 'Contact Us',
      'footer-copyright': '© 2025 Apolo-net. All rights reserved.',
      typed: ['Revolutionize Your Business', 'Empower Your Enterprise', 'Scale with Confidence']
    },
    es: {
      title: 'Sistema ERP - Apolo-net',
      'company-name': 'Apolo-net',
      'hero-subtitle': 'Soluciones Tecnológicas Innovadoras para un Futuro Conectado',
      'hero-cta': 'Comenzar',
      'company-title': 'Sobre Nosotros',
      'company-description': 'Somos una empresa tecnológica líder que ofrece soluciones innovadoras y escalables para empoderar a las empresas en un mundo conectado.',
      'company-feature1-title': 'Innovación',
      'company-feature1-description': 'Liderando la industria con tecnología innovadora.',
      'company-feature2-title': 'Confiabilidad',
      'company-feature2-description': 'Confiado por empresas de todo el mundo por su rendimiento consistente.',
      'company-feature3-title': 'Soporte',
      'company-feature3-description': 'Soporte al cliente 24/7 para garantizar tu éxito.',
      'products-title': 'Nuestras Soluciones ERP',
      'product1-title': 'Gestión de Inventarios',
      'product1-description': 'Optimiza tu inventario con seguimiento y análisis en tiempo real.',
      'product2-title': 'Herramientas Financieras',
      'product2-description': 'Administra tus finanzas con precisión y reportes automatizados.',
      'product3-title': 'Módulo de Recursos Humanos',
      'product3-description': 'Simplifica los procesos de RRHH con nómina y gestión de empleados integrados.',
      'plans-title': 'Elige Tu Plan',
      'plan1-title': 'Básico',
      'plan1-feature1': 'Funciones principales de ERP',
      'plan1-feature2': 'Hasta 10 usuarios',
      'plan1-feature3': 'Soporte básico',
      'plan1-cta': 'Seleccionar Plan',
      'plan2-title': 'Pro',
      'plan2-feature1': 'Todas las funciones básicas',
      'plan2-feature2': 'Hasta 50 usuarios',
      'plan2-feature3': 'Soporte prioritario',
      'plan2-cta': 'Seleccionar Plan',
      'plan3-title': 'Empresarial',
      'plan3-price': 'Personalizado',
      'plan3-feature1': 'Todas las funciones Pro',
      'plan3-feature2': 'Usuarios ilimitados',
      'plan3-feature3': 'Soporte dedicado',
      'plan3-cta': 'Contáctanos',
      'footer-copyright': '© 2025 Apolo-net. Todos los derechos reservados.',
      typed: ['Revoluciona Tu Negocio', 'Empodera Tu Empresa', 'Escala con Confianza']
    },
    zh: {
      title: 'ERP系统 - 阿波罗网络',
      'company-name': '阿波罗网络',
      'hero-subtitle': '面向互联未来的创新科技解决方案',
      'hero-cta': '开始使用',
      'company-title': '关于我们',
      'company-description': '我们是一家领先的科技公司，提供创新、可扩展的解决方案，赋能企业在互联世界中的发展。',
      'company-feature1-title': '创新',
      'company-feature1-description': '以突破性技术引领行业。',
      'company-feature2-title': '可靠性',
      'company-feature2-description': '全球企业信赖的稳定性能。',
      'company-feature3-title': '支持',
      'company-feature3-description': '7天24小时客户支持，确保您的成功。',
      'products-title': '我们的ERP解决方案',
      'product1-title': '库存管理',
      'product1-description': '通过实时跟踪和分析优化您的库存。',
      'product2-title': '财务工具',
      'product2-description': '以精准和自动化报告管理财务。',
      'product3-title': '人力资源模块',
      'product3-description': '通过集成的工资单和员工管理简化人力资源流程。',
      'plans-title': '选择您的计划',
      'plan1-title': '基础版',
      'plan1-feature1': '核心ERP功能',
      'plan1-feature2': '最多10个用户',
      'plan1-feature3': '基础支持',
      'plan1-cta': '选择计划',
      'plan2-title': '专业版',
      'plan2-feature1': '所有基础版功能',
      'plan2-feature2': '最多50个用户',
      'plan2-feature3': '优先支持',
      'plan2-cta': '选择计划',
      'plan3-title': '企业版',
      'plan3-price': '定制',
      'plan3-feature1': '所有专业版功能',
      'plan3-feature2': '无限用户',
      'plan3-feature3': '专属支持',
      'plan3-cta': '联系我们',
      'footer-copyright': '© 2025 阿波罗网络。保留所有权利。',
      typed: ['变革您的业务', '赋能您的企业', '自信扩展']
    }
  };

  // Language switcher logic
  const languageSwitcher = document.getElementById('language-switcher');
  languageSwitcher.addEventListener('change', (e) => {
    const lang = e.target.value;
    updateContent(lang);
    updateTyped(lang);
    document.documentElement.lang = lang;
  });

  // Update content based on language
  function updateContent(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      element.textContent = translations[lang][key] || element.textContent;
    });
    document.title = translations[lang].title;
  }

  // Update Typed.js for hero section
  let typedInstance = null;
  function updateTyped(lang) {
    if (typedInstance) {
      typedInstance.destroy();
    }
    typedInstance = new Typed('#typed', {
      strings: translations[lang].typed,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true
    });
  }

  // Initialize with default language (English)
  updateContent('en');
  updateTyped('en');

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Product card and feature card animation on click
  const cards = document.querySelectorAll('.product-card, .feature-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('bg-blue-600');
      card.classList.toggle('text-white');
      setTimeout(() => {
        card.classList.toggle('bg-blue-600');
        card.classList.toggle('text-white');
      }, 300);
    });
  });

  // Initialize Vanilla Tilt for product cards and feature cards
  VanillaTilt.init(document.querySelectorAll('.product-card, .feature-card'), {
    max: 15,
    speed: 400,
    glare: true,
    'max-glare': 0.3
  });

  // Particle background
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      vx: Math.random() * 2 - 1,
      vy: Math.random() * 2 - 1
    });
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 229, 255, 0.5)';
      ctx.fill();
    });
    requestAnimationFrame(animateParticles);
  }
  animateParticles();

  // Resize canvas on window resize
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});