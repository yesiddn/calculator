const result = document.querySelector('#result');
const resume = document.querySelector('#resume');
const clear = document.querySelector('#clear');
const operation = document.querySelector('.calculator__operations');
const simbols = ['+', '-', 'x', '/'];

operation.addEventListener('click', (e) => {
  if (e.target === clear) {
    resume.value = resume.value.slice(0, -1);
    return;
  }

  if (e.target.type === 'button') {
    const lastChar = resume.value[resume.value.length - 1];
    
    if (simbols.find(simbol => simbol === lastChar) && simbols.find(simbol => simbol === e.target.value)) return;

    resume.value += e.target.value;
  }
});