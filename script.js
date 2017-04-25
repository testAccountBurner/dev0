var audio = new Audio('dev04.mp3');
audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
audio.autoplay = true;
audio.play();
