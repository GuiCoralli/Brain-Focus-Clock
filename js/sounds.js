const soundForest = new Audio('./sounds/forest.wav')
const soundRain = new Audio("./sounds/rain.wav")
const soundCoffeeShop = new Audio("./sounds/coffeeshop.wav")
const soundFireplace = new Audio("./sounds/fireplace.wav")
const soundGym = new Audio ("./sounds/Gym.wav")
const soundLofi = new Audio ("./sounds/Lofi.wav")
const soundButtonPress = new Audio("./sounds/audios_button-press.wav")
const soundKitchenTimer = new Audio("./sounds/kitchentimer.wav")

export function Sounds() {
    
    function stopSounds() {
        soundForest.pause()
        soundRain.pause()
        soundCoffeeShop.pause()
        soundFireplace.pause()
        soundGym.pause()
        soundLofi.pause()
    }

    function playSoundForest() {
        stopSounds()
        soundForest.play()
        soundForest.loop = true
    }

    function playSoundRain() {
        stopSounds()
        soundRain.play()
        soundRain.loop = true
    }

    function playSoundCoffeeShop() {
        stopSounds()
        soundCoffeeShop.play()
        soundCoffeeShop.loop = true
    }

    function playSoundFireplace() {
        stopSounds()
        soundFireplace.play()
        soundFireplace.loop = true
    }

    function playSoundGym() {
        stopSounds()
        soundGym.play()
        playSoundGym.loop = true
    }

    function playSoundLofi() {
        stopSounds()
        soundLofi.play()
        playSoundLofi.loop = true
    }

    return {
        playSoundForest,
        playSoundRain,
        playSoundCoffeeShop,
        playSoundFireplace,
        playSoundGym,
        playSoundLofi,
        stopSounds,
        soundButtonPress,
        soundKitchenTimer,
        soundForest,
        soundRain,
        soundCoffeeShop,
        soundFireplace,
        soundGym,
        soundLofi
    }
}