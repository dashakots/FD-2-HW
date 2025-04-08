'use strict';

class Accordion {
    constructor(selector, options = { single: false }) {
        this.wrapper = document.querySelector(selector);
        this.sections = this.wrapper.querySelectorAll('.accordion-section');
        this.single = options.single;

        this.accordionCreate();
    }

    accordionCreate() {
        this.sections.forEach(section => {
            const header = section.querySelector('.accordion-header');
            if (header) {
                header.addEventListener('click', () => {
                    if (this.single) {
                        this.closeSections();
                    }
                    section.classList.toggle('opened');
                });
            }
        });
    }

    closeSections() {
        this.sections.forEach(section => {
            section.classList.remove('opened');
        });
    }
}


const newAccordion = new Accordion('.accordion-wrapper', { single: true });