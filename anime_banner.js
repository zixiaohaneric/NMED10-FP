class Slider {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        this.slides = Array.from(this.container.children);
        this.currentIndex = 0;
        this.interval = 3000; 
        this.init();
    }

    init() {
        
        this.preloadImages();
    
        this.startAutoPlay();
    }

    preloadImages() {
        this.slides.forEach(slide => {
            const img = new Image();
            img.src = slide.querySelector('img').src;
        });
    }

    startAutoPlay() {
        setInterval(() => this.nextSlide(), this.interval);
    }

    nextSlide() {
        const currentSlide = this.slides[this.currentIndex];
        const nextIndex = (this.currentIndex + 1) % this.slides.length;
        const nextSlide = this.slides[nextIndex];

        
        currentSlide.classList.remove('active');

        
        const transitionEndHandler = () => {
            nextSlide.classList.add('active');
            currentSlide.removeEventListener('transitionend', transitionEndHandler);
            this.currentIndex = nextIndex;
        };

        currentSlide.addEventListener('transitionend', transitionEndHandler);
    }
}


new Slider('.slider-container');
