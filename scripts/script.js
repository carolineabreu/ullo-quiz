document.addEventListener('DOMContentLoaded', function () {
  const quizForm = document.getElementById('quiz');
  const quizContainer = document.querySelector('.quiz');
  const question1 = document.getElementById('question1');
  const question2 = document.getElementById('question2');
  const question3 = document.getElementById('question3');
  const info = document.getElementById('info');
  const infoButton = document.querySelector(".infoButton");
  const infoHeader = document.querySelector(".infoHeader");
  const infoSubmit = document.querySelector(".infoSubmit");
  const content = document.querySelector('.content');
  const container = document.querySelector('.container');
  const h1 = content.querySelector('h1');
  const questionLabel = document.getElementById('question-label');
  const dotContainer = document.querySelector(".dots");
  const dots = document.querySelectorAll('.dot');

  infoButton.addEventListener('click', function () {
    if (question3.style.display === 'block') {
      question3.style.display = 'none';
      question2.style.display = 'block';
      questionLabel.textContent = 'Which group do you fit in?';
      dots[2].classList.remove('dotActive');
      dots[1].classList.add('dotActive');
    } else if (question2.style.display === 'block') {
      question2.style.display = 'none';
      question1.style.display = 'block';
      questionLabel.textContent = 'Which reward do you like most in a credit card?';
      infoButton.style.display = "none";
      dots[1].classList.remove('dotActive');
      dots[0].classList.add('dotActive');
    }
  });


  quizForm.addEventListener('change', function (event) {
    const selectedRadio = event.target;

    if (selectedRadio.name === 'reward') {
      question1.style.display = 'none';
      question2.style.display = 'block';
      questionLabel.textContent = 'Which group do you fit in?';
      dots[0].classList.remove('dotActive');
      dots[1].classList.add('dotActive');
    } else if (selectedRadio.name === 'group') {
      question2.style.display = 'none';
      question3.style.display = 'block';
      questionLabel.textContent = 'What is most important in a credit card for you?';
      dots[1].classList.remove('dotActive');
      dots[2].classList.add('dotActive');
    } else if (selectedRadio.name === 'importance') {
      question3.style.display = 'none';
      dotContainer.style.display = 'none';
      info.style.display = "flex";

      h1.textContent = 'We found the best credit card for you';
      questionLabel.textContent = 'You are one step away from your new credit card';
    }

    if (question2.style.display === 'block' || question3.style.display === 'block') {
      infoButton.style.display = 'inline-flex';
    } else {
      infoButton.style.display = 'none';
    }
  });

  const agreeCheckbox = document.getElementById('agree');
  const submitButton = document.getElementById('submit-btn');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');

  agreeCheckbox.addEventListener('change', function () {
    submitButton.disabled = !this.checked;
  });

  quizForm.addEventListener('submit', function (event) {
    event.preventDefault();

    quizContainer.style.display = "none";
    info.style.display = "none";
    infoHeader.style.display = "none";
    container.style.alignItems = "center";
    infoSubmit.style.display = "flex";

    if (!nameInput.value || !emailInput.value) {
      alert('Por favor, preencha todos os campos do formulário!');
      return;
    }

    // const formData = new FormData(this);
    // fetch('URL_DESTINO', {
    //   method: 'POST',
    //   body: formData
    // })
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error('Ocorreu um erro ao enviar os dados do formulário.');
    //     }
    //     
    //     alert('Dados do formulário enviados com sucesso!');
    //   })
    //   .catch(error => {
    //     console.error('Erro:', error);
    //     alert('Ocorreu um erro ao enviar os dados do formulário. Por favor, tente novamente mais tarde.');
    //   });
  });
});
