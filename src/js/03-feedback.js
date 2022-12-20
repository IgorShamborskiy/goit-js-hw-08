import throttle from 'lodash.throttle';

const formData = {};
const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector(`.feedback-form`),
    input: document.querySelector(`.feedback-form input`),
    textarea: document.querySelector(`.feedback-form textarea`),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener(`input`, throttle(onTexteriaInput, 500));


populateTextaria();


refs.form.addEventListener(`input`, evt => {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.target.reset();
     localStorage.removeItem(STORAGE_KEY);
}

function onTexteriaInput(evt) {
    const message = evt.target.value;
    localStorage.setItem(STORAGE_KEY, message);

}
function populateTextaria() {
    const savedMessage =localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        refs.input.value = savedMessage;
        refs.textarea.value = savedMessage;
    }
   
}

