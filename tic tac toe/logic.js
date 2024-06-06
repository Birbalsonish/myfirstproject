let boxes=document.querySelectorAll(".box");
let turnO=true;
let btn=document.querySelector(".btn");

const winpattern=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [6,7,8],
    [3,4,5]
];



boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO===true){
            box.innerText="O";
            turnO=false;
            
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkpattern();
    }
    )
    
});
const checkpattern=() =>{
   outer: for (let pattern of winpattern){
        let position1=boxes[pattern[0]].innerText;
        let position2=boxes[pattern[1]].innerText;
        let position3=boxes[pattern[2]].innerText;
        if(position1 !=="" && position2 !=="" && position3 !==""){
       if(position1===position2 && position2==position3){
            console.log("winner");
            showwinner(position1);
            gameend();
        };
    };

    }
    
    
};

const showwinner=(winner) =>{
    let win=document.querySelector(".win");
    win.classList.remove("hide");
    win.innerText=`Winner is ${winner}`
};
const gameend=() =>{
for(let box of boxes){
box.disabled=true;
}};
const enable=() =>{
    for(let box of boxes){
    box.disabled=false;
    box.innerText="";
    }};
 const newgame=()=>{
    turnO=true;
    enable();
 }   
btn.addEventListener("click", newgame);