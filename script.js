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
      'company-feature1-description-detail': 'We provide solutions across enterprise management, AI analytics, video processing, and more. Our technology stack includes advanced ERP systems, deep learning-based video retrieval, and customized data analytics platforms to drive comprehensive digital transformation.',
      'company-feature2-title': 'Reliability',
      'company-feature2-description': 'Trusted by businesses worldwide for consistent performance.',
      'company-feature2-description-detail': 'Our expert team, composed of professionals in software development, data analytics, AI, and enterprise management, delivers high-quality, tailored solutions to help businesses stand out in competitive markets.',
      'company-feature3-title': 'Support',
      'company-feature3-description': '24/7 customer support to ensure your success.',
      'company-feature3-description-detail': 'We offer end-to-end technical support, from solution design to deployment and maintenance. Our team ensures system stability and maximizes business value through 24/7 service, regular optimizations, and rapid response mechanisms.',
      'products-title': 'Our Core Technology Services',
      'product1-title': 'ERP System',
      'product1-description': 'Covers finance, inventory, HR, and more to enhance enterprise management efficiency.',
      'product1-description-detail': 'Our ERP system integrates financial management, inventory control, human resources, and supply chain optimization, providing real-time data insights and process automation to boost management efficiency and decision-making.',
      'product2-title': 'AI Platform',
      'product2-description': 'Provides AI modeling, data analytics, and intelligent recommendations to drive business decisions.',
      'product2-description-detail': 'The AI platform offers advanced modeling tools, data analytics, and intelligent recommendation systems, widely applied in market forecasting, customer behavior analysis, and operational optimization, enabling data-driven decisions.',
      'product3-title': 'Intelligent Video Retrieval',
      'product3-description': 'Leverages image recognition and deep learning for precise search of massive video content.',
      'product3-description-detail': 'Using image recognition and deep learning, our intelligent video retrieval system extracts targeted information from vast video content, ideal for security surveillance, content management, and media analysis.',
      'product4-title': 'Custom Development',
      'product4-description': 'Builds tailored software systems to flexibly adapt to various business processes.',
      'product4-description-detail': 'We develop customized software systems based on unique client needs, ensuring flexible adaptation to various business processes and seamless alignment with enterprise strategies to enhance efficiency and competitiveness.',
      'products2-title': 'Our Products',
      'product5-title': 'Aicoffi ERP',
      'product5-description': 'A comprehensive ERP system integrating finance, inventory, procurement, and HR modules to boost operational efficiency and decision accuracy.',
      'product5-description-detail': 'Aicoffi ERP is a comprehensive enterprise resource management system that integrates finance, inventory, procurement, and HR modules, offering real-time data analysis and automated workflows to significantly enhance operational efficiency and decision accuracy.',
      'product6-title': 'Aicoffi TPV',
      'product6-description': 'An efficient Point of Sale system supporting fast transaction processing, inventory synchronization, and sales analytics, ideal for retail and hospitality.',
      'product6-description-detail': 'Aicoffi TPV is an efficient Point of Sale system designed for retail and hospitality, supporting fast transaction processing, real-time inventory synchronization, and detailed sales analytics to improve customer experience and business efficiency.',
      'product7-title': 'Aicoffi App',
      'product7-description': 'Leverages AI technology to intelligently scan invoices, automate accounting, and significantly save time.',
      'product7-description-detail': 'Aicoffi App uses AI technology for intelligent invoice scanning and automated accounting, streamlining financial processes and significantly reducing manual effort to enhance enterprise financial management efficiency.',
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
      'company-feature1-description-detail': 'Ofrecemos soluciones en gestión empresarial, análisis de inteligencia artificial, procesamiento de video y más. Nuestra pila tecnológica incluye sistemas ERP avanzados, recuperación de video basada en aprendizaje profundo y plataformas de análisis de datos personalizadas para impulsar una transformación digital integral.',
      'company-feature2-title': 'Confiabilidad',
      'company-feature2-description': 'Confiado por empresas de todo el mundo por su rendimiento consistente.',
      'company-feature2-description-detail': 'Nuestro equipo de expertos, compuesto por profesionales en desarrollo de software, análisis de datos, inteligencia artificial y gestión empresarial, ofrece soluciones personalizadas de alta calidad para ayudar a las empresas a destacarse en mercados competitivos.',
      'company-feature3-title': 'Soporte',
      'company-feature3-description': 'Soporte al cliente 24/7 para garantizar tu éxito.',
      'company-feature3-description-detail': 'Ofrecemos soporte técnico integral, desde el diseño de soluciones hasta la implementación y el mantenimiento. Nuestro equipo asegura la estabilidad del sistema y maximiza el valor del negocio mediante un servicio 24/7, optimizaciones regulares y mecanismos de respuesta rápida.',
      'products-title': 'Nuestros Servicios Tecnológicos Principales',
      'product1-title': 'Sistema ERP',
      'product1-description': 'Abarca finanzas, inventario, recursos humanos y más para mejorar la eficiencia de la gestión empresarial.',
      'product1-description-detail': 'Nuestro sistema ERP integra la gestión financiera, el control de inventario, la gestión de recursos humanos y la optimización de la cadena de suministro, proporcionando información de datos en tiempo real y automatización de procesos para mejorar la eficiencia de gestión y la toma de decisiones.',
      'product2-title': 'Plataforma de Inteligencia Artificial',
      'product2-description': 'Ofrece modelado de IA, análisis de datos y recomendaciones inteligentes para impulsar decisiones empresariales.',
      'product2-description-detail': 'La plataforma de inteligencia artificial ofrece herramientas avanzadas de modelado de IA, análisis de datos y sistemas de recomendación inteligentes, ampliamente utilizados en pronósticos de mercado, análisis de comportamiento del cliente y optimización operativa, permitiendo decisiones basadas en datos.',
      'product3-title': 'Recuperación Inteligente de Video',
      'product3-description': 'Utiliza reconocimiento de imágenes y aprendizaje profundo para búsquedas precisas de contenido de video masivo.',
      'product3-description-detail': 'Utilizando reconocimiento de imágenes y aprendizaje profundo, nuestro sistema de recuperación inteligente de video extrae información específica de grandes volúmenes de contenido de video, ideal para vigilancia de seguridad, gestión de contenido y análisis de medios.',
      'product4-title': 'Desarrollo Personalizado',
      'product4-description': 'Crea sistemas de software a medida para adaptarse de manera flexible a diversos procesos empresariales.',
      'product4-description-detail': 'Desarrollamos sistemas de software personalizados basados en las necesidades únicas de los clientes, asegurando una adaptación flexible a diversos procesos empresariales y una alineación perfecta con las estrategias empresariales para mejorar la eficiencia y la competitividad.',
      'products2-title': 'Nuestros Productos',
      'product5-title': 'Aicoffi ERP',
      'product5-description': 'Un sistema ERP integral que integra módulos de finanzas, inventario, compras y recursos humanos para aumentar la eficiencia operativa y la precisión en la toma de decisiones.',
      'product5-description-detail': 'Aicoffi ERP es un sistema integral de gestión de recursos empresariales que integra módulos de finanzas, inventario, compras y recursos humanos, ofreciendo análisis de datos en tiempo real y flujos de trabajo automatizados para mejorar significativamente la eficiencia operativa y la precisión en la toma de decisiones.',
      'product6-title': 'Aicoffi TPV',
      'product6-description': 'Un sistema TPV eficiente que soporta procesamiento rápido de transacciones, sincronización de inventario y análisis de ventas, ideal para comercio minorista y hostelería.',
      'product6-description-detail': 'Aicoffi TPV es un sistema de punto de venta eficiente diseñado para comercio minorista y hostelería, que soporta procesamiento rápido de transacciones, sincronización de inventario en tiempo real y análisis de ventas detallados para mejorar la experiencia del cliente y la eficiencia del negocio.',
      'product7-title': 'Aicoffi App',
      'product7-description': 'Utiliza tecnología de IA para escanear facturas de manera inteligente, automatizar la contabilidad y ahorrar tiempo significativamente.',
      'product7-description-detail': 'Aicoffi App utiliza tecnología de IA para el escaneo inteligente de facturas y la automatización de la contabilidad, simplificando los procesos financieros y reduciendo significativamente el esfuerzo manual para mejorar la eficiencia de la gestión financiera empresarial.',
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
      'company-feature1-description-detail': '我们提供覆盖企业管理、AI智能分析、视频图像处理等多个技术领域的解决方案。我们的技术栈包括先进的ERP系统、基于深度学习的视频检索技术以及定制化的大数据分析平台，助力企业实现全面数字化转型。',
      'company-feature2-title': '专业能力',
      'company-feature2-description': '拥有多领域专家团队，为客户量身打造高质量的解决方案。',
      'company-feature2-description-detail': '我们的专家团队由多领域专业人士组成，涵盖软件开发、数据分析、人工智能和企业管理。我们通过深入了解客户需求，提供高质量、定制化的解决方案，助力企业在竞争中脱颖而出。',
      'company-feature3-title': '持续支持',
      'company-feature3-description': '提供从方案设计到部署维护的一站式技术服务。',
      'company-feature3-description-detail': '我们提供从方案设计到部署维护的全程技术支持。我们的团队通过7x24小时服务、定期系统优化和快速响应机制，确保客户系统稳定运行，最大化业务价值。',
      'products-title': '我们的核心技术服务',
      'product1-title': 'ERP系统',
      'product1-description': '覆盖财务、库存、人力资源等模块，提升企业管理效率。',
      'product1-description-detail': '我们的ERP系统整合财务管理、库存控制、人力资源管理和供应链优化等功能模块，提供实时数据洞察和流程自动化，帮助企业提升管理效率和决策能力。',
      'product2-title': '人工智能平台',
      'product2-description': '提供AI建模、数据分析、智能推荐等能力，驱动企业决策。',
      'product2-description-detail': '人工智能平台提供先进的AI建模工具、数据分析功能和智能推荐系统，广泛应用于市场预测、客户行为分析和运营优化，帮助企业实现数据驱动的决策。',
      'product3-title': '视频智能检索',
      'product3-description': '基于图像识别和深度学习技术，实现海量视频内容的精准搜索。',
      'product3-description-detail': '利用图像识别和深度学习技术，我们的视频智能检索系统能够从海量视频内容中精准提取目标信息，适用于安防监控、内容管理和媒体分析等场景。',
      'product4-title': '定制化开发',
      'product4-description': '根据客户需求打造专属软件系统，灵活适配各类业务流程。',
      'product4-description-detail': '我们根据客户独特需求，开发定制化软件系统，灵活适配各种业务流程，确保系统与企业战略无缝衔接，提升运营效率和市场竞争力。',
      'products2-title': '我们的产品',
      'product5-title': 'Aicoffi ERP',
      'product5-description': '综合企业资源管理系统，整合财务、库存、采购和人力资源模块，提升运营效率和决策精准性。',
      'product5-description-detail': 'Aicoffi ERP 是一个综合性企业资源管理系统，整合财务、库存、采购和人力资源模块，提供实时数据分析和自动化流程，显著提升运营效率和决策精准性。',
      'product6-title': 'Aicoffi TPV',
      'product6-description': '高效的销售终端系统，支持快速交易处理、库存同步和销售分析，适用于零售和餐饮行业。',
      'product6-description-detail': 'Aicoffi TPV 是一个高效的销售终端系统，支持快速交易处理、实时库存同步和详细销售分析，专为零售和餐饮行业设计，提升客户体验和业务效率。',
      'product7-title': 'Aicoffi App',
      'product7-description': '利用 AI 技术智能扫描发票，自动入账，简化财务流程，显著节省时间。',
      'product7-description-detail': 'Aicoffi App 利用 AI 技术实现智能发票扫描和自动会计处理，简化财务流程，显著减少手动操作时间，提升企业财务管理效率。',
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
  const closeContactModalBtn = document.getElementById('contact-modal');
  const contactModalContent = contactModal.querySelector('.contact-detail-content');

  contactBtn.addEventListener('click', () => {
    contactModal.classList.remove('hidden');
    contactModalContent.classList.remove('closing');
    contactModalContent.classList.add('open');
    document.body.classList.add('blurred');
  });

  function closeContactModal() {
    contactModalContent.classList.remove('open');
    contactModalContent.classList.add('closing');
    setTimeout(() => {
      contactModal.classList.add('hidden');
      document.body.classList.remove('blurred');
      contactModalContent.classList.remove('closing');
    }, 500);
  }

  closeContactModalBtn.addEventListener('click', closeContactModal);

  contactModal.addEventListener('click', (e) => {
    if (e.target === contactModal) {
      closeContactModal();
    }
  });

  // Modal logic for Tech Diversity
  const techCard = document.getElementById('tech-diversity-card');
  const techModal = document.getElementById('tech-detail-modal');
  const closeTechModalBtn = document.getElementById('close-tech-modal');
  const techModalContent = techModal.querySelector('.tech-detail-content');

  techCard.addEventListener('click', () => {
    techModal.classList.remove('hidden');
    techModalContent.classList.remove('closing');
    techModalContent.classList.add('open');
    document.body.classList.add('blurred');
  });

  function closeTechModal() {
    techModalContent.classList.remove('open');
    techModalContent.classList.add('closing');
    setTimeout(() => {
      techModal.classList.add('hidden');
      document.body.classList.remove('blurred');
      techModalContent.classList.remove('closing');
    }, 500);
  }

  closeTechModalBtn.addEventListener('click', closeTechModal);

  techModal.addEventListener('click', (e) => {
    if (e.target === techModal) {
      closeTechModal();
    }
  });

  // Modal logic for Professional Capability
  const professionalCapabilityCard = document.getElementById('professional-capability-card');
  const professionalCapabilityModal = document.getElementById('professional-capability-modal');
  const closeProfessionalCapabilityModalBtn = document.getElementById('close-professional-capability-modal');
  const professionalCapabilityModalContent = professionalCapabilityModal.querySelector('.modal-content');

  professionalCapabilityCard.addEventListener('click', () => {
    professionalCapabilityModal.classList.remove('hidden');
    professionalCapabilityModalContent.classList.remove('closing');
    professionalCapabilityModalContent.classList.add('open');
    document.body.classList.add('blurred');
  });

  function closeProfessionalCapabilityModal() {
    professionalCapabilityModalContent.classList.remove('open');
    professionalCapabilityModalContent.classList.add('closing');
    setTimeout(() => {
      professionalCapabilityModal.classList.add('hidden');
      document.body.classList.remove('blurred');
      professionalCapabilityModalContent.classList.remove('closing');
    }, 500);
  }

  closeProfessionalCapabilityModalBtn.addEventListener('click', closeProfessionalCapabilityModal);

  professionalCapabilityModal.addEventListener('click', (e) => {
    if (e.target === professionalCapabilityModal) {
      closeProfessionalCapabilityModal();
    }
  });

  // Modal logic for Continuous Support
  const continuousSupportCard = document.getElementById('continuous-support-card');
  const continuousSupportModal = document.getElementById('continuous-support-modal');
  const closeContinuousSupportModalBtn = document.getElementById('close-continuous-support-modal');
  const continuousSupportModalContent = continuousSupportModal.querySelector('.modal-content');

  continuousSupportCard.addEventListener('click', () => {
    continuousSupportModal.classList.remove('hidden');
    continuousSupportModalContent.classList.remove('closing');
    continuousSupportModalContent.classList.add('open');
    document.body.classList.add('blurred');
  });

  function closeContinuousSupportModal() {
    continuousSupportModalContent.classList.remove('open');
    continuousSupportModalContent.classList.add('closing');
    setTimeout(() => {
      continuousSupportModal.classList.add('hidden');
      document.body.classList.remove('blurred');
      continuousSupportModalContent.classList.remove('closing');
    }, 500);
  }

  closeContinuousSupportModalBtn.addEventListener('click', closeContinuousSupportModal);

  continuousSupportModal.addEventListener('click', (e) => {
    if (e.target === continuousSupportModal) {
      closeContinuousSupportModal();
    }
  });

  // Modal logic for ERP System
  const erpSystemCard = document.getElementById('erp-system-card');
  const erpSystemModal = document.getElementById('erp-system-modal');
  const closeErpSystemModalBtn = document.getElementById('close-erp-system-modal');
  const erpSystemModalContent = erpSystemModal.querySelector('.modal-content');

  erpSystemCard.addEventListener('click', () => {
    erpSystemModal.classList.remove('hidden');
    erpSystemModalContent.classList.remove('closing');
    erpSystemModalContent.classList.add('open');
    document.body.classList.add('blurred');
  });

  function closeErpSystemModal() {
    erpSystemModalContent.classList.remove('open');
    erpSystemModalContent.classList.add('closing');
    setTimeout(() => {
      erpSystemModal.classList.add('hidden');
      document.body.classList.remove('blurred');
      erpSystemModalContent.classList.remove('closing');
    }, 500);
  }

  closeErpSystemModalBtn.addEventListener('click', closeErpSystemModal);

  erpSystemModal.addEventListener('click', (e) => {
    if (e.target === erpSystemModal) {
      closeErpSystemModal();
    }
  });

  // Modal logic for AI Platform
  const aiPlatformCard = document.getElementById('ai-platform-card');
  const aiPlatformModal = document.getElementById('ai-platform-modal');
  const closeAiPlatformModalBtn = document.getElementById('close-ai-platform-modal');
  const aiPlatformModalContent = aiPlatformModal.querySelector('.modal-content');

  aiPlatformCard.addEventListener('click', () => {
    aiPlatformModal.classList.remove('hidden');
    aiPlatformModalContent.classList.remove('closing');
    aiPlatformModalContent.classList.add('open');
    document.body.classList.add('blurred');
  });

  function closeAiPlatformModal() {
    aiPlatformModalContent.classList.remove('open');
    aiPlatformModalContent.classList.add('closing');
    setTimeout(() => {
      aiPlatformModal.classList.add('hidden');
      document.body.classList.remove('blurred');
      aiPlatformModalContent.classList.remove('closing');
    }, 500);
  }

  closeAiPlatformModalBtn.addEventListener('click', closeAiPlatformModal);

  aiPlatformModal.addEventListener('click', (e) => {
    if (e.target === aiPlatformModal) {
      closeAiPlatformModal();
    }
  });

  // Modal logic for Video Retrieval
  const videoRetrievalCard = document.getElementById('video-retrieval-card');
  const videoRetrievalModal = document.getElementById('video-retrieval-modal');
  const closeVideoRetrievalModalBtn = document.getElementById('close-video-retrieval-modal');
  const videoRetrievalModalContent = videoRetrievalModal.querySelector('.modal-content');

  videoRetrievalCard.addEventListener('click', () => {
    videoRetrievalModal.classList.remove('hidden');
    videoRetrievalModalContent.classList.remove('closing');
    videoRetrievalModalContent.classList.add('open');
    document.body.classList.add('blurred');
  });

  function closeVideoRetrievalModal() {
    videoRetrievalModalContent.classList.remove('open');
    videoRetrievalModalContent.classList.add('closing');
    setTimeout(() => {
      videoRetrievalModal.classList.add('hidden');
      document.body.classList.remove('blurred');
      videoRetrievalModalContent.classList.remove('closing');
    }, 500);
  }

  closeVideoRetrievalModalBtn.addEventListener('click', closeVideoRetrievalModal);

  videoRetrievalModal.addEventListener('click', (e) => {
    if (e.target === videoRetrievalModal) {
      closeVideoRetrievalModal();
    }
  });

  // Modal logic for Custom Development
  const customDevCard = document.getElementById('custom-dev-card');
  const customDevModal = document.getElementById('custom-dev-modal');
  const closeCustomDevModalBtn = document.getElementById('close-custom-dev-modal');
  const customDevModalContent = customDevModal.querySelector('.modal-content');

  customDevCard.addEventListener('click', () => {
    customDevModal.classList.remove('hidden');
    customDevModalContent.classList.remove('closing');
    customDevModalContent.classList.add('open');
    document.body.classList.add('blurred');
  });

  function closeCustomDevModal() {
    customDevModalContent.classList.remove('open');
    customDevModalContent.classList.add('closing');
    setTimeout(() => {
      customDevModal.classList.add('hidden');
      document.body.classList.remove('blurred');
      customDevModalContent.classList.remove('closing');
    }, 500);
  }

  closeCustomDevModalBtn.addEventListener('click', closeCustomDevModal);

  customDevModal.addEventListener('click', (e) => {
    if (e.target === customDevModal) {
      closeCustomDevModal();
    }
  });

  // Modal logic for Aicoffi ERP
  const aicoffiErpCard = document.getElementById('aicoffi-erp-card');
  const aicoffiErpModal = document.getElementById('aicoffi-erp-modal');
  const closeAicoffiErpModalBtn = document.getElementById('close-aicoffi-erp-modal');
  const aicoffiErpModalContent = aicoffiErpModal.querySelector('.modal-content');

  aicoffiErpCard.addEventListener('click', () => {
    aicoffiErpModal.classList.remove('hidden');
    aicoffiErpModalContent.classList.remove('closing');
    aicoffiErpModalContent.classList.add('open');
    document.body.classList.add('blurred');
  });

  function closeAicoffiErpModal() {
    aicoffiErpModalContent.classList.remove('open');
    aicoffiErpModalContent.classList.add('closing');
    setTimeout(() => {
      aicoffiErpModal.classList.add('hidden');
      document.body.classList.remove('blurred');
      aicoffiErpModalContent.classList.remove('closing');
    }, 500);
  }

  closeAicoffiErpModalBtn.addEventListener('click', closeAicoffiErpModal);

  aicoffiErpModal.addEventListener('click', (e) => {
    if (e.target === aicoffiErpModal) {
      closeAicoffiErpModal();
    }
  });

  // Modal logic for Aicoffi TPV
  const aicoffiTpvCard = document.getElementById('aicoffi-tpv-card');
  const aicoffiTpvModal = document.getElementById('aicoffi-tpv-modal');
  const closeAicoffiTpvModalBtn = document.getElementById('close-aicoffi-tpv-modal');
  const aicoffiTpvModalContent = aicoffiTpvModal.querySelector('.modal-content');

  aicoffiTpvCard.addEventListener('click', () => {
    aicoffiTpvModal.classList.remove('hidden');
    aicoffiTpvModalContent.classList.remove('closing');
    aicoffiTpvModalContent.classList.add('open');
    document.body.classList.add('blurred');
  });

  function closeAicoffiTpvModal() {
    aicoffiTpvModalContent.classList.remove('open');
    aicoffiTpvModalContent.classList.add('closing');
    setTimeout(() => {
      aicoffiTpvModal.classList.add('hidden');
      document.body.classList.remove('blurred');
      aicoffiTpvModalContent.classList.remove('closing');
    }, 500);
  }

  closeAicoffiTpvModalBtn.addEventListener('click', closeAicoffiTpvModal);

  aicoffiTpvModal.addEventListener('click', (e) => {
    if (e.target === aicoffiTpvModal) {
      closeAicoffiTpvModal();
    }
  });

  // Modal logic for Aicoffi App
  const aicoffiAppCard = document.getElementById('aicoffi-app-card');
  const aicoffiAppModal = document.getElementById('aicoffi-app-modal');
  const closeAicoffiAppModalBtn = document.getElementById('close-aicoffi-app-modal');
  const aicoffiAppModalContent = aicoffiAppModal.querySelector('.modal-content');

  aicoffiAppCard.addEventListener('click', () => {
    aicoffiAppModal.classList.remove('hidden');
    aicoffiAppModalContent.classList.remove('closing');
    aicoffiAppModalContent.classList.add('open');
    document.body.classList.add('blurred');
  });

  function closeAicoffiAppModal() {
    aicoffiAppModalContent.classList.remove('open');
    aicoffiAppModalContent.classList.add('closing');
    setTimeout(() => {
      aicoffiAppModal.classList.add('hidden');
      document.body.classList.remove('blurred');
      aicoffiAppModalContent.classList.remove('closing');
    }, 500);
  }

  closeAicoffiAppModalBtn.addEventListener('click', closeAicoffiAppModal);

  aicoffiAppModal.addEventListener('click', (e) => {
    if (e.target === aicoffiAppModal) {
      closeAicoffiAppModal();
    }
  });
});