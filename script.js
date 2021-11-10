let board=[];

let table_element=document.getElementById("board");

let iswhite=true;

for(let i=0; i<8; i++){
    board[i]=[];
    let tr_element=document.createElement("tr");
    table_element.appendChild(tr_element);
    for(let j=0; j<8; j++){
        board[i][j]= document.createElement("td");
        board[i][j].isvisited=false;
        board[i][j].startfrom=null;
        board[i][j].i=i;
        board[i][j].j=j;
        let square_color=iswhite ? "white" : "chocolate";
        board[i][j].style.backgroundColor=square_color;
        tr_element.appendChild(board[i][j]); 

        iswhite=!iswhite;	
    }
    iswhite=!iswhite;	
}

let start, end;
newPosition();

function newPosition(){
    start =board[RandomInt(8)][RandomInt(8)];
    end =board[RandomInt(8)][RandomInt(8)];
    start.isvisited=true;
    start.innerHTML='&#9822;';
    end.innerHTML='&#9816;';
}

let depth=0;
let deptharray=[];
deptharray[0]=[start];

let knightMoves=[[-2,-1],[-2,1],[-1,2],[1,2],[2,1],[2,-1],[1,-2],[-1,-2]];

findmoves();

function findmoves(){ 
    while(true){
        deptharray[++depth]=[];
        for(let u=0; u<deptharray[depth-1].length; u++){
            let square=deptharray[depth-1][u];
            for(let k=0; k<knightMoves.length; k++){
                let i=square.i+knightMoves[k][0],j=square.j+knightMoves[k][1];
                if(validmove(i,j)&&!board[i][j].isvisited){
                    board[i][j].isvisited=true;
                    deptharray[depth].push(board[i][j]);
                    board[i][j].startfrom=square;
                    if(isend(i,j))return;
                }
            }    
        }
    }
}

function isend(i,j){
    return i==end.i&&j==end.j;
}

function validmove(i,j){
    return i>=0&&i<=7&&j>=0&&j<=7;
}

function drawpath(){
 let temp=end;
 while(temp.startfrom!=start){
    temp=temp.startfrom;
    temp.style.backgroundColor="black";
}}

drawpath();


function RandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

document.getElementById("newPosition").onclick = () => {
	window.location.reload();
};
