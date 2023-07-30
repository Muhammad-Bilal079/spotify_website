console.log("welcome to spotify");
// initialize the variable
let songIndex = 0;
let audioElement = new Audio('1.mp3.mpeg');
let masterplay = document.getElementById('masterplay');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
// let songsitem =Array.from(getElementByClassName('songitem'));

let songs = [
    { songName: "let me love you", filePath: "songs/1.mp3.mpeg", coverPath: "covers/1.jpg" },
    { songName: "arabic remix", filePath: "songs/2.mp3.mpeg", coverPath: "covers/2.jpg" },
    { songName: "tokio", filePath: "songs/3.mp3.mpeg", coverPath: "covers/3.jpg" },
    { songName: "wanted", filePath: "songs/4.mp3.mpeg", coverPath: "covers/4.jpg" },
    { songName: "ceribero", filePath: "songs/1.mp3.mpeg", coverPath: "covers/5.jpg" },
    { songName: "black box", filePath: "songs/2.mp3.mpeg", coverPath: "covers/6.jpg" },
]
// this 3line of code may cause error and 1 line above for songs item
// songsitem.forEach((element,i)=>{
//     console.log(element,i);
//     element.getElementsByTagName("img")[0].src=songs[i].coverPath;
//     element.getElementByClassName('songName')[0].innerText=songs[i].songName;
// });

// audioElement.play();
// play or paused kay button kay events hain jo play ho raha hai mager pause nahi horaha****************
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

// listen to events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    // update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressbar.value = progress;
});

progressbar.addEventListener('change', () => {
    audioElement.currentTime = progressbar.value * audioElement.duration / 100
})