// Global Variables
const sounds = [{
        id: 001,
        name: "Rain",
        audioURL: "./assets/sounds/rain.mp3",
        backgroundURL: "./assets/images/rain.jpg"
    },
    {
        id: 002,
        name: "Water",
        audioURL: "./assets/sounds/water.mp3",
        backgroundURL: "./assets/images/water.jpg"
    }
]

// Process
createSoundCards("soundCards");
sounds.map(element => addSound(element.id, "soundCards"));

// Functions
function createSoundCards(id) {
    const main = document.getElementById("main");
    main.innerHTML = `<section id=${id} class="sound-cards"></section>`;
}

function addSound(id, parent) {

    // Variables
    let soundCards = document.getElementById(parent);
    let sound = sounds.filter(a => a.id == id);
    let soundURL = sound.reduce((a, b) => b.audioURL, 0);
    let soundBgURL = sound.reduce((a, b) => b.backgroundURL, 0);
    let soundName = sound.reduce((a, b) => b.name, 0);
    let soundID = `${soundName.toLowerCase()}-${id}`;
    let btnID = `btn-${soundID}`;
    let audio = new Audio(soundURL);
    let item = `<div id=${soundID} class="sound"><div><i id=${btnID} class="sound__icon fas fa-play"></i></div></div>`;

    // Inserts the sound element to its wrapper
    soundCards.insertAdjacentHTML('beforeend', item);

    // Add sound background
    let soundItem = document.getElementById(soundID);
    soundItem.style.background = `hsla(217, 0%, 51%, 0.6) url(${soundBgURL}) no-repeat center center/cover`;
    soundItem.style.backgroundBlendMode = "multiply";

    // Clicks to play or pause
    let btn = document.getElementById(btnID);
    btn.addEventListener("click", function () {
        btn.classList.toggle("fa-play");
        btn.classList.toggle("fa-pause");
        btn.className == "sound__icon fas fa-pause" ? audio.play() : audio.pause()
    }, false);
}