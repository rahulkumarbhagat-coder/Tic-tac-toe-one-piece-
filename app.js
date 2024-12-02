let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset-btn');
let newgamebtn = document.querySelector('#new-game');
let msgcontainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let turnO = true;
let count=0;
let player1 = '<img src= "3.gif" width="130px" height="130px" backgroundSize="contain"></img>'
let player2 = '<img src= "2.gif" width="130px" height="130px" backgroundSize="cover"></img>'
let body = document.getElementById('body');

console.log(player1);


let winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


boxes.forEach((box) => {    //to check
    box.addEventListener('click', function(){  //to check
        console.log('box was clicked');
        
        if(turnO){ //player1
            box.innerHTML = player1;
            box.setAttribute('data-player','Luffy')
            turnO = false;
        }
        else{ //payer2
            box.innerHTML = player2
            box.setAttribute('data-player', 'Zoro')
            turnO = true;
        }
        count++;
        box.disabled = true;
        checkWinner();
    })
});




const resetGame = () =>{
    turnO = true;
    enableboxes();
    count=0;
    boxes.forEach(box => {
        box.removeAttribute('data-player')
    });
    msgcontainer.classList.add('hide');
    
}

const enableboxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}

const disableboxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

function showDraw(){
    msg.innerHTML = '<img src="surprised-one.gif" style="box-shadow: 17px 18px 34px grey;"> <br> Its a Draw';  // Use backticks ``
    disableboxes();
    msgcontainer.classList.remove('hide');
}

function showWinner(winner){
    if(winner=='Luffy'){
        // document.body.innerHTML=''
        msg.innerHTML = `CONGRATULATIONS,<br> WINNER WINNER CHICKEN DINNER FOR ${winner} <br> <img src="luffy-luffy-gear-5.gif" style="box-shadow: 17px 18px 34px grey;">`
        disableboxes();
        msgcontainer.classList.remove('hide');
    }
    else{
        // document.body.innerHTML=''
        msg.innerHTML = `CONGRATULATIONS,<br> WINNER WINNER CHICKEN DINNER FOR ${winner} <img src="zoro-one-piece.gif" style="box-shadow: 17px 18px 34px grey;">`;  // Use backticks ``
        disableboxes();
        msgcontainer.classList.remove('hide');
    }
   
}

const checkWinner = ()=>{     //to check
    let winnerFound = false;
    for(let pattern of winPattern){   //to check
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText);

            let pos1 = boxes[pattern[0]].getAttribute('data-player');
            let pos2 = boxes[pattern[1]].getAttribute('data-player');
            let pos3 = boxes[pattern[2]].getAttribute('data-player');


                if(pos1 && pos1 == pos2 && pos2 == pos3){
                    console.log("Winner", pos1);
                    showWinner(pos1);
                    winnerFound= true;
                    break;
                }
                
            }
            if(!winnerFound && count==9){
                showDraw();
    }

   
}
newgamebtn.addEventListener('click', resetGame);
resetbtn.addEventListener('click', resetGame);

