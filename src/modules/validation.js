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


  //main form validation
  mainFormTextInput.addEventListener('input', (e) => {
    e.preventDefault();
    e.target.value = e.target.value.replace(/[^а-яА-Я -]/g,"");
  });

  mainFormTextInput.addEventListener('blur', (e) => {
    e.target.value = e.target.value.replace(/ +/g," ");
    e.target.value = e.target.value.replace(/\-+/g,"-");
    e.target.value = e.target.value.replace(/^(-)|^( )|[ ]$|[-]$/g,"");
    e.target.value = e.target.value.replace(/^[а-я]/g, function(letter) {
    return letter.toUpperCase(); });
    e.target.value = e.target.value.replace(/(?!^)[А-Я]/g, function(letter) {
    return letter.toLowerCase(); });
  });

  //(?=[а-я]{2})

  mainFormNumberInput.addEventListener('input', (e) => {
    e.preventDefault();
    e.target.value = e.target.value.replace(/[^0-9()+-]/g,"");
  });

  mainFormNumberInput.addEventListener('blur', (e) => {
    e.target.value = e.target.value.replace(/\-+/g,"-");
    e.target.value = e.target.value.replace(/\++/g,"+");
    e.target.value = e.target.value.replace(/^(-)|[+]$|[(]$|[)]$|[-]$/g,"");
  });

  mainFormEmailInput.addEventListener('input', (e) => {
    e.preventDefault();
    e.target.value = e.target.value.replace(/[^a-zA-Z0-9@_.!~*'-]/g,"");
  });

  mainFormEmailInput.addEventListener('blur', (e) => {
    e.target.value = e.target.value.replace(/\@+/g,"@");
    e.target.value = e.target.value.replace(/\.+/g,".");
    e.target.value = e.target.value.replace(/^(-)|[-]$/g,"");
  });

  

  //footer form validation

  footerFormTextInput.addEventListener('input', (e) => {
    e.preventDefault();
    e.target.value = e.target.value.replace(/[^а-яА-Я -]/g,"");
  });

  footerFormTextInput.addEventListener('blur', (e) => {
    e.target.value = e.target.value.replace(/ +/g," ");
    e.target.value = e.target.value.replace(/\-+/g,"-");
    e.target.value = e.target.value.replace(/^(-)|^( )|[ ]$|[-]$/g,"");
    e.target.value = e.target.value.replace(/^[а-я]/g, function(letter) {
    return letter.toUpperCase(); });
    e.target.value = e.target.value.replace(/(?!^)[А-Я]/g, function(letter) {
    return letter.toLowerCase(); });
  });

  footerFormNumberInput.addEventListener('input', (e) => {
    e.preventDefault();
    e.target.value = e.target.value.replace(/[^0-9()+-]/g,"");
  });

  footerFormNumberInput.addEventListener('blur', (e) => {
    e.target.value = e.target.value.replace(/\-+/g,"-");
    e.target.value = e.target.value.replace(/\++/g,"+");
    e.target.value = e.target.value.replace(/\)+/g,")");
    e.target.value = e.target.value.replace(/\(+/g,"(");
    e.target.value = e.target.value.replace(/^(-)|[+]$|[(]$|[)]$|[-]$/g,"");
  });

  footerFormEmailInput.addEventListener('input', (e) => {
    e.preventDefault();
    e.target.value = e.target.value.replace(/[^a-zA-Z0-9@_.!~*'-]/g,"");
  });

  footerFormEmailInput.addEventListener('blur', (e) => {
    e.target.value = e.target.value.replace(/\@+/g,"@");
    e.target.value = e.target.value.replace(/\.+/g,".");
    e.target.value = e.target.value.replace(/\-+/g,"-");
    e.target.value = e.target.value.replace(/^(-)|[.]$|[-]$/g,"");
  });

  footerFormMessageInput.addEventListener('input', (e) => {
    e.preventDefault();
    e.target.value = e.target.value.replace(/[^а-яА-Я -,]/g,"");
  });

  footerFormMessageInput.addEventListener('blur', (e) => {
    e.target.value = e.target.value.replace(/ +/g," ");
    e.target.value = e.target.value.replace(/\-+/g,"-");
    e.target.value = e.target.value.replace(/^(-)|^( )|^(,)|[ ]$|[-]$/g,"");
  });


  //modal window form validation
  modalWindowTextInput.addEventListener('input', (e) => {
    e.preventDefault();
    e.target.value = e.target.value.replace(/[^а-яА-Я -]/g,"");
  });

  modalWindowTextInput.addEventListener('blur', (e) => {
    e.target.value = e.target.value.replace(/ +/g," ");
    e.target.value = e.target.value.replace(/\-+/g,"-");
    e.target.value = e.target.value.replace(/^(-)|^( )|[ ]$|[-]$/g,"");
    e.target.value = e.target.value.replace(/^[а-я]/g, function(letter) {
    return letter.toUpperCase(); });
    e.target.value = e.target.value.replace(/(?!^)[А-Я]/g, function(letter) {
    return letter.toLowerCase(); });
  });

  modalWindowNumberInput.addEventListener('input', (e) => {
    e.preventDefault();
    e.target.value = e.target.value.replace(/[^0-9()+-]/g,"");
  });

  modalWindowNumberInput.addEventListener('blur', (e) => {
    e.target.value = e.target.value.replace(/\-+/g,"-");
    e.target.value = e.target.value.replace(/\++/g,"+");
    e.target.value = e.target.value.replace(/^(-)|[+]$|[(]$|[)]$|[-]$/g,"");
  });

  modalWindowEmailInput.addEventListener('input', (e) => {
    e.preventDefault();
    e.target.value = e.target.value.replace(/[^a-zA-Z0-9@_.!~*'-]/g,"");
  });

  modalWindowEmailInput.addEventListener('blur', (e) => {
    e.target.value = e.target.value.replace(/\@+/g,"@");
    e.target.value = e.target.value.replace(/\.+/g,".");
    e.target.value = e.target.value.replace(/\-+/g,"-");
    e.target.value = e.target.value.replace(/^(-)|[-]$/g,"");
  });


  calcItems.forEach(calcItem => {
    calcItem.addEventListener('input', (e) => {
      e.preventDefault();
      e.target.value = e.target.value.replace(/[^0-9]/g,"");
    });
  });
  
  
};

export default validation;