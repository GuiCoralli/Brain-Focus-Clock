import { elements } from "./elements.js"
import { Controls } from "./controls.js"
import { Timer } from "./timer.js"
import { Cards } from "./cards.js"
import { Sounds } from "./sounds.js"
import { DarkMode } from "./darkmode.js"

// registrar as variáveis
const {
    btnPlay,
    btnPause,
    btnStop,
    btnIncrease,
    btnDecrease,
    btnToggleSetTheMinutes,
    btnSetMinutes,
    btnForest,
    btnRain,
    btnCoffeeShop,
    btnFireplace,
    btnGym,
    btnLofi,
    btnDarkMode,
    dialMinutes,
    dialSeconds,
    sliderForest,
    sliderRain,
    sliderCoffeeShop,
    sliderFireplace,
    sliderGym,
    sliderLofi
} = elements

const darkmode = DarkMode({
    btnDarkMode,
})

const sounds = Sounds()

const cards = Cards({
    btnForest,
    btnRain,
    btnCoffeeShop,
    btnFireplace,
    btnGym,
    btnLofi,
    stopSounds: sounds.stopSounds,
    playSoundForest: sounds.playSoundForest,
    playSoundRain: sounds.playSoundRain,
    playSoundCoffeeShop: sounds.playSoundCoffeeShop,
    playSoundFireplace: sounds.playSoundFireplace,
    playSoundGym: sounds.playSoundGym,
    playSoundLofi: sounds.playSoundLofi
})

const timer = Timer({
    dialMinutes,
    dialSeconds,
    btnPlay,
    btnPause,
    soundKitchenTimer: sounds.soundKitchenTimer
})

const controls = Controls({
    btnPlay,
    btnPause,
    getTimer: timer.getTimer,
    checkingTimer: timer.checkingTimer,
    setTimer: timer.setTimer,
    startTimer: timer.startTimer,
    pauseTimer: timer.pauseTimer,
    stopTimer: timer.stopTimer,
    resetTimer: timer.resetTimer,
    increaseTimer: timer.increaseTimer,
    decreaseTimer: timer.decreaseTimer,
    soundButtonPress: sounds.soundButtonPress
})

// registrar os controles e os cards(através dos clicks nos butões)
btnPlay.addEventListener("click", controls.play)
btnPause.addEventListener("click", controls.pause)
btnStop.addEventListener("click", controls.stop)
btnIncrease.addEventListener("click", controls.increase)
btnDecrease.addEventListener("click", controls.decrease)
btnToggleSetTheMinutes.addEventListener("click", controls.toggleSetTheMinutes)
btnSetMinutes.addEventListener("click", controls.setMinutes)
btnDarkMode.addEventListener("click", darkmode.toogleDarkMode)

btnForest.addEventListener("click", cards.buttonForest)
btnRain.addEventListener("click", cards.buttonRain)
btnCoffeeShop.addEventListener("click", cards.buttonCoffeeShop)
btnFireplace.addEventListener("click", cards.buttonFireplace)
btnGym.addEventListener("click", cards.buttonGym)
btnLofi.addEventListener("click", cards.buttonLofi)




// registrar as funções para remover e add card(através dos clicks nos butões)
function removeCardEvent() {
    btnForest.removeEventListener("click", cards.buttonForest)
    btnRain.removeEventListener("click", cards.buttonRain)
    btnCoffeeShop.removeEventListener("click", cards.buttonCoffeeShop)
    btnFireplace.removeEventListener("click", cards.buttonFireplace)
    btnGym.removeEventListener("click", cards.buttonGym)
    btnLofi.removeEventListener("click", cards.buttonLofi)
}

function addCardEvent() {
    btnForest.addEventListener("click", cards.buttonForest)
    btnRain.addEventListener("click", cards.buttonRain)
    btnCoffeeShop.addEventListener("click", cards.buttonCoffeeShop)
    btnFireplace.addEventListener("click", cards.buttonFireplace)
    btnGym.addEventListener("click", cards.buttonGym)
    btnLofi.addEventListener("click", cards.buttonLofi)
}

//controle do volume para cada modo(forest rain...)

sounds.soundForest.volume = 0.5
sounds.soundRain.volume = 0.5
sounds.soundCoffeeShop.volume = 0.5
sounds.soundFireplace.volume = 0.5
sounds.soundGym.volume = 0.5
sounds.soundLofi.volume= 0.5

//registro deslizar o slide do volume para cada modo(forest rain...)
sliderForest.addEventListener("mouseover", removeCardEvent)
sliderForest.addEventListener("mouseout", addCardEvent)
sliderForest.addEventListener("change", function (e) { sounds.soundForest.volume = e.currentTarget.value / 100; })

sliderRain.addEventListener("mouseover", removeCardEvent)
sliderRain.addEventListener("mouseout", addCardEvent)
sliderRain.addEventListener("change", function (e) { sounds.soundRain.volume = e.currentTarget.value / 100; })

sliderCoffeeShop.addEventListener("mouseover", removeCardEvent)
sliderCoffeeShop.addEventListener("mouseout", addCardEvent)
sliderCoffeeShop.addEventListener("change", function (e) { sounds.soundCoffeeShop.volume = e.currentTarget.value / 100; })

sliderFireplace.addEventListener("mouseover", removeCardEvent)
sliderFireplace.addEventListener("mouseout", addCardEvent)
sliderFireplace.addEventListener("change", function (e) { sounds.soundFireplace.volume = e.currentTarget.value / 100; })

sliderGym.addEventListener("mouseover", removeCardEvent)
sliderGym.addEventListener("mouseout", addCardEvent)
sliderGym.addEventListener("change", function (e) { sounds.soundGym.volume = e.currentTarget.value / 100; })

sliderLofi.addEventListener("mouseover", removeCardEvent)
sliderLofi.addEventListener("mouseout", addCardEvent)
sliderLofi.addEventListener("change", function (e) { sounds.soundLofi.volume = e.currentTarget.value / 100; })


function alignMain() {
    var screenHeight = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    if (screenHeight > 450) {
        document.querySelector('main').style.placeContent = "center";
    } else {
        document.querySelector('main').style.placeContent = "start";
    }
}

window.addEventListener("resize", alignMain);