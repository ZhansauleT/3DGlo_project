const sendForm = ({formId, someElem = []}) => {
  const form = document.getElementById(formId);

  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка...";
  const successText = "Спасибо! Наш менеджер с вами свяжется!";


  const validate = (list) => {
    let success = true;

    list.forEach(input => {
      //console.log(input.name);

      //to check name input
      if(input.name === "user_name" && (/[^а-яА-Я ]/g.test(input.value) || input.value === "")){
        alert("Введите ваше имя на кириллице");
        input.value = "";
        success = false;
      }
      
      //to check phone number input
      if (input.name === "user_phone" && !(/\(?([0-9]{4})\)?([-]?)([0-9]{3})\2([0-9]{4})/g.test(input.value))){
        alert("Введите корректный номер телефона: 11 цифр начиная с кода");
        input.value = "";
        success = false;
      }

      //to check email input
      if (input.name === "user_email" && /[^a-zA-Z0-9@-_.!~*']/g.test(input.value)){
        alert("Введите корректную адресную почту");
        input.value = "";
        success = false;
      }


      // to check message input
      if(input.name === "user_message" && /[^а-яА-Я0-9 ,]/g.test(input.value)){
        success = false;
      } 
      
    });

    //console.log(success);

    return success;
  };


  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
  };



  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};


    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach(elem => {
      const element = document.getElementById(elem.id);

      if(elem.type === 'block' && element.textContent !== "0"){
        formBody[elem.id] = element.textContent;
      }else if(elem.type === 'input' && element.value !== 0){
        formBody[elem.id] = element.value;
      }
    });

    if(validate(formElements)){

      statusBlock.textContent = loadText;
      form.append(statusBlock);

      sendData(formBody).then(data => {
        statusBlock.textContent = successText;

        formElements.forEach(input => {
          input.value = '';
        });

        form.remove(statusBlock);
      })
      .catch(error => {
        statusBlock.textContent = errorText;
      });
    } else {
      alert('Данные не валидны!!!');
    }
  };

  try {

    if(!form){
      throw new Error('Верните форму на место, пожалуйста!');
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      submitForm();
    });
  }catch(error) {
    console.log(error.message);
  }
};

export default sendForm;