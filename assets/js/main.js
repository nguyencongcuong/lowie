// Global Variables
const sounds = [
    {
        id: "001",
        name: "forest",
        audioURL: "./assets/sounds/rain.mp3",
        imageURL: "./assets/images/forest.png"
    },
    {
        id: "002",
        name: "macaw",
        audioURL: "./assets/sounds/rain.mp3",
        imageURL: "./assets/images/macaw.png"
    },
    {
        id: "003",
        name: "rain",
        audioURL: "./assets/sounds/rain.mp3",
        imageURL: "./assets/images/rain.png"
    },
    {
        id: "004",
        name: "river",
        audioURL: "./assets/sounds/rain.mp3",
        imageURL: "./assets/images/river.png"
    },
    {
        id: "005",
        name: "sea",
        audioURL: "./assets/sounds/rain.mp3",
        imageURL: "./assets/images/sea.png"
    },
    {
        id: "006",
        name: "water",
        audioURL: "./assets/sounds/rain.mp3",
        imageURL: "./assets/images/water.png"
    },
    {
        id: "007",
        name: "waterfall",
        audioURL: "./assets/sounds/rain.mp3",
        imageURL: "./assets/images/waterfall.png"
    },
    {
        id: "008",
        name: "wind",
        audioURL: "./assets/sounds/rain.mp3",
        imageURL: "./assets/images/wind.png"
    },
    {
        id: "009",
        name: "campfire",
        audioURL: "./assets/sounds/rain.mp3",
        imageURL: "./assets/images/campfire.png"
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
    let imageURL = sound.reduce((a, b) => b.imageURL, 0);
    let soundName = sound.reduce((a, b) => b.name, 0);
    let soundID = `${soundName.toLowerCase()}-${id}`;

    let audio = new Audio(soundURL);
    let item = `<div id=${soundID} class="sound sound--disabled"><div><img class="sound__image" src=${imageURL} alt=${soundName}></div></div>`;

    // Inserts the sound element to its wrapper
    soundCards.insertAdjacentHTML('beforeend', item);

    // Add sound background
    let soundItem = document.getElementById(soundID);
    // soundItem.style.background = `hsla(217, 0%, 51%, 1) url(${soundBgURL}) no-repeat center center/cover`;
    // soundItem.style.backgroundBlendMode = "multiply";

    // Clicks to play or pause

    soundItem.addEventListener("click", function () {
        soundItem.classList.toggle("sound--disabled");
        soundItem.classList.toggle("sound--enabled");
        if (soundItem.className == "sound--enabled") {

            if (typeof audio.loop == 'boolean') {
                audio.loop = true;
            } else {
                audio.addEventListener('ended', function () {
                    this.currentTime = 0;
                    this.play();
                }, false);
            }

            audio.play();
        } else {
            audio.pause();
        }
    }, false);
}