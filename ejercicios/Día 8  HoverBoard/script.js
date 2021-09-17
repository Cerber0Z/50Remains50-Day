const container = document.getElementById('container')
const colors = ['#FF9804', '#FFC300', '#FF5733', '#C70039', '#900C3F', '#581845']
const SQUARES = 500

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('cuadrito')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 15px ${color}`
}

function removeColor(element) {
    element.style.background = '#2B2B2B'
    element.style.boxShadow = '0 0 3px #000'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}