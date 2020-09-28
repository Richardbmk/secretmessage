const { hash } = window.location;

const message = atob(hash.replace('#', ''));

if (message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = message;
}

const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const input = document.querySelector('#message-input');
    const inputEncryted = btoa(input.value);

    const urlGeneration = document.querySelector('#link-input');
    urlGeneration.value = `${window.location}#${inputEncryted}`;
    urlGeneration.select();
});