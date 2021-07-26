// Global Variables
const sounds = [
    {
        id: "RzpYJ",
        name: "morning",
        audioURL: "./assets/sounds/morning-birds-singing.wav",
        imageURL: "./assets/images/sun.png"
    },
    {
        id: "jXXQK",
        name: "night",
        audioURL: "./assets/sounds/crickets-at-night-in-nature.wav",
        imageURL: "./assets/images/moon.png"
    },
    {
        id: "FApyV",
        name: "beach",
        audioURL: "./assets/sounds/beach-waves-with-children-ambience.wav",
        imageURL: "./assets/images/beach.png"
    },
    {
        id: "unsUX",
        name: "forest",
        audioURL: "./assets/sounds/quiet-forest-ambience.wav",
        imageURL: "./assets/images/forest.png"
    },
    {
        id: "BiTJa",
        name: "volcano",
        audioURL: "./assets/sounds/bubbling-volcano-lava-flow.wav",
        imageURL: "./assets/images/volcano.png"
    },
    {
        id: "aGmeW",
        name: "birds",
        audioURL: "./assets/sounds/birds-in-jungle.wav",
        imageURL: "./assets/images/macaw.png"
    },
    {
        id: "oWHEz",
        name: "rain",
        audioURL: "./assets/sounds/thunderstorm-and-rain.wav",
        imageURL: "./assets/images/rain.png"
    },
    {
        id: "FwrPO",
        name: "river",
        audioURL: "./assets/sounds/river-water-flowing.wav",
        imageURL: "./assets/images/river.png"
    },
    {
        id: "bv2DU",
        name: "sea",
        audioURL: "./assets/sounds/motorboat-on-the-sea.wav",
        imageURL: "./assets/images/sea.png"
    },
    {
        id: "MFQ8x",
        name: "desert",
        audioURL: "./assets/sounds/desert-ambience.wav",
        imageURL: "./assets/images/desert.png"
    },
    {
        id: "PTYsf",
        name: "waterfall",
        audioURL: "./assets/sounds/waterfall-in-the-woods.wav",
        imageURL: "./assets/images/waterfall.png"
    },
    {
        id: "FN4Pq",
        name: "wind",
        audioURL: "./assets/sounds/wild-light-wind.wav",
        imageURL: "./assets/images/wind.png"
    },
    {
        id: "WDGYy",
        name: "campfire",
        audioURL: "./assets/sounds/campfire-crackles.wav",
        imageURL: "./assets/images/campfire.png"
    }
]
const music = [
    {
        id: "89iWa",
        name: "A New Beginning",
        audioURL: "./assets/music/a-new-beginning.mp3",
    },
    {
        id: "7ferN",
        name: "Forgetfullness Potion",
        audioURL: "./assets/music/forgetfullness-potion.mp3",
    },
    {
        id: "Qw8fY",
        name: "Healing Spell",
        audioURL: "./assets/music/healing-spell.mp3",
    }, {
        id: "O3cXm",
        name: "Morning Blessings",
        audioURL: "./assets/music/morning-blessings.mp3",
    },
    {
        id: "CL8o3",
        name: "Purification",
        audioURL: "./assets/music/purification.mp3",
    }, {
        id: "F7Mgd",
        name: "Sleep Chant",
        audioURL: "./assets/music/sleep-chant.mp3",
    }
]

// Process
createCards("soundCards", "sound-card", "Âm thanh");
sounds.map(element => addSound(element.id, "soundCardsBody", sounds));

createCards("musicCards", "music-card", "Nhạc nền");
music.map(element => addMusic(element.id, "musicCardsBody", music));

// Functions
function createCards(idName, className, title) {
    const main = document.getElementById("main");
    const item = `
        <section id=${idName} class=${className}>
            <header class=${className}__header><h1 class=${className}__heading>${title}</h1></header>
            <div id=${idName}Body class=${className}__body></div>
        </section>`
    main.insertAdjacentHTML('beforeend', item);
}

function addSound(id, parent, library) {

    // Variables
    let soundCardsBody = document.getElementById(parent);
    let sound = library.filter(a => a.id == id);
    let soundURL = sound.reduce((a, b) => b.audioURL, 0);
    let imageURL = sound.reduce((a, b) => b.imageURL, 0);
    let soundName = sound.reduce((a, b) => b.name, 0);

    let audio = new Audio(soundURL);
    let item = `<div id=${id} class="sound sound--disabled"><img class="sound__image" src=${imageURL} alt=${soundName}></div>`;

    // Inserts the sound element to its wrapper
    soundCardsBody.insertAdjacentHTML('beforeend', item);

    // Add sound background
    let soundItem = document.getElementById(id);

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

function addMusic(id, parent, library) {

    // Variables
    let musicCardsBody = document.getElementById(parent);
    let music = library.filter(a => a.id == id);
    let musicURL = music[0].audioURL;
    let musicName = music[0].name;
    let musicID = id;

    let audio = new Audio(musicURL);
    let item = `<div id=${musicID} class="music music--disabled">${musicName}</div>`;

    // Inserts the music element to its wrapper
    musicCardsBody.insertAdjacentHTML('beforeend', item);

    // Add music background
    let musicItem = document.getElementById(musicID);

    // Clicks to play or pause
    musicItem.addEventListener("click", function () {

        musicItem.classList.toggle("music--disabled");
        musicItem.classList.toggle("music--enabled");

        if (musicItem.className == "music music--enabled") {

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