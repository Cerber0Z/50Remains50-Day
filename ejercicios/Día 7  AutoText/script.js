const textEl = document.getElementById('text')
const speedEL = document.getElementById('speed')
const texto = 'Nos encanta la programación'
let idx = 1
let speed = 300 / speedEL.value

writeText()

function writeText() {
    textEl.innerText = texto.slice(0, idx)

    idx++

    if (idx > texto.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}


speedEL.addEventListener('input', (e) => { speed = 300 / e.target.value })