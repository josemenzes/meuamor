
const body = document.body
const heart = document.getElementById('heartInicio')
const textStart = document.getElementById('textStart')
const start = document.getElementById('start')

const afterClick = document.getElementById('afterClick')
const title = document.getElementById('title')
const radial = document.getElementById('radial')
const heartAfter = document.getElementById('heartAfter')

const roleBaixo = document.getElementById('roleBaixo')
const boxCima = document.getElementById('boxCima')
const boxBaixo = document.getElementById('boxBaixo')
const textRB = document.getElementById('textRB')
const textCima = document.getElementById('textCima')
const textBaixo = document.getElementById('textBaixo')
const textVirado = document.getElementById('textVirado')

const topValue = document.getElementById('topValue')
const botValue = document.getElementById('botValue')

const time = document.getElementById('time')
const timeP = document.getElementById('timeP')

const h2 = document.getElementsByTagName('h2')[1]
const ceu = document.getElementById('ceu')

const music = document.getElementById('music')
const btn = document.getElementById('btn')
const nota = document.getElementById('nota')
const spotify = document.getElementsByTagName('iframe')[0]
const musicP = document.getElementById('wMusic')

const imagens = document.getElementById('imagens')

const memorias = document.getElementById('memorias')
const memoriasP = document.getElementsByTagName('p')[6]

const carta = document.getElementById('carta')
const footer = document.getElementsByTagName('footer')[0]
const js = document.getElementById('js')

const cell = document.getElementById('cell')

heart.onclick = function() {
    body.style.overflowY = 'scroll'
    body.style.backgroundImage = 'radial-gradient( #864814 0,  #1a0303 100%)'
    body.style.minHeight = 'max-content'
    body.style.gap = '20rem'
    start.style.display = 'none'
    heart.style.display = 'none'
    textStart.style.display = 'none'
    cell.style.display = 'none'

    footer.style.display = 'flex'
    afterClick.style.display = 'flex'
    time.style.display = 'flex'
    music.style.display = 'flex'
    memorias.style.display = 'flex'
    carta.style.display = 'flex'
    js.style.display = 'flex'

    title.innerHTML = `Para a Ingridy.`


    roleBaixo.style.display = 'flex'
    textRB.innerHTML = 'role para baixo'

    ceu.style.display = 'unset'

    topValue.innerHTML = '9'
    botValue.innerHTML = '27'

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                entry.target.classList.add('show')
            } else {
                entry.target.classList.remove('show')
            }
        })
    })

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el)
    })

}

btn.onclick = function() {
    music.style.width = '42rem'
    music.style.height = '40rem'
    musicP.style.fontSize = '5rem'
    btn.style.display = 'none'
    nota.style.display = 'none'
    spotify.style.display = 'unset'
    spotify.style.animation = 'aparecer 1.5s ease-in-out'
}


js.onclick = function(){
        heartAfter.style.animation = 'none'
        title.style.animation = 'none'
        h2.style.animation = 'none'
        roleBaixo.style.animation = 'none'
        boxCima.style.animation = 'none'
        boxBaixo.style.animation = 'none'
        timeP.style.animation = 'none'
        textVirado.style.animation = 'none'
        music.style.animation = 'none'
        afterClick.style.animation = 'none'
        imagens.style.animation = 'none'
        memoriasP.style.animation = 'none'
        carta.style.animation = 'none'
}
