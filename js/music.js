var audio, playbtn, seekbar_bar;
function initAudioPlayer() {
	audio = new Audio();
	audio.src = "music/birthday.mp3";
	audio.loop = false;
	audio.play();
}

window.addEventListener("load", initAudioPlayer);