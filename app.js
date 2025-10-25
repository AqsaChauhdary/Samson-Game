let gameSeq = [];
let userSeq = [];
let highest = 0;

let level = 0;
let gameStart = false;

let divs = document.querySelectorAll(".inner");

document.addEventListener("keypress", function(){
    if(gameStart == false){
        gameStart = true;
        console.log("Game started");

        levelUp();
    }
})

function btnPress(event){
    
    userFlash(event.target);
  
    let pressBtnByUser = event.target.getAttribute("id");
    userSeq.push(pressBtnByUser);

    compareGameAndUserSequence(userSeq.length - 1);
}

function compareGameAndUserSequence(idx){
  
   if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(() => {
                levelUp();
                userSeq = [];
            },500)
        }
   } else {
        if(highest < level){
            highest = level;
             document.querySelector('body').classList.add("gameOver");
        document.querySelector("h3").innerHTML = `GAME OVER! Your score was ${level}.<br>Highest Score !!!! Congrats <br> Press any key to restart`;
        setTimeout(() => {
            document.querySelector('body').classList.remove("gameOver");
        },500);
        userSeq = [];
        gameStart = false;
        gameSeq = [];
        level = 0;
        }
        else {
        document.querySelector('body').classList.add("gameOver");
        document.querySelector("h3").innerHTML = `GAME OVER! Your score was ${level}.<br>Press any key to restart`;
        setTimeout(() => {
            document.querySelector('body').classList.remove("gameOver");
        },500);
        userSeq = [];
        gameStart = false;
        gameSeq = [];
        level = 0;
    }
   }
}
for(let i=0; i<divs.length; i++){

    divs[i].addEventListener("click", btnPress);

}

function gameFlash(btn){

    btn.classList.add("color");
    setTimeout(() =>{
        btn.classList.remove("color");
    }, 350);
}

function userFlash(btn){

    btn.classList.add("userFlash");
    setTimeout(() =>{
        btn.classList.remove("userFlash");
    }, 150);
}

function levelUp(){
    ++level;
    document.querySelector("h3").innerHTML = `Level ${level}`;
        
    let randomDivFlash = Math.floor(Math.random() * 4);
    let btnId = divs[randomDivFlash].getAttribute("id");

    gameSeq.push(btnId);
    let flashBtn = document.querySelector(`#${btnId}`);

    console.log(gameSeq);
   
    gameFlash(flashBtn);
}