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
let bgSound;

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
function updateTimerDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}
function countDown() {
    timerTimeOut = setTimeout(function () {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        let isFinished = minutes <= 0 && seconds <= 0

        updateTimerDisplay(minutes, 0)

        if (isFinished) {
            resetControls()
            sound().timerSong.play()
            return
        }

        if (seconds <= 0) {
            seconds = 60
            --minutes
        }
        updateTimerDisplay(minutes, String(seconds - 1))
        countDown()
    }, 1000)
}

function sound() {
    const timerSong = new Audio('./assets/simple-2.mp3');
    const soundClickButton = new Audio('./assets/click-button.mp3');
    const soundStopButton = new Audio('./assets/click-stop.mp3');

    return {
        timerSong,
        soundClickButton,
        soundStopButton,
        playBgSound: function() {
            if (!bgSound) {
                bgSound = new Audio('./assets/bg-sound.mp3');
                bgSound.loop = true;
            }
            bgSound.play();
        },
        pauseBgSound: function() {
            if (bgSound) {
                bgSound.pause();
            }
        }
    };
}

function clickButtonPlay() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonStop.classList.remove('hide')
    buttonSet.classList.add('hide')
    countDown()
    sound().soundClickButton.play()
}
function clickButtonPause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    clearTimeout(timerTimeOut)
}
function clickButtonStop() {
    sound().soundStopButton.play()
    resetControls()
    resetTimer()
    sound().soundStopButton.play()

}
function clickButtonSet() {
    let newMinutes = Number(prompt(`Quantos minutos?`))
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
    sound().playBgSound()
}
function clickButtonSoundOff() {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
    sound().pauseBgSound()
}