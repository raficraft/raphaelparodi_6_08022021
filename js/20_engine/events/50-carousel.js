let openCarousel = (target)=>{

    factory.injectCarousel()

    let item = parseInt(target.dataset.item);   

    document.querySelector('.slider').setAttribute('aria-hidden', false);                    
    document.querySelector('#main').setAttribute('aria-hidden', true);
    document.querySelector('.sliderBox__close').focus()
    hiddenScrollBar()  

    new Carousel(document.querySelector('.carousel__container'),{
        slidesToScroll : 1,
        slidesVisible : 1,
        currentItem : item,
        loog : true
    })
   
}