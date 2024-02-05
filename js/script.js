const buttonPlay = document.querySelector('button.play');
const buttonPause = document.querySelector('button.pause');
const buttonStop = document.querySelector('button.stop');
const buttonSet = document.querySelector('button.set');
const minutesDisplay = document.querySelector('span.minutes');
const secondsDisplay = document.querySelector('span.seconds');

const buttonSoundOn = document.querySelector('button.soundOn');
const buttonSoundOff = document.querySelector('button.soundOff');

let minutes = Number(minutesDisplay.textContent);
let timerTimeOut

function resetControls() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
}
function resetTimer() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
}
function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}
function countDown() {
    timerTimeOut = setTimeout(function () {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        updateTimerDisplay(minutes, 0)

        if (minutes <= 0) {
            resetControls()
            return
        }

        if (seconds <= 0) {
            seconds = 2
            --minutes
        }

        updateTimerDisplay(minutes, String(seconds - 1))

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
    clearTimeout(timerTimeOut)
}
function clickButtonStop() {
    resetControls()
    resetTimer()
}
function clickButtonSet() {
    let newMinutes = prompt(`Quantos minutos?`)
    if (!newMinutes) {
        resetTimer()
        return
    }
    minutes = newMinutes
    updateTimerDisplay(minutes, 0)
}

function clickButtonSoundOn() {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
}
function clickButtonSoundOff() {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
}