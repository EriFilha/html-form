const formContact = document.getElementById('contact-form');

formContact.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = formContact.elements['name'].value;
    const email = formContact.elements['email'].value;
    const message = formContact.elements['message'].value;

    const result = `Nome: ${name}\nE-mail: ${email}\nMessage: ${message}`;
    alert(result);
});