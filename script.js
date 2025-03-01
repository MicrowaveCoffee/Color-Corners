const container = document.querySelector('.container');
const center = document.querySelector('.center');

const blueCorner = document.querySelector('.blue');
const redCorner = document.querySelector('.red');
const yellowCorner = document.querySelector('.yellow');
const greenCorner = document.querySelector('.green');


const blueCoords = blueCorner.getBoundingClientRect();
const redCoords = redCorner.getBoundingClientRect();
const yellowCoords = yellowCorner.getBoundingClientRect();
const greenCoords = greenCorner.getBoundingClientRect();


center.addEventListener('click', (e) => {
    center.textContent = ''

    const movableSquare =  createNewElement('div', container, 'test');

    const centerCoords = center.getBoundingClientRect();
    movableSquare.style.left = `${centerCoords.width/2 - 25 + centerCoords.left}px`;
    movableSquare.style.top = `${centerCoords.height/2 -25 + centerCoords.top}px`;
    
    movableSquare.setAttribute('tabindex', '0');
    movableSquare.focus();

    movableSquare.addEventListener('keydown', (e) => {
        e.preventDefault();
        

        let left = parseInt(movableSquare.style.left) || 0;
        let top = parseInt(movableSquare.style.top) || 0;
        const step = 10;

        if(e.key === 'ArrowLeft') {
            movableSquare.style.left = `${left - 10}px`;
        
       }else if (e.key === 'ArrowRight') {
            movableSquare.style.left = `${left + 10}px`;
       }else if (e.key === 'ArrowUp') {
            movableSquare.style.top = `${top - 10}px`;
        } else if (e.key === 'ArrowDown') {
            movableSquare.style.top = `${top + 10}px`;
        }

        const squareCoords = movableSquare.getBoundingClientRect();

        checkCornerCollision(squareCoords, blueCoords, 'blue', movableSquare);
        checkCornerCollision(squareCoords, redCoords, 'red', movableSquare);
        checkCornerCollision(squareCoords, greenCoords, 'green', movableSquare);
        checkCornerCollision(squareCoords, yellowCoords, 'yellow', movableSquare);
    });
});


function createNewElement(type, parent, className) {
    const element = document.createElement(type);
    parent.append(element);
    element.classList.add(className)
    return element
}

function checkCornerCollision(squareCoords, cornerCoords, color, square) {
    if (isOverlapping(squareCoords, cornerCoords)) {
        square.style.backgroundColor = color;
    }
}

function isOverlapping(rect1, rect2) {
    return !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
    );
}