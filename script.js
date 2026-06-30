// ===============================
// Friendship Website JavaScript
// Hrishi 🤝 Yash 💙
// ===============================


// Loading Screen

window.addEventListener("load",()=>{

setTimeout(()=>{

let loader=document.getElementById("loader");

if(loader)
loader.style.display="none";

},1500);

});



// Password Unlock

function unlock(){

let password=document.getElementById("pass").value;


if(password==="Aakash"){

document.getElementById("lock").classList.remove("active");

document.getElementById("welcome").classList.add("active");

startTyping();

confetti();

}

else{

alert("Wrong Password 💔 Try Again");

}

}



// Typing Effect

function startTyping(){

let text="Some friends become family, and you are one of them.";

let i=0;

let element=document.getElementById("typing");


let interval=setInterval(()=>{

element.innerHTML=text.substring(0,i);

i++;

if(i>text.length)

clearInterval(interval);


},70);


}



// Music Control

let music=document.getElementById("music");


function musicToggle(){

if(music.paused){

music.play();

}

else{

music.pause();

}

}



// Page Transition


function openPage(id){

document.querySelectorAll(".page")
.forEach(page=>{

page.classList.remove("active");

});


document.getElementById(id)
.classList.add("active");


}



// Floating Stars

function createStars(){

for(let i=0;i<50;i++){

let star=document.createElement("div");

star.className="star";

star.innerHTML="✨";


star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";


star.style.animationDelay=
Math.random()*5+"s";


document.body.appendChild(star);

}

}

createStars();





// Live Clock

setInterval(()=>{

let clock=document.getElementById("clock");


if(clock){

clock.innerHTML=
new Date().toLocaleTimeString();

}


},1000);






// Friendship Reasons


let reasons=[

"You always make me smile 💙",
"You understand me without words",
"You support me always",
"You are my biggest strength",
"You make boring days fun",
"You are my chosen family",
"You never judge me",
"You believe in me",
"You create unforgettable memories",
"You are my forever friend"

];


let reasonIndex=0;



function nextReason(){

reasonIndex++;

if(reasonIndex>=reasons.length)

reasonIndex=0;


document.getElementById("reason")
.innerHTML=reasons[reasonIndex];


updateProgress();

}




function previousReason(){

reasonIndex--;

if(reasonIndex<0)

reasonIndex=reasons.length-1;


document.getElementById("reason")
.innerHTML=reasons[reasonIndex];


updateProgress();

}




function randomReason(){

reasonIndex=
Math.floor(Math.random()*reasons.length);


document.getElementById("reason")
.innerHTML=reasons[reasonIndex];


updateProgress();

}



function updateProgress(){

let bar=document.getElementById("progress");

if(bar)

bar.style.width=
((reasonIndex+1)/reasons.length)*100+"%";


}







// Unlock Friendship Promises


function unlockPromise(card,text){

card.innerHTML=text;

card.style.boxShadow=
"0 0 30px cyan";

}





// Gallery Lightbox


function openImage(img){

let box=document.createElement("div");

box.style.position="fixed";

box.style.inset="0";

box.style.background="rgba(0,0,0,.8)";

box.style.display="flex";

box.style.alignItems="center";

box.style.justifyContent="center";


let image=document.createElement("img");

image.src=img.src;

image.style.maxWidth="90%";

image.style.borderRadius="20px";


box.appendChild(image);


box.onclick=()=>box.remove();


document.body.appendChild(box);


}







// Virtual Gifts


let gifts=[

"🎧 Headphones",

"🍕 Pizza",

"🍫 Chocolate",

"🎮 Gaming Console",

"🏆 Trophy",

"⌚ Watch",

"📖 Memory Book",

"🤝 Friendship Band"

];


function openGift(){

let gift=
gifts[Math.floor(Math.random()*gifts.length)];


alert(
"Your Friendship Gift: "+gift
);

}





// Friendship Quiz


function quiz(){

let answer=
prompt(
"Who is Hrishi's best friend?"
);


if(answer.toLowerCase()
.includes("yash"))

{

alert(
"Correct 💙 Forever Friends!"
);

}

else{

alert(
"Try Again 😄"
);

}

}






// Guess Number Game


function guessNumber(){

let random=
Math.floor(Math.random()*10)+1;


let user=
prompt(
"Guess a friendship number 1-10"
);



if(user==random)

alert("Perfect Friendship Score 💙");


else

alert(
"The number was "+random
);


}






// Rock Paper Scissors


function rockPaper(){

let choices=[
"Rock",
"Paper",
"Scissors"
];


let computer=
choices[
Math.floor(Math.random()*3)
];


let user=
prompt(
"Choose Rock Paper Scissors"
);



alert(
"You: "+user+
"\nFriendship AI: "+computer
);


}






// Tic Tac Toe Simple


let turn="X";


function play(cell){

if(cell.innerHTML===""){

cell.innerHTML=turn;

turn=
turn==="X"?"O":"X";

}

}





// Confetti


function confetti(){


for(let i=0;i<150;i++){


let c=document.createElement("div");


c.innerHTML="🎉";


c.style.position="fixed";


c.style.left=
Math.random()*100+"%";


c.style.top="-20px";


c.style.fontSize=
Math.random()*20+10+"px";


c.style.animation=
"fall 4s linear";


document.body.appendChild(c);



setTimeout(()=>{

c.remove();

},4000);


}

}





// Fireworks


function fireworks(){


for(let i=0;i<80;i++){


let fire=document.createElement("div");


fire.innerHTML="✨";


fire.style.position="fixed";


fire.style.left=
Math.random()*100+"%";


fire.style.top=
Math.random()*100+"%";


fire.style.fontSize="30px";


document.body.appendChild(fire);



setTimeout(()=>{

fire.remove();

},2000);


}


}







// Download Letter


function downloadLetter(){


let letter=

`
Dear Yash 💙


Thank you for being my best friend.

You are not just a friend,
you are family.

Every laugh, every memory,
and every adventure matters.

No matter where life takes us,

Hrishi 🤝 Yash

Forever Friends.

`;



let blob=
new Blob([letter],
{type:"text/plain"});



let link=
document.createElement("a");


link.href=
URL.createObjectURL(blob);


link.download=
"Friendship_Letter_Yash.txt";


link.click();


}







// Screenshot Button


function screenshot(){

alert(
"Use your device screenshot option 💙"
);

}






// Share Button


function shareFriendship(){


if(navigator.share){


navigator.share({

title:
"Hrishi 🤝 Yash Friendship",

text:
"Forever Best Friends 💙"


});


}

else{


alert(
"Share not supported"
);

}

}






// Dark Mode


function darkMode(){

document.body.classList.toggle(
"dark"
);

}





// Cursor Glow


document.addEventListener(
"mousemove",
(e)=>{


let glow=
document.createElement("div");


glow.style.position="fixed";

glow.style.left=
e.clientX+"px";


glow.style.top=
e.clientY+"px";


glow.style.width="20px";

glow.style.height="20px";


glow.style.background="cyan";

glow.style.borderRadius="50%";


glow.style.pointerEvents="none";


glow.style.opacity=".5";


document.body.appendChild(glow);



setTimeout(()=>{

glow.remove();

},500);



});
