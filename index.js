
       document.addEventListener('DOMContentLoaded',()=>{

        
    // const lazyImages = document.querySelectorAll('.lazy');

    // const loadImage = (image) => {
    //   image.setAttribute('src', image.getAttribute('data-src'));
  
    //   image.classList.remove('lazy');
    // };
  
    // // Define a function to handle the intersection observer
    // const handleIntersection = (entries, observer) => {
    //   entries.forEach(entry => {
    //     // If the image is in the viewport, load it
    //     if (entry.isIntersecting) {
    //       loadImage(entry.target);
    //       observer.unobserve(entry.target);
    //     }
    //   });
    // };
  
    // // Create an intersection observer
    // const observer = new IntersectionObserver(handleIntersection, {
    //   rootMargin: '50px',
    //   threshold: 0.5
    // });
  
    // // Observe each image with the "lazy" class
    // lazyImages.forEach(image => {
    //   observer.observe(image);
    // });
     
        let mediaQuery = window.matchMedia('(max-width: 924px)');

        let body=document.body;
    let dot_c=document.querySelector('.dot_container');
    let nav_i=document.querySelector('.nav_items');
    let cross=document.querySelector('.cross');
    let dot=document.querySelector('.dot');
        // navbar
        

        nav_i.classList.add('none')
        cross.style.display="none"
        let i=0;
        dot_c.addEventListener('click',()=>{
            if(nav_i.classList.contains('none'))
            {
                nav_i.classList.remove('none')
                body.style.overflow="hidden"
                cross.style.display="block"
                dot.style.display="none"
            }
            else{
                
                nav_i.classList.add('none')
                body.style.overflow="visible"
                dot.style.display="block"
                cross.style.display="none"
                
                
            }
        })
        window.addEventListener('resize',()=>{
            if(mediaQuery.matches){
                nav_i.classList.add('none')
                body.style.overflow="visible"
                dot.style.display="block"
                cross.style.display="none"
            }
            else{
            nav_i.classList.remove('none')
            body.style.overflow="hidden"
                cross.style.display="block"
                dot.style.display="none"
        }
    })
    if(mediaQuery.matches){
        nav_i.classList.add('none')
    }
    else{
    nav_i.classList.remove('none')
}     



        




        // carousel
        let carousel_container=document.querySelector('.carousel_container');
        let carousel=carousel_container.querySelector('.carousel');
        let slideWidth=carousel_container.clientWidth/3;
        let slideIndex=0;

        const firstSlide = carousel.querySelector('.carousel-item');
        const clonedFirstSlide = firstSlide.cloneNode(true);
        
        const lastSlide = carousel.lastElementChild;
        const clonedLastSlide = lastSlide.cloneNode(true);
        // carousel.insertBefore(clonedLastSlide, firstSlide);
        // carousel.appendChild(clonedFirstSlide);
        
        const setActiveSlide = () => {
            const allSlides = carousel.querySelectorAll('.carousel-item');
            allSlides.forEach((slide) => {
                slide.classList.remove('active');
            });
            allSlides[slideIndex].classList.add('active');
        };

    setActiveSlide();

    const slides = document.querySelectorAll(".carousel-item");
    slides.forEach((slide) => {
    slide.addEventListener("click", () => {
        slides.forEach((s) => s.classList.remove("active"));
        slide.classList.add("active");
    });
    });

    // Add event listeners to the arrow buttons
    carousel_container.querySelector('.prev-btn').addEventListener('click', () => {
    if (carousel.scrollLeft > 0) {
        slideIndex = Math.max(slideIndex - 1, 0);
        carousel.scrollLeft -= slideWidth*2/3;
        setActiveSlide();
    } else {
        slideIndex = carousel.querySelectorAll('.carousel-item').length - 1;
        carousel.scrollLeft = carousel.scrollWidth - carousel.clientWidth;
        setActiveSlide();

        // Remove the cloned first slide
        const clonedFirstSlide = carousel.querySelector('.carousel-item:first-child');
        if (slideIndex === 1 && clonedFirstSlide) {
            clonedFirstSlide.parentNode.removeChild(clonedFirstSlide);
            slideIndex = 2;
    }}
    });

    carousel_container.querySelector('.next-btn').addEventListener('click', () => {
    if (carousel.scrollLeft < carousel.scrollWidth - carousel.clientWidth) {
        slideIndex = Math.min(slideIndex + 1, carousel.querySelectorAll('.carousel-item').length - 1);
        carousel.scrollLeft += slideWidth*3/2;
        setActiveSlide();
    } else{
        // If we're at the end, scroll to the cloned first slide
        slideIndex = 1;
        carousel.scrollLeft = 0;
        setActiveSlide();

        // Remove the cloned last slide
        const clonedLastSlide = carousel.querySelector('.carousel-item:last-child');
        if (slideIndex === carousel.querySelectorAll('.carousel-item').length - 2 && clonedLastSlide) {
            clonedLastSlide.parentNode.removeChild(clonedLastSlide);
            slideIndex = carousel.querySelectorAll('.carousel-item').length - 3;
        }
        }
    });
       })



    //    lazy loading
