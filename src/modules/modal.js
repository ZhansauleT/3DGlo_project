import { animate } from './helpers';

const modal = () => {
  const modal = document.querySelector('.popup');
  const modalWindow = document.querySelector('.popup-content');
  const buttons = document.querySelectorAll('.popup-btn');
  const innerWidth = window.innerWidth;

    
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'block';
      
      console.log(innerWidth);

      if(innerWidth > 768){
        animate({
          duration: 400,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            modalWindow.style.top = progress * 25 + '%';
            console.log(progress);
          }
        });
      }
    });
  });

  modal.addEventListener('click', (e) => {

    if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')){
      modal.style.display = 'none';
    }
  });

};

export default modal;