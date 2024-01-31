const play = document.querySelector('button.play')
const pause = document.querySelector('button.pause')

function clickPlay() {
    play.classList.add('hide')
    pause.classList.remove('hide')
}
function clickPause() {
    pause.classList.add('hide')
    play.classList.remove('hide')
}