/* VARIABLES ============================================================ */
const accordionTrigger = document.querySelectorAll('.accordion__trigger');


/* FUNCTIONS ========================================================== */
const getAccordion = () => {
  accordionTrigger.forEach((item) => {
    item.addEventListener('click', () => {
      item.parentNode.classList.toggle('accordion__item_active')
    });
  });
};


/* ACTION ============================================================= */
getAccordion();
