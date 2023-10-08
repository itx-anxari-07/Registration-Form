document.addEventListener("DOMContentLoaded", function() {
  const formModal = document.querySelector('.user-modal');
  const formLogin = document.querySelector('#login');
  const formSignup = document.querySelector('#signup');
  const formForgotPassword = document.querySelector('#reset-password');
  const formModalTabLinks = document.querySelectorAll('.switcher a');
  const tabLogin = formModalTabLinks[0];
  const tabSignup = formModalTabLinks[1];
  const forgotPasswordLink = document.querySelector('.form-bottom-message a');
  const backToLoginLink = document.querySelector('.form-bottom-message a');
  const mainNav = document.querySelector('.main-nav');
  const hidePasswords = document.querySelectorAll('.hide-password');

  mainNav.addEventListener('click', function(event) {
    if (event.target.classList.contains('signin') || event.target.classList.contains('signup')) {
      event.preventDefault();
      formModal.classList.add('is-visible');
      (event.target.classList.contains('signup')) ? setSelected(formSignup, tabSignup) : setSelected(formLogin, tabLogin);
    } else if (event.target === mainNav) {
      mainNav.querySelector('ul').classList.toggle('is-visible');
    }
  });

  formModal.addEventListener('click', function(event) {
    if (event.target === formModal || event.target.classList.contains('close-form')) {
      formModal.classList.remove('is-visible');
    }
  });

  document.addEventListener('keyup', function(event) {
    if (event.key === 'Escape') {
      formModal.classList.remove('is-visible');
    }
  });

  formModalTabLinks.forEach(function(tabLink) {
    tabLink.addEventListener('click', function(event) {
      event.preventDefault();
      (event.target === tabLogin) ? setSelected(formLogin, tabLogin) : setSelected(formSignup, tabSignup);
    });
  });

  hidePasswords.forEach(function(hidePassword) {
    hidePassword.addEventListener('click', function() {
      const passwordField = this.previousElementSibling;
      passwordField.type = (passwordField.type === 'password') ? 'text' : 'password';
      this.textContent = (this.textContent === 'Show') ? 'Hide' : 'Show';
      putCursorAtEnd(passwordField);
    });
  });

  forgotPasswordLink.addEventListener('click', function(event) {
    event.preventDefault();
    setSelected(formForgotPassword);
  });

  backToLoginLink.addEventListener('click', function(event) {
    event.preventDefault();
    setSelected(formLogin, tabLogin);
  });

  function setSelected(formElement, tabElement) {
    [formLogin, formSignup, formForgotPassword].forEach((el) => el.classList.remove('is-selected'));
    [tabLogin, tabSignup].forEach((el) => el.classList.remove('selected'));
    formElement.classList.add('is-selected');
    if (tabElement) {
      tabElement.classList.add('selected');
    }
  }

  function putCursorAtEnd(input) {
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
  }
});

