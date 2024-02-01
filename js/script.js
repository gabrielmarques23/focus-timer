const buttonPlay = document.querySelector('button.play');
const buttonPause = document.querySelector('button.pause');
const buttonStop = document.querySelector('button.stop');
const buttonSet = document.querySelector('button.set');
const minutesDisplay = document.querySelector('span.minutes');
const secondsDisplay = document.querySelector('span.seconds');

let minutes

const buttonSoundOn = document.querySelector('button.soundOn');
const buttonSoundOff = document.querySelector('button.soundOff');

function countDown(){
    setTimeout(function() {
        let seconds = Number(secondsDisplay.textContent)

        if(seconds <= 0){
            seconds = 60
        }

        secondsDisplay.textContent = seconds - 1
        countDown()
    }, 1000)

}

function clickButtonPlay() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')

    buttonStop.classList.remove('hide')
    buttonSet.classList.add('hide')

    countDown()
}
function clickButtonPause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
}
function clickButtonStop(){
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')

    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
}
function clickButtonSet(){
    minutes = Number(window.prompt(`Quantos minutos?`))
    minutesDisplay.textContent = minutes


    
}

function clickButtonSoundOn(){
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
}
function clickButtonSoundOff(){
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
}