// Global Variables
const sounds = [
    {
        id: "00144",
        name: "morning",
        audioURL: "./assets/sounds/morning-birds-singing.wav",
        imageURL: "./assets/images/sun.png"
    },
    {
        id: "0014443",
        name: "night",
        audioURL: "./assets/sounds/crickets-at-night-in-nature.wav",
        imageURL: "./assets/images/moon.png"
    },
    {
        id: "0014b43",
        name: "beach",
        audioURL: "./assets/sounds/beach-waves-with-children-ambience.wav",
        imageURL: "./assets/images/beach.png"
    },
    {
        id: "00123",
        name: "forest",
        audioURL: "./assets/sounds/quiet-forest-ambience.wav",
        imageURL: "./assets/images/forest.png"
    },
    {
        id: "00123z",
        name: "volcano",
        audioURL: "./assets/sounds/bubbling-volcano-lava-flow.wav",
        imageURL: "./assets/images/volcano.png"
    },
    {
        id: "002",
        name: "birds",
        audioURL: "./assets/sounds/birds-in-jungle.wav",
        imageURL: "./assets/images/macaw.png"
    },
    {
        id: "003",
        name: "rain",
        audioURL: "./assets/sounds/thunderstorm-and-rain.wav",
        imageURL: "./assets/images/rain.png"
    },
    {
        id: "004",
        name: "river",
        audioURL: "./assets/sounds/river-water-flowing.wav",
        imageURL: "./assets/images/river.png"
    },
    {
        id: "005",
        name: "sea",
        audioURL: "./assets/sounds/motorboat-on-the-sea.wav",
        imageURL: "./assets/images/sea.png"
    },
    {
        id: "006",
        name: "desert",
        audioURL: "./assets/sounds/desert-ambience.wav",
        imageURL: "./assets/images/desert.png"
    },
    {
        id: "007",
        name: "waterfall",
        audioURL: "./assets/sounds/waterfall-in-the-woods.wav",
        imageURL: "./assets/images/waterfall.png"
    },
    {
        id: "008",
        name: "wind",
        audioURL: "./assets/sounds/wild-light-wind.wav",
        imageURL: "./assets/images/wind.png"
    },
    {
        id: "009",
        name: "campfire",
        audioURL: "./assets/sounds/campfire-crackles.wav",
        imageURL: "./assets/images/campfire.png"
    }
]
const music = [
    {
        id: "001",
        name: "Nhạc nền",
        audioURL: "./assets/music/meditation_music_03.mp3",
        imageURL: "./assets/images/lotus.png"
    },
    {
        id: "00dds1",
        name: "Nhạc nền 2",
        audioURL: "./assets/music/meditation_music_03.mp3",
        imageURL: "./assets/images/lotus.png"
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
    let soundID = `${soundName.toLowerCase()}-${id}`;

    let audio = new Audio(soundURL);
    let item = `<div id=${soundID} class="sound sound--disabled"><div><img class="sound__image" src=${imageURL} alt=${soundName}></div></div>`;

    // Inserts the sound element to its wrapper
    soundCardsBody.insertAdjacentHTML('beforeend', item);

    // Add sound background
    let soundItem = document.getElementById(soundID);

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