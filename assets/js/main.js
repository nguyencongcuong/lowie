// Global Variables
const sounds = [
    {
        id: "001",
        name: "forest",
        audioURL: "./assets/sounds/forest.mp3",
        imageURL: "./assets/images/forest.png"
    },
    {
        id: "002",
        name: "macaw",
        audioURL: "./assets/sounds/macaw.mp3",
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
        audioURL: "./assets/sounds/river.mp3",
        imageURL: "./assets/images/river.png"
    },
    {
        id: "005",
        name: "sea",
        audioURL: "./assets/sounds/sea.mp3",
        imageURL: "./assets/images/sea.png"
    },
    {
        id: "006",
        name: "water",
        audioURL: "./assets/sounds/water.mp3",
        imageURL: "./assets/images/water.png"
    },
    {
        id: "007",
        name: "waterfall",
        audioURL: "./assets/sounds/waterfall.mp3",
        imageURL: "./assets/images/waterfall.png"
    },
    {
        id: "008",
        name: "wind",
        audioURL: "./assets/sounds/wind.mp3",
        imageURL: "./assets/images/wind.png"
    },
    {
        id: "009",
        name: "campfire",
        audioURL: "./assets/sounds/campfire.mp3",
        imageURL: "./assets/images/campfire.png"
    }
]
const backgroundAudio = [
    {
        id: "001",
        name: "meditation_music_03",
        audioURL: "./assets/background-audios/meditation_music_03.mp3",
        imageURL: "./assets/images/lotus.png"
    }
]

// Process
createSoundCards("soundCards");
sounds.map(element => addSound(element.id, "soundCards", sounds));
createSoundCards("backgroundAudioCards");
backgroundAudio.map(element => addSound(element.id, "backgroundAudioCards", backgroundAudio));

// Functions
function createSoundCards(id) {
    const main = document.getElementById("main");
    const item = `<section id=${id} class="sound-cards"></section>`
    main.insertAdjacentHTML('beforeend', item);
}

function addSound(id, parent, library) {

    // Variables
    let soundCards = document.getElementById(parent);
    let sound = library.filter(a => a.id == id);
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
        
        if (soundItem.className == "sound sound--enabled") {

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