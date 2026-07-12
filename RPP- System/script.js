script.js
const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.15

});

const hiddenElements = document.querySelectorAll("section,.card,.analysis-card,.timeline-item,.process-card,.target-card,.faq-item,.philosophy-card");

hiddenElements.forEach((el)=>observer.observe(el));