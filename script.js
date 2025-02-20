const container = document.querySelector('.container');
const center = document.querySelector('.center');

center.textContent = 'Click Inside To Start Game';

center.addEventListener('click', (e) => {
    center.textContent = ''
    const ploplo =  createNewElement('div', center, 'test');

    ploplo.style.left = '50%';
    ploplo.style.top = '50%';

    ploplo.setAttribute('tabindex', '0');
    ploplo.focus();
    ploplo.addEventListener('keydown', (e) => {
        e.preventDefault();
        console.log(e.key);
       if(e.key === 'ArrowLeft') {
        ploplo.style.left = '0px';
        ploplo.style.top = '0px';
       }
    });
});


function createNewElement(type, parent, className) {
    const element = document.createElement(type);
    parent.append(element);
    element.classList.add(className)
    return element
}