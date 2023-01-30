


const dragAndScroll = {
  constInit(){
    this.slider = document.querySelector('.items')
    this.firstPosition;
    this.isDown = false;
    this.pixelsAlreadyScrolled;
  },

  addEventListener(){
    this.slider.addEventListener('mousedown',(e)=>{
      this.isDown = true;
      this.firstPosition = e.pageX;
      this.pixelsAlreadyScrolled = this.slider.scrollLeft;
    });

    this.slider.addEventListener('mouseleave',()=>{
      this.isDown = false;
    });

    this.slider.addEventListener('mouseup',()=>{
      this.isDown = false;
    });

    this.slider.addEventListener('mousemove',(e)=>{
      if(!this.isDown) return;
      e.preventDefault();
      const lastPosition = e.pageX;
      const pixelsTravelled = lastPosition - this.firstPosition;
      this.slider.scrollLeft = this.pixelsAlreadyScrolled - pixelsTravelled;
    });
  },

  appInit(){
    document.documentElement.classList.add('js-enabled');
    this.constInit();
    this.addEventListener();
  }
}

dragAndScroll.appInit();

