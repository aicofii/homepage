document.addEventListener('DOMContentLoaded', () => {
  // Translations
  const translations = {
    en: {
      title: 'ERP System - Apolo-net',
      'company-name': 'Apolo-net',
      'hero-subtitle': 'Innovative Technology Solutions for a Connected Future',
      'hero-cta': 'Contact Us',
      'company-title': 'About Us',
      'company-description': 'We are a leading technology company delivering innovative, scalable solutions to empower businesses in a connected world.',
      'company-feature1-title': 'Innovation',
      'company-feature1-description': 'Leading the industry with groundbreaking technology.',
      'company-feature2-title': 'Reliability',
      'company-feature2-description': 'Trusted by businesses worldwide for consistent performance.',
      'company-feature3-title': 'Support',
      'company-feature3-description': '24/7 customer support to ensure your success.',
      'products-title': 'Our Core Technology Services',
      'product1-title': 'ERP System',
      'product1-description': 'Covers finance, inventory, HR, and more to enhance enterprise management efficiency.',
      'product2-title': 'AI Platform',
      'product2-description': 'Provides AI modeling, data analytics, and intelligent recommendations to drive business decisions.',
      'product3-title': 'Intelligent Video Retrieval',
      'product3-description': 'Leverages image recognition and deep learning for precise search of massive video content.',
      'product4-title': 'Custom Development',
      'product4-description': 'Builds tailored software systems to flexibly adapt to various business processes.',
      'products2-title': 'Our Products',
      'product5-title': 'Aicoffi ERP',
      'product5-description': 'A comprehensive ERP system integrating finance, inventory, procurement, and HR modules to boost operational efficiency and decision accuracy.',
      'product6-title': 'Aicoffi TPV',
      'product6-description': 'An efficient Point of Sale system supporting fast transaction processing, inventory synchronization, and sales analytics, ideal for retail and hospitality.',
      'product7-title': 'Aicoffi App',
      'product7-description': 'Leverages AI technology to intelligently scan invoices, automate accounting, and significantly save time.',
      'contact-title': 'Contact Us',
      'contact-email': 'Email: info@apolo-net.com',
      'contact-phone': 'Phone: +34 123 456 789',
      'contact-whatsapp': 'WhatsApp: +34 987 654 321',
      'contact-wechat': 'WeChat: ApoloNet_Official',
      'footer-copyright': '© 2025 Apolo-net. All rights reserved.',
      'nav-about': 'About',
      'nav-technology': 'Technology',
      'nav-products': 'Our Products',
      typed: ['Revolutionize Your Business', 'Empower Your Enterprise', 'Scale with Confidence']
    },
    es: {
      title: 'Sistema ERP - Apolo-net',
      'company-name': 'Apolo-net',
      'hero-subtitle': 'Soluciones Tecnológicas Innovadoras para un Futuro Conectado',
      'hero-cta': 'Contáctanos',
      'company-title': 'Sobre Nosotros',
      'company-description': 'Somos una empresa tecnológica líder que ofrece soluciones innovadoras y escalables para empoderar a las empresas en un mundo conectado.',
      'company-feature1-title': 'Innovación',
      'company-feature1-description': 'Liderando la industria con tecnología innovadora.',
      'company-feature2-title': 'Confiabilidad',
      'company-feature2-description': 'Confiado por empresas de todo el mundo por su rendimiento consistente.',
      'company-feature3-title': 'Soporte',
      'company-feature3-description': 'Soporte al cliente 24/7 para garantizar tu éxito.',
      'products-title': 'Nuestros Servicios Tecnológicos Principales',
      'product1-title': 'Sistema ERP',
      'product1-description': 'Abarca finanzas, inventario, recursos humanos y más para mejorar la eficiencia de la gestión empresarial.',
      'product2-title': 'Plataforma de Inteligencia Artificial',
      'product2-description': 'Ofrece modelado de IA, análisis de datos y recomendaciones inteligentes para impulsar decisiones empresariales.',
      'product3-title': 'Recuperación Inteligente de Video',
      'product3-description': 'Utiliza reconocimiento de imágenes y aprendizaje profundo para búsquedas precisas de contenido de video masivo.',
      'product4-title': 'Desarrollo Personalizado',
      'product4-description': 'Crea sistemas de software a medida para adaptarse de manera flexible a diversos procesos empresariales.',
      'products2-title': 'Nuestros Productos',
      'product5-title': 'Aicoffi ERP',
      'product5-description': 'Un sistema ERP integral que integra módulos de finanzas, inventario, compras y recursos humanos para aumentar la eficiencia operativa y la precisión en la toma de decisiones.',
      'product6-title': 'Aicoffi TPV',
      'product6-description': 'Un sistema TPV eficiente que soporta procesamiento rápido de transacciones, sincronización de inventario y análisis de ventas, ideal para comercio minorista y hostelería.',
      'product7-title': 'Aicoffi App',
      'product7-description': 'Utiliza tecnología de IA para escanear facturas de manera inteligente, automatizar la contabilidad y ahorrar tiempo significativamente.',
      'contact-title': 'Contáctanos',
      'contact-email': 'Correo: info@apolo-net.com',
      'contact-phone': 'Teléfono: +34 123 456 789',
      'contact-whatsapp': 'WhatsApp: +34 987 654 321',
      'contact-wechat': 'WeChat: ApoloNet_Official',
      'footer-copyright': '© 2025 Apolo-net. Todos los derechos reservados.',
      'nav-about': 'Sobre Nosotros',
      'nav-technology': 'Tecnología',
      'nav-products': 'Nuestros Productos',
      typed: ['Revoluciona Tu Negocio', 'Empodera Tu Empresa', 'Escala con Confianza']
    },
    zh: {
      title: 'ERP系统 - 阿波罗网络',
      'company-name': '阿波罗网络',
      'hero-subtitle': '面向互联未来的创新科技解决方案',
      'hero-cta': '联系我们',
      'company-title': '关于我们',
      'company-description': '我们是一家综合性的科技公司，致力于企业级解决方案的研发，涵盖ERP系统、人工智能、视频检索、大数据分析等多个领域，助力企业实现数字化与智能化转型。',
      'company-feature1-title': '技术多元化',
      'company-feature1-description': '覆盖企业管理、AI智能分析、视频图像处理等多个技术方向。',
      'company-feature2-title': '专业能力',
      'company-feature2-description': '拥有多领域专家团队，为客户量身打造高质量的解决方案。',
      'company-feature3-title': '持续支持',
      'company-feature3-description': '提供从方案设计到部署维护的一站式技术服务。',
      'products-title': '我们的核心技术服务',
      'product1-title': 'ERP系统',
      'product1-description': '覆盖财务、库存、人力资源等模块，提升企业管理效率。',
      'product2-title': '人工智能平台',
      'product2-description': '提供AI建模、数据分析、智能推荐等能力，驱动企业决策。',
      'product3-title': '视频智能检索',
      'product3-description': '基于图像识别和深度学习技术，实现海量视频内容的精准搜索。',
      'product4-title': '定制化开发',
      'product4-description': '根据客户需求打造专属软件系统，灵活适配各类业务流程。',
      'products2-title': '我们的产品',
      'product5-title': 'Aicoffi ERP',
      'product5-description': '综合企业资源管理系统，整合财务、库存、采购和人力资源模块，提升运营效率和决策精准性。',
      'product6-title': 'Aicoffi TPV',
      'product6-description': '高效的销售终端系统，支持快速交易处理、库存同步和销售分析，适用于零售和餐饮行业。',
      'product7-title': 'Aicoffi App',
      'product7-description': '利用 AI 技术智能扫描发票，自动入账，简化财务流程，显著节省时间。',
      'contact-title': '联系我们',
      'contact-email': '电子邮箱: info@apolo-net.com',
      'contact-phone': '电话: +34 123 456 789',
      'contact-whatsapp': 'WhatsApp: +34 987 654 321',
      'contact-wechat': '微信: ApoloNet_Official',
      'footer-copyright': '© 2025 阿波罗网络。保留所有权利。',
      'nav-about': '关于我们',
      'nav-technology': '我们的技术',
      'nav-products': '我们的产品',
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

  // Modal logic for Contact Us
  const contactModal = document.getElementById('contact-modal');
  const contactBtn = document.getElementById('contact-btn');
  const closeContactModalBtn = document.getElementById('close-contact-modal');

  contactBtn.addEventListener('click', () => {
    contactModal.classList.remove('hidden');
  });

  closeContactModalBtn.addEventListener('click', () => {
    contactModal.classList.add('hidden');
  });

  // Close modal when clicking outside
  contactModal.addEventListener('click', (e) => {
    if (e.target === contactModal) {
      contactModal.classList.add('hidden');
    }
  });
});