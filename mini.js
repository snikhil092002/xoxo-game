let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn= document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

let turnO=true;//playerX,playerO

let arr=['apple','banana','litchi'];

// let arr2=[['apple','banana','litchi'],['potato','mushroom','carrot'],['pants','shirts','tshirts']];

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = () =>{
    turnO = true;
    EnableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("the box was clicked");
        if(turnO ){//playerX
            box.innerText = "X";
            turnO = false;
        }
        else{ //PlayerO
            box.innerText = "O";
            turnO = true;
        }
        box.disabled = true

        checkWinner();
    });
});
const disableBoxes= () =>{
    for( let box of boxes){
        box.disabled =ture;
    }
}
const EnableBoxes= () =>{
    for( let box of boxes){
        box.disabled =false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () =>{
    for(let patten of winPatterns){
        // console.log(patten[0],patten[1],patten[2]);
        
        // console.log(boxes[patten[0]].innerText,
        //             boxes[patten[1]].innerText,
        //             boxes[patten[2]].innerText);
   
    let pos1val= boxes[patten[0]].innerText;
    let pos2val=boxes[patten[1]].innerText;
    let pos3val=boxes[patten[2]].innerText;

    if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val === pos2val && pos2val === pos3val){
            console.log("Winner",pos1val);
            
            showWinner(pos2val);
           
        }
    }
  };
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click",resetGame);
