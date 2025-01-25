
window.addEventListener('keydown',(e)=>{
    console.log(e);
    if(e.keyCode === 65){
        console.log("hello");
        const audio = document.querySelector('audio[data-key="song1"]');
        audio.play();
    }

});
