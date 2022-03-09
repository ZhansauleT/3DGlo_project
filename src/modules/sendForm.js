const sendForm = ({formId, someElem = []}) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка...";
  const successText = "Спасибо! Наш менеджер с вами свяжется!";


  const validate = (list) => {
    let success = false;

    list.forEach(input => {

      //to check name input
      if(/[^а-яА-Я ]/g.test(input[name="user_name"].value)){
        success = true;
      }

      //to check phone input
      if(/[^0-9()-+]/g.test(input[name="user_phone"].value)){
        success = true;
      }

      //to check message input
      if(/[^а-яА-Я0-9 ,]/g.test(input[name="user_message"].value)){
        success = true;
      }
      
    });

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
    const formData = new FormData();
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach(elem => {
      const element = document.getElementById(elem.id);

      if(elem.type === 'block'){
        formBody[elem.id] = element.textContent;
      }else if(elem.type === 'input'){
        formBody[elem.id] = element.value;
      }
      //console.log(elem);
    });

    if(validate(formElements)){
      sendData(formBody).then(data => {
        statusBlock.textContent = successText;

        formElements.forEach(input => {
          input.value = '';
        });
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