const buttonPlay = document.querySelector('button.play');
const buttonPause = document.querySelector('button.pause');
const buttonStop = document.querySelector('button.stop');
const buttonSet = document.querySelector('button.set')

const buttonSoundOn = document.querySelector('button.soundOn')
const buttonSoundOff = document.querySelector('button.soundOff')


function clickButtonPlay() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')

    buttonStop.classList.remove('hide')
    buttonSet.classList.add('hide')
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


function clickButtonSoundOn(){
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
}
function clickButtonSoundOff(){
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
}