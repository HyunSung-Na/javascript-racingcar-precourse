import Racing from './racing.js';

export default function CountInput(cars) {
    const showUserInput = document.querySelector('#racing-count')
    showUserInput.style.visibility = 'visible';

    const countUserInput = document.querySelector('#racing-count-input');
    const countSubmitbtn = document.querySelector('#racing-count-submit');

    reload(countUserInput);

    countSubmitbtn.addEventListener('click', () => {
        new Racing(cars, countUserInput.value);
    });
};

function reload(countInput) {
    countInput.value = '';
    countInput.focus();
};