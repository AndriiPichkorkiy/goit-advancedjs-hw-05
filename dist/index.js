import { concatenation } from './concatenation';
const button = document.querySelector('button');
const input = document.querySelector('input');
const output = document.querySelector('#output');
if (button && input && output) {
    button.addEventListener('click', () => {
        const text = concatenation(input.value, 'hello!');
        output.innerHTML = text;
    });
}
//# sourceMappingURL=index.js.map