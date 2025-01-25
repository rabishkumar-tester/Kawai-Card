
let audioPlayingState = false
window.addEventListener('click',(e)=>{
    let audio = document.querySelector('audio[data-key="song1"]');
    
    audio.volume = 0.2;
    
    if(!audioPlayingState){
        audio.play();
        audioPlayingState = true;
    }else {
        audio.pause();
        audioPlayingState= false;
    }
});
