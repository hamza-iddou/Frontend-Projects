let progress = document.getElementById(`progress`);
let song = document.getElementById(`song`);
let controls = document.getElementById(`ctrlIcon`);


song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
};


function playpause() {
    if (controls.classList.contains("fa-pause")) {
        song.pause();
        controls.classList.remove("fa-pause");
        controls.classList.add("fa-play");
    } else {
        song.play();
        controls.classList.remove("fa-play");
        controls.classList.add("fa-pause");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    controls.classList.remove("fa-play");
    controls.classList.add("fa-pause");
}