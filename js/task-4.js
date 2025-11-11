const serchForm = document.querySelector('.login-form');

serchForm.addEventListener('submit', event => {
    event.preventDefault();

    const email = serchForm.elements.email.value.trim();
    const password = serchForm.elements.password.value.trim();

    if (email === '' || password === '') {
        alert('All form fields must be filled in');
        return;
    }

    const resForm = { email, password };
    
    console.log(resForm);
    serchForm.reset();
});

