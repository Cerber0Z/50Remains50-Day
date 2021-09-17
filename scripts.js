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
    // {nombre: '', dia: '', h:''},
    // {nombre: '', dia: '', h:''},
    // {nombre: '', dia: '', h:''},
    // {nombre: '', dia: '', h:''},
    // {nombre: '', dia: '', h:''},
    // {nombre: '', dia: '', h:''},
    // {nombre: '', dia: '', h:''},
    // {nombre: '', dia: '', h:''},
    // {nombre: '', dia: '', h:''},
    // {nombre: '', dia: '', h:''},
    // {nombre: '', dia: '', h:''},
    // {nombre: '', dia: '', h:''},
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