
const boxes = document.querySelectorAll(".box");
const gamestatus = document.querySelector(".game-status");
const restart = document.querySelector("button");

let gameactive = true;
let boardstatus = ['','','','','','','','',''];
let currplayer = "x";
//console.log(gamestatus);
gamestatus.innerHTML = "Start the Game";

const changestatus=()=>`Its player ${currplayer ==='x'? 1 : 2}'s turn!`

function playerchange()
{
    currplayer = currplayer === 'x' ? 'o' : 'x';
    gamestatus.innerHTML = changestatus();
}


boxes.forEach(box =>{
    box.addEventListener("click",()=>{
        const boxid = parseInt(box.id)-1;
        
        if(!gameactive || boardstatus[boxid] !== "") return;
        boardstatus[boxid]= currplayer;
       
        box.innerHTML = currplayer;
        gamewin();
    })
})

const winlist=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const gamewin = () =>{
    let won = false;
    winlist.forEach((list)=>{
        let a = boardstatus[list[0]];
        let b = boardstatus[list[1]];
        let c = boardstatus[list[2]];
        console.log(a,b,c);
        if(a==''||b==''||c==''||won) return;
        if(a==b && b==c)
        won = true;
    })
    if(won)
    {
        gamestatus.innerHTML = `Congratulations! player ${currplayer ==='x'? 1 : 2} won.`
        gameactive = false;
        return;
    }
    if(!boardstatus.includes(''))
    {
        gamestatus.innerHTML = `Its a Draw Match. Try a New game`;
        gameactive = false;
        return;
    }
    playerchange();
}


restart.addEventListener("click",()=>
{
    location.reload();
})