const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
inputEl.addEventListener('input', () => {
    const inputValue = inputEl.value;
    const cleanedValue = inputValue.trim();
    if (cleanedValue.length === 0) {
        outputEl.textContent = 'Anonymous';
    } else {
        outputEl.textContent = cleanedValue;
    }    
});