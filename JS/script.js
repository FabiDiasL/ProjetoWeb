document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.card');
    const homePage = document.getElementById('home');
    const aboutPage = document.getElementById('about');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const usuario = document.getElementById('usuario').value;
        const senha = document.getElementById('password').value;

        if (usuario === 'Fabi' && senha === '909090') {
            loginForm.reset();
            document.location.href = 'home.html';
        } else {
            alert('Usuário ou senha inválidos!');
        }
    });

});