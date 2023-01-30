document.documentElement.classList.add('js-enabled');

const slider = document.querySelector('.items');
let isDown = false;
let FirstMouseDownPosition;
let pixelsAlreadyScrolled

slider.addEventListener('mousedown', (e)=>{
  isDown = true;
  FirstMouseDownPosition = e.pageX;
  pixelsAlreadyScrolled = slider.scrollLeft;
});

slider.addEventListener('mouseup', ()=>{
  isDown = false;

});

slider.addEventListener('mouseleave', ()=>{
  isDown = false;

});

slider.addEventListener('mousemove', (e)=>{
  if(!isDown) return;
  const LastMouseDownPosition = e.pageX;
  const pixelsTravelled = LastMouseDownPosition - FirstMouseDownPosition;
  slider.scrollLeft = pixelsAlreadyScrolled - pixelsTravelled;
});
