function PlayUISound() {
    var audio = document.getElementsByTagName("audio")[0];
    audio.play();
}


function StopUISound() {
    var audio = document.getElementsByTagName("audio")[0];
    thissound.pause();
    thissound.currentTime = 0;
}
