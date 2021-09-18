const restos = [
    {nombre: 'Expanding Cards', dia: 'Día 1', h:'./ejercicios/Día 1 Expanding Cards/index.html'},
    {nombre: 'Progress Steps', dia: 'Día 2', h:'./ejercicios/Día 2 Progress Steps/index.html'},
    {nombre: 'Rotating Navigation', dia: 'Día 3', h:'./ejercicios/Dia 3 Rotating Navigation/index.html'},
    {nombre: 'HiddenSearch', dia: 'Día 4', h:'./ejercicios/Día 4 HiddenSearch/index.html'},
    {nombre: 'Blurry Loding', dia: 'Día 5', h:'./ejercicios/Día 5  Blurry Loding/index.html'},
    {nombre: 'Drag N drop', dia: 'Día 6', h:'./ejercicios/Día 6  Drag N drop/index.html'},
    {nombre: 'AutoText', dia: 'Día 7', h:'./ejercicios/Día 7  AutoText/index.html'},
    {nombre: 'HoverBoard', dia: 'Día 8', h:'./ejercicios/Día 8  HoverBoard/index.html'},
    {nombre: 'Scroll Animation/', dia: 'Día 9', h:'./ejercicios/Día 9  Scroll Animation/index.html'},
    {nombre: 'Form input wave', dia: 'Día 10', h:'./ejercicios/Día 10  Form input wave/index.html'},
    {nombre: 'Dad Jokes', dia: 'Día 11', h:'./ejercicios/Día 11 Dad Jokes/index.html'},
    {nombre: 'Sound Board', dia: 'Día 12', h:'./ejercicios/Día 12 Sound Board/index.html'},
    {nombre: 'Live User Filter', dia: 'Día 13', h:'./ejercicios/Día 13 Live User Filter/index.html'},
    {nombre: 'Button Ripple Effect', dia: 'Día 14', h:'./ejercicios/Día 14 Button Ripple Effect/index.html'},
    {nombre: 'Background Slider', dia: 'Día 15', h:'./ejercicios/Día 15  Background Slider/index.html'},
    {nombre: 'Kinetic loader', dia: 'Día 16', h:'./ejercicios/Día 16 Kinetic loader/index.html'},
    {nombre: 'Netflix Navigation', dia: 'Día 17', h:'./ejercicios/Día 17 Netflix Navigation/index.html'},
    {nombre: 'Testimonial Box Switcher', dia: 'Día 18', h:'./ejercicios/Día 18 Testimonial Box Switcher/index.html'},
    {nombre: 'Pokedex', dia: 'Día 19', h:'./ejercicios/Día 19 Pokedex/index.html'},
    {nombre: 'Double Click Heart', dia: 'Día 20', h:'./ejercicios/Día 20 Double Click Heart/index.html'},
    {nombre: 'Event keycodes', dia: 'Día 21', h:'./ejercicios/Día 21 Event keycodes/index.html'},
    {nombre: 'Mobile Nav Navigation', dia: 'Día 22', h:'./ejercicios/Día 22 Mobile Nav Navigation/index.html'},
    {nombre: 'Drink Water', dia: 'Día 23', h:'./ejercicios/Día 23 Drink Water/index.html'},
    {nombre: 'Feedback UI Design', dia: 'Día 24', h:'./ejercicios/Día 24 Feedback UI Design/index.html'},
    {nombre: 'Github Profile', dia: 'Día 25', h:'./ejercicios/Día 25 Github Profile/index.html'},
]

const formulario = document.querySelector('#formulario')
const boton = document.querySelector('#boton')
const resultado = document.querySelector('#resultado')
const filtrar = () =>{

    resultado.innerHTML = '';

    const text = formulario.value.toLowerCase();         
    for(let resto of restos){
        let nombre = resto.nombre.toLowerCase();
        if(nombre.indexOf(text) !== -1){
            resultado.innerHTML += `<div class="col-md-4 mb-3 mb-md-0 click" >
                <a href="${resto.h}" target="_blank" title="Resto ${resto.dia}">
                    <div class="card py-4 h-100">
                        <div class="card-body text-center">             
                            <h4 class="text-uppercase m-0">${resto.nombre}</h4>
                            <hr class="my-4 mx-auto" />
                            <div class="small text-black-50">${resto.dia}</div>
                        </div>
                    </div>
                </a>
            </div>`
        }
    }

    if(resultado.innerHTML === ''){
        resultado.innerHTML += `<div class="col-md-4 mb-3 mb-md-0" >
                    <div class="card py-4 h-100">
                        <div class="card-body text-center">             
                            <h4 class="text-uppercase m-0">No se ecuntro el reto</h4>
                        </div>
                    </div>
            </div>`
    }
}
formulario.addEventListener('keyup', filtrar)

filtrar();