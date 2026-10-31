/**
 * Loads and decorates the hero block.
 * @param {Element} block The hero block element
 */
export default function decorate(block) {
  const row = block.firstElementChild;
  if (!row) return;

  row.classList.add('hero-row');

  const cols = [...row.children];
  cols.forEach((col, index) => {
    const hasPicture = col.querySelector('picture');
    const hasHeading = col.querySelector('h1, h2, h3, h4, h5, h6');

    if (hasPicture && !hasHeading && (cols.length === 1 || index > 0)) {
      col.classList.add('hero-image');
    } else {
      col.classList.add('hero-content');
    }
  });

  const contentCol = row.querySelector('.hero-content');
  if (contentCol) {
    const cta = contentCol.querySelector('a[href]');
    if (cta) {
      cta.classList.add('hero-cta');
      if (!cta.classList.contains('button')) {
        cta.classList.add('button', 'primary');
      }
    }
  }
}

