let audioElement=new Audio('wewillrockyou.mp3');
let masterplay=document.getElementById('masterplay');
let myProgressBar=document.getElementById('myProgressBar');  
let forwardplay=document.getElementById('forwardplay');
let gif=document.getElementById('gif'); 
let backwardplay=document.getElementById('backwardplay');
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle'); 
        masterplay.classList.add('fa-pause-circle'); 
        gif.style.opacity = 1;
    } 
    else{
        audioElement.pause(); 
        masterplay.classList.remove('fa-pause-circle'); 
        masterplay.classList.add('fa-play-circle'); 
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    console.log("timeupdate"); 
   let progress=parseFloat((audioElement.currentTime/audioElement.duration)*100); 
    console.log(progress); 
   // console.log(audioElement.currentTime);
    myProgressBar.value = progress;

}) 
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
}) 
forwardplay.addEventListener('click',()=>{ 
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100 +5; 
})

backwardplay.addEventListener('click',()=>{ 
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100 -5; 
})