/*  */

const accordionTrigger = document.querySelectorAll('.accordion__trigger');

accordionTrigger.forEach((item) => {
  item.addEventListener('click', () => {
    item.parentNode.classList.toggle('accordion__item_active')
  });
});
