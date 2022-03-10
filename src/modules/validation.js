const validation = () => {
  const calcItems = document.querySelectorAll('input.calc-item');

  const mainForm = document.querySelector('.main-form');
  const mainFormTextInput = mainForm.querySelector('input[type=text]');
  const mainFormNumberInput = mainForm.querySelector('input[type=tel]');
  const mainFormEmailInput = mainForm.querySelector('input[type=email]');
  
  const footerForm = document.querySelector('.footer-form');
  const footerFormTextInput = footerForm.querySelector('input[type=text]');
  const footerFormNumberInput = footerForm.querySelector('input[type=tel]');
  const footerFormEmailInput = footerForm.querySelector('input[type=email]');
  const footerFormMessageInput = footerForm.querySelector('input.mess');


  const modalWindowForm = document.querySelector('#form3');
  const modalWindowTextInput = modalWindowForm.querySelector('input[type=text]');
  const modalWindowNumberInput = modalWindowForm.querySelector('input[type=tel]');
  const modalWindowEmailInput = modalWindowForm.querySelector('input[type=email]');


  mainForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //let isError = false;

    // if(/[^а-яА-Я -]/g.test(mainFormTextInput.value) || mainFormTextInput.value === ''){
    //   alert("Введите ваше имя на кириллице");
    //   mainFormTextInput.value = "";
    // }

    // if(/[^a-zA-Z0-9@-_.!~*']/g.test(mainFormEmailInput.value) || mainFormEmailInput.value === ''){
    //   alert("Введите корректную адресную почту");
    //   mainFormEmailInput.value = "";
    // }

    // if(/[^0-9()-]/g.test(mainFormNumberInput.value) || mainFormNumberInput.value === ''){
    //   alert("Введите корректный номер телефона");
    //   mainFormNumberInput.value = "";
    // }

  });


  // footer form validation
  footerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //let isError = false;

    if(/[^а-яА-Я -]/g.test(footerFormTextInput.value) || footerFormTextInput.value === ''){
      alert("Введите ваше имя на кириллице");
      footerFormTextInput.value = "";
    }

    if(/[^a-zA-Z0-9@-_.!~*']/g.test(footerFormEmailInput.value) || footerFormEmailInput.value === ''){
      alert("Введите корректную адресную почту");
      footerFormEmailInput.value = "";
    }

    if(/[^0-9()-]/g.test(footerFormNumberInput.value) || footerFormNumberInput.value === ''){
      alert("Введите корректный номер телефона");
      footerFormNumberInput.value = "";
    }

    if(/[^а-яА-Я -]/g.test(footerFormMessageInput.value)){
      alert("Введите корректное сообщение");
      footerFormMessageInput.value = "";
    }

  });


  //modal window form validation

  modalWindowForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //let isError = false;

    if(/[^а-яА-Я -]/g.test(modalWindowTextInput.value) || modalWindowTextInput.value === ''){
      alert("Введите ваше имя на кириллице");
      modalWindowTextInput.value = "";
    }

    if(/[^a-zA-Z0-9@-_.!~*']/g.test(modalWindowEmailInput.value) || modalWindowEmailInput.value === ''){
      alert("Введите корректную адресную почту");
      modalWindowEmailInput.value = "";
    }

    if(/[^0-9()-]/g.test(modalWindowNumberInput.value) || modalWindowNumberInput.value === ''){
      alert("Введите корректный номер телефона");
      modalWindowNumberInput.value = "";
    }

  });



  calcItems.forEach(calcItem => {
    calcItem.addEventListener('input', (e) => {
      e.preventDefault();
      
      if(/[^0-9]/g.test(calcItem.value)){
        alert("Вписывать нужно только цифры!");
        calcItem.value = "";
      }
    });
  });
  
  
};

export default validation;