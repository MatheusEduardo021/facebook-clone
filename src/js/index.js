const eye = document.querySelector('.fa-regular.fa-eye-slash');
const passwordInput = document.querySelector('#passwrd');




function showPassword() {
    eye.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            eye.classList.remove('fa-eye-slash');
            eye.classList.add('fa-eye');
        } else {
            passwordInput.type = 'password';
            eye.classList.remove('fa-eye');
            eye.classList.add('fa-eye-slash');

        }
    });
}

showPassword();
