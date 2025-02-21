const container = document.querySelector('.container');
const center = document.querySelector('.center');

center.textContent = 'Click Inside To Start Game';

center.addEventListener('click', (e) => {
    center.textContent = ''

    const ploplo =  createNewElement('div', center, 'test');

    ploplo.style.left = '100px';
    ploplo.style.top = '100px';

    ploplo.setAttribute('tabindex', '0');
    ploplo.focus();

    ploplo.addEventListener('keydown', (e) => {
        e.preventDefault();
        console.log(e.key);

        let left = parseInt(ploplo.style.left) || 0;
        let top = parseInt(ploplo.style.top) || 0

        if(e.key === 'ArrowLeft') {
            ploplo.style.left = `${left - 10}px`;
        
       }else if (e.key === 'ArrowRight') {
            ploplo.style.left = `${left + 10}px`;
       }else if (e.key === 'ArrowUp') {
            ploplo.style.top = `${top - 10}px`;
        } else if (e.key === 'ArrowDown') {
            ploplo.style.top = `${top + 10}px`;
        }
    });
});


function createNewElement(type, parent, className) {
    const element = document.createElement(type);
    parent.append(element);
    element.classList.add(className)
    return element
}