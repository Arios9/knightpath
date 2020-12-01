let p=[];
let iswhite=true;
let board=document.getElementById("board");
for(let i=0; i<8; i++){
	p[i]=[];
	for(let j=0; j<8; j++){
        p[i][j]= document.createElement("div");
        board.appendChild(p[i][j]); 
        p[i][j].classList.add("squares");
        p[i][j].isvisited=false;
        p[i][j].startfrom=null;
        p[i][j].i=i;
        p[i][j].j=j;
        if(iswhite)p[i][j].style.backgroundColor="white";
        else p[i][j].style.backgroundColor="chocolate";
        iswhite=!iswhite;	
	}
	iswhite=!iswhite;	
}

let start =p[0][0];
let end =p[7][7];
start.isvisited=true;
start.innerHTML='N';
end.style.backgroundColor="red";

let depth=0;
let deptharray=[];
deptharray[0]=[start];


let move=[[-2,-1],[-2,1],[-1,2],[1,2],[2,1],[2,-1],[1,-2],[-1,-2]];

findmoves();

function findmoves(){ 
      while(true){
        deptharray[++depth]=[];
        for(let u=0; u<deptharray[depth-1].length; u++){
            let square=deptharray[depth-1][u];
            for(let k=0; k<8; k++){
                let i=square.i+move[k][0],j=square.j+move[k][1];
                if(validmove(i,j)&&!p[i][j].isvisited){
                    p[i][j].isvisited=true;
                    deptharray[depth].push(p[i][j]);
                    p[i][j].startfrom=square;
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
    temp.style.backgroundColor="green";
}}

drawpath();








function RandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}