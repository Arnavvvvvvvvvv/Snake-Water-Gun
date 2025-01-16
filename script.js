let userscore=0;
let compscore=0;
let gameover=false;


const choices=document.querySelectorAll(".choice");
let msg= document.querySelector("#msg");

const userscoreboard=document.querySelector("#userscore");
const compscoreboard=document.querySelector("#compscore");

const retry= document.querySelector("#retryBtn");

//genrate computer choice
const gencompchoice=()=>{
    const options=["snake","water","gun"];
    const randint= Math.floor(Math.random()*3);
    return options[randint];
}

const drawgame= ()=>{
    console.log("Its a tie");
    msg.innerText="DRAW, play again.";
    msg.style.backgroundColor="rgb(249, 205, 147)";
    msg.style.color="black";
    if(userscoreboard.innerText=="5" || compscoreboard.innerText=="5"){
        msg.innerText="GameOver";
        msg.style.color="black";
        gameover=true;
    }
}
const showwinner=(userWin, userchoice, compchoice)=>{
    if(gameover){
        msg.innerText="GameOver";
        msg.style.color="black";
        msg.style.backgroundColor="rgb(249, 205, 147)";
        retry.style.display="block";
        return;
    }

    if(userWin){
        userscore++;
        userscoreboard.innerText=userscore;
        console.log("You win!");
        msg.innerText=`Wohoo! You win. Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="rgb(61, 208, 42)";
        msg.style.color="black";
        if(userscoreboard.innerText=="5"){
            msg.innerText="Kya baat hai jeetgye Congo!";
            gameover=true;
        }
    }
    else{
        compscore++;
        compscoreboard.innerText=compscore;
        console.log("You lose ");
        msg.innerText=`Oops, You lost as ${compchoice} beats ${userchoice}` ;
        msg.style.backgroundColor="rgb(211, 53, 53)";
        msg.style.color="white";
        if(compscoreboard.innerText=="5"){
            msg.innerText="HEHE LOSER, COMPUTER SE HAARGYE TCHH TCHH..";
            gameover=true;
        }
    }
}

retry.addEventListener('click', ()=>{
    resetGame();
});

const playgame=(userchoice) =>{
    console.log(`user chose= ${userchoice}`);
    const compchoice= gencompchoice();
    console.log(`computer chose= ${compchoice}`);
    if(userchoice==compchoice){
        drawgame();
    }
    else{
        let userWin=true;
        if(userchoice=="snake"){
            userWin= compchoice=="gun" ? false:true;
        }
        else if(userchoice=="water"){
            userWin= compchoice=="snake"? false:true;
        }
        else{
            userWin= compchoice=="water"? false:true;
        }
        showwinner(userWin, userchoice, compchoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice= choice.getAttribute("id")
        playgame(userchoice);
    })
})

function resetGame() {
    userscore="0";
    compscore="0";
    gameover=false;

    userscoreboard.innerText=userscore;
    compscoreboard.innerText=compscore;
    msg.innerText = 'Play your move';  
    retry.style.display="none";
    choices.forEach(choice => {
        choice.disabled = false; // Re-enable the buttons
    });
}

let theme=document.querySelector("#theme");
let bodyy=document.querySelector("body");
let modebtn= document.querySelector("#mode");
let currmode="light" //or dark

modebtn.addEventListener("click", ()=>{
    if(currmode=="light"){
        currmode="dark";
        bodyy.style.backgroundColor="black";
        bodyy.style.color="white";
    }
    else{
        currmode="light";
        bodyy.style.backgroundColor="white";
        bodyy.style.color="black";
    }
    console.log(`You current theme is ${currmode}.`);
})