const modal = () => {
  const modal = document.querySelector('.popup');
  const modalWindow = document.querySelector('.popup-content');
  const buttons = document.querySelectorAll('.popup-btn');
  const closeBtn = modal.querySelector('.popup-close');
  const innerWidth = window.innerWidth;

  let modalWindowTop = 0;
  let animationId;

  //animation
  // const modalWindowAnimation = () => {
  //   animationId = requestAnimationFrame(modalWindowAnimation());
  //   modalWindowTop++;
  //   modalWindow.style.top = modalWindowTop+'px';
      
  //   if(innerWidth >= 768 && modalWindowTop !== 50){
  //     requestAnimationFrame(modalWindowAnimation);
  //   }else{
  //     cancelAnimationFrame(animationID);
  //   }
  // };
    
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'block';
      //modalWindowAnimation();

    });
  });



  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
};

export default modal;