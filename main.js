function manipularTema() {

    let tema = document.querySelector('body')
    tema.classList.toggle('dark-tema')
    let titulo = document.querySelector('header')
    titulo.classList.toggle('dark-h1')
 
}
document.querySelector('button').addEventListener('click', manipularTema)

function darkModeContainer() {
    
    let container = [...document.querySelectorAll('.item')]
    console.log(container)
    container.map((container) => {container.classList.toggle('contdark')} )
    
}
document.querySelector('button').addEventListener('click', darkModeContainer)

function darkModeText() {

    let text = document.querySelectorAll('div p, h2')
    text.forEach((text) => {text.classList.toggle('dark-text')})
    
}
document.querySelector('button').addEventListener('click', darkModeText)