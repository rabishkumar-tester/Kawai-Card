
let audioPlayingState = false;
let intervalKey = 0;
let isActive = false;
window.addEventListener('click',(e)=>{
    let audio = document.querySelector('audio[data-key="song1"]');
    
    audio.volume = 0.2;
    
    if(!audioPlayingState){
        audio.play();
        audioPlayingState = true;
        if(!isActive) {
            intervalKey = setInterval(changeBackgroundColor,1000);
            isActive = true;
        }
    }else {
        audio.pause();
        audioPlayingState= false;
        if(isActive){
            console.log(intervalKey);
            clearInterval(intervalKey);
            isActive = false;
        }

    }
});

const containerElement = document.querySelector('.container');
const middleElement = document.querySelector('.middle');
const profileImage = document.querySelector('.pf-image-in');

let currColor = 'hsl(47, 0%, 63%)';
containerElement.style.backgroundColor = currColor;
middleElement.style.backgroundColor = currColor;
profileImage.style.borderColor = currColor;
let percentage = 0;

function changeBackgroundColor(){
    containerElement.style.backgroundColor = currColor;
    middleElement.style.backgroundColor = currColor;
    profileImage.style.borderColor = currColor;
    if(percentage >= 100) percentage = 0;
    percentage++;
    currColor = `hsl(47, ${percentage}%, 63%)`;
}


