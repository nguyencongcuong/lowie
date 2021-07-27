// * VARIABLES
const audios = [
    {
        id: "RzpYJ",
        name: "morning",
        audioURL: "./assets/sounds/morning-birds-singing.wav",
        imageURL: "./assets/images/sun.png",
        category: "sound"
    },
    {
        id: "jXXQK",
        name: "night",
        audioURL: "./assets/sounds/crickets-at-night-in-nature.wav",
        imageURL: "./assets/images/moon.png",
        category: "sound"
    },
    {
        id: "oWHEz",
        name: "rain",
        audioURL: "./assets/sounds/thunderstorm-and-rain.wav",
        imageURL: "./assets/images/rain.png",
        category: "sound"
    },    
    {
        id: "G19a0",
        name: "snowfall",
        audioURL: "./assets/sounds/falling-snow.wav",
        imageURL: "./assets/images/snow.png",
        category: "sound"
    }, 
    {
        id: "bv2DU",
        name: "sea",
        audioURL: "./assets/sounds/motorboat-on-the-sea.wav",
        imageURL: "./assets/images/sea.png",
        category: "sound"
    },       
    {
        id: "FApyV",
        name: "beach",
        audioURL: "./assets/sounds/beach-waves-with-children-ambience.wav",
        imageURL: "./assets/images/beach.png",
        category: "sound"
    },
    {
        id: "FwrPO",
        name: "river",
        audioURL: "./assets/sounds/river-water-flowing.wav",
        imageURL: "./assets/images/river.png",
        category: "sound"
    },    
    {
        id: "PTYsf",
        name: "waterfall",
        audioURL: "./assets/sounds/waterfall-in-the-woods.wav",
        imageURL: "./assets/images/waterfall.png",
        category: "sound"
    },      
    {
        id: "unsUX",
        name: "forest",
        audioURL: "./assets/sounds/quiet-forest-ambience.wav",
        imageURL: "./assets/images/forest.png",
        category: "sound"
    },
    {
        id: "BiTJa",
        name: "volcano",
        audioURL: "./assets/sounds/bubbling-volcano-lava-flow.wav",
        imageURL: "./assets/images/volcano.png",
        category: "sound"
    },  
    {
        id: "MFQ8x",
        name: "desert",
        audioURL: "./assets/sounds/desert-ambience.wav",
        imageURL: "./assets/images/desert.png",
        category: "sound"
    },
    {
        id: "FN4Pq",
        name: "wind",
        audioURL: "./assets/sounds/wild-light-wind.wav",
        imageURL: "./assets/images/wind.png",
        category: "sound"
    },
    {
        id: "WDGYy",
        name: "campfire",
        audioURL: "./assets/sounds/campfire-crackles.wav",
        imageURL: "./assets/images/campfire.png",
        category: "sound"
    },
    {
        id: "aGmeW",
        name: "birds",
        audioURL: "./assets/sounds/birds-in-jungle.wav",
        imageURL: "./assets/images/macaw.png",
        category: "sound"
    },    
    {
        id: "x6hQ5",
        name: "farm",
        audioURL: "./assets/sounds/farm-animals-in-the-morning.wav",
        imageURL: "./assets/images/farm.png",
        category: "sound"
    },
    {
        id: "89iWa",
        name: "A New Beginning",
        audioURL: "./assets/music/a-new-beginning.mp3",
        imageURL: null,
        category: "background music"
    },
    {
        id: "7ferN",
        name: "Forgetfullness Potion",
        audioURL: "./assets/music/forgetfullness-potion.mp3",
        imageURL: null,
        category: "background music"
    },
    {
        id: "Qw8fY",
        name: "Healing Spell",
        audioURL: "./assets/music/healing-spell.mp3",
        imageURL: null,
        category: "background music"
    }, 
    {
        id: "O3cXm",
        name: "Morning Blessings",
        audioURL: "./assets/music/morning-blessings.mp3",
        imageURL: null,
        category: "background music"
    },
    {
        id: "CL8o3",
        name: "Purification",
        audioURL: "./assets/music/purification.mp3",
        imageURL: null,
        category: "background music"
    }, 
    {
        id: "F7Mgd",
        name: "Sleep Chant",
        audioURL: "./assets/music/sleep-chant.mp3",
        imageURL: null,
        category: "background music"
    }    
]
const soundItemTemplate = (id, soundName, imageURL) => `<div id=${id} class="audio inactive"><img class="sound__image" src=${imageURL} alt=${soundName}></div>`;
const musicItemTemplate = (id, musicName) => `<div id=${id} class="audio inactive">${musicName}</div>`;

// * MAIN
createCollection("soundCards", "sound-card", "Âm thanh");
audios
    .filter(a => a.category == "sound")
    .map(b => addAudio(b.id, soundItemTemplate(b.id, b.name, b.imageURL), "soundCardsBody", audios));
createCollection("musicCards", "music-card", "Nhạc nền");
audios
    .filter(a => a.category == "background music")
    .map(b => addAudio(b.id, musicItemTemplate(b.id, b.name), "musicCardsBody", audios));

// * FUNCTIONS

/**
 * ? Tạo HTML cha chứa các phần tử con là audio
 * @param {string} idName 
 * @param {string} className 
 * @param {string} title 
 */
function createCollection(idName, className, title) {
    const main = document.getElementById("main");
    const item = `
        <section id=${idName} class=${className}>
            <header class=${className}__header><h1 class=${className}__heading>${title}</h1></header>
            <div id=${idName}Body class=${className}__body></div>
        </section>`
    main.insertAdjacentHTML('beforeend', item);
}

/**
 * ? Xác định file audio và truy xuất thuộc tính audioURL
 * ? Tạo HTML cho phần tử audio đó và thêm vào HTML cha
 * ? Chạy hàm activateAudio()
 * @param {string} id 
 * @param {string} divItem 
 * @param {string} parentID 
 * @param {array} audioCollection 
 */
function addAudio(id, divItem, parentID, audioCollection) {
    const cardBody = document.getElementById(parentID);
    const obj = audioCollection.filter(e => e.id == id);
    const audioURL = obj[0].audioURL;
    const audioHTML = divItem; 
    cardBody.insertAdjacentHTML("beforeend", audioHTML);
    activateAudio(id, audioURL);
}

/**
 * ? Load file audio
 * ? Chơi hoặc tạm dừng sau mỗi lần click chuột
 * ? Tự động replay
 * @param {string} id 
 * @param {string} url 
 */
function activateAudio(id, url) {
    const audio = new Audio(url);
    const item = document.getElementById(id);
    item.addEventListener("click", function () {
        item.classList.toggle("inactive");
        item.classList.toggle("active");
        if (item.classList.contains("active")) {
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