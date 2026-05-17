(() => {
  const LOGO_SRC = './Becoming Her Authority Official Logo.png';

  const zoneSelectors = {
    method: '#method-page',
    testimonials: '#trust, #stories',
    faith: '#faith',
    workbook: '#featured-workbook'
  };

  Object.entries(zoneSelectors).forEach(([zone, selector]) => {
    document.querySelectorAll(selector).forEach((section) => {
      section.classList.add('glow-zone');
      section.dataset.glowZone = zone;

      if (!section.querySelector('.section-watermark')) {
        const watermark = document.createElement('div');
        watermark.className = 'section-watermark';
        watermark.setAttribute('aria-hidden', 'true');

        const seal = document.createElement('img');
        seal.className = 'section-watermark-seal';
        seal.src = LOGO_SRC;
        seal.alt = '';
        seal.decoding = 'async';

        watermark.appendChild(seal);
        section.appendChild(watermark);
      }
    });
  });
})();
