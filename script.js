
const body = document.body
const heart = document.getElementById('heartInicio')
const textStart = document.getElementById('textStart')
const start = document.getElementById('start')

const afterClick = document.getElementById('afterClick')
const title = document.getElementById('title')
const radial = document.getElementById('radial')
const heartAfter = document.getElementById('heartAfter')

const roleBaixo = document.getElementById('roleBaixo')
const textRB = document.getElementById('textRB')
const textCima = document.getElementById('textCima')
const textBaixo = document.getElementById('textBaixo')

const topValue = document.getElementById('topValue')
const botValue = document.getElementById('botValue')

const time = document.getElementById('time')

const h2 = document.getElementsByTagName('h2')[0]
const ceu = document.getElementById('ceu')

const music = document.getElementById('music')
const btn = document.getElementById('btn')
const nota = document.getElementById('nota')
const spotify = document.getElementsByTagName('iframe')[0]
const musicP = document.getElementById('wMusic')

heart.onclick = function() {
    body.style.overflowY = 'scroll'
    body.style.backgroundImage = 'radial-gradient(rgb(19, 51, 88) 0, rgb(8, 3, 10) 100%)'
    body.style.paddingBottom = '50px'
    body.style.minHeight = '300vh'

    start.style.display = 'none'
    heart.style.display = 'none'
    textStart.style.display = 'none'

    afterClick.style.display = 'flex'
    time.style.display = 'flex'

    heartAfter.style.top = `20%`

    title.innerHTML = `Para a Ingridy.`

    h2.innerHTML = '(mais conhecida como amor da minha vida)'

    roleBaixo.style.display = 'flex'
    textRB.innerHTML = 'role para baixo'

    ceu.style.display = 'unset'

    topValue.innerHTML = '9'
    botValue.innerHTML = '27'
}

btn.onclick = function() {
    music.style.width = '420px'
    music.style.height = '400px'
    musicP.style.top = '-40%'
    musicP.style.fontSize = '5rem'
    btn.style.display = 'none'
    nota.style.display = 'none'
    spotify.style.display = 'unset'
    spotify.style.animation = 'aparecer 1.5s ease-in-out'
    music.style.transition = 'height 0.5s ease-in-out, width 0.5s ease-in-out'
}
