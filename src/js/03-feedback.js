import throttle from 'lodash.throttle';

const formData = {};
const refs = {
    form: document.querySelector(`.feedback-form`),
    input: document.querySelector(`.feedback-form input`),
    textarea: document.querySelector(`.feedback-form textarea`),
};
refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener(`input`, throttle(onTexteriaInput, 500));
const STORAGE_KEY = 'feedback-form-state';

populateTextaria();


refs.form.addEventListener(`input`, e => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

function onFormSubmit(evt) {
    evt.preventDefault();fff
    evt.target.reset();
     localStorage.removeItem(STORAGE_KEY);
}
function onTexteriaInput(evt) {
    const message = evt.target.value;
    localStorage.setItem(STORAGE_KEY, message);

}
function populateTextaria() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        refs.textarea.value = savedMessage;
    }
   
}
