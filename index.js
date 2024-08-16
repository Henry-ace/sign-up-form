




const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password')
const submitBtn = document.querySelector('#submit-btn');
const error = document.querySelector('.error')


submitBtn.addEventListener('click', () => {
   if(password.value !== confirmPassword.value) {
      error.innerHTML = '*Password do not match'
      error.style.color = 'red'
      error.style.fontSize = '.7rem';
      password.style.outline = '1px solid red';
      confirmPassword.style.outline = '1px solid red';
      return
   }
})