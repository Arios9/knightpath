let board = [];
let table_element = document.getElementById("board");
let iswhite = true;

for (let i = 0; i < 8; i++) {
  board[i] = [];
  let tr_element = document.createElement("tr");
  table_element.appendChild(tr_element);
  for (let j = 0; j < 8; j++) {
    board[i][j] = document.createElement("td");
    board[i][j].isvisited = false;
    board[i][j].parent = null;
    board[i][j].i = i;
    board[i][j].j = j;
    let square_color = iswhite ? "white" : "chocolate";
    board[i][j].style.backgroundColor = square_color;
    tr_element.appendChild(board[i][j]);

    iswhite = !iswhite;
  }
  iswhite = !iswhite;
}

let start, end;
newPosition();

function newPosition() {
  start = board[0][0];
  end = board[7][7];
  start.isvisited = true;
  createPiece("black_knight", "&#9822;", start);
  createPiece("white_knight", "&#9816;", end);
}

function createPiece(id, entity, element) {
  let piece = document.createElement("piece");
  piece.setAttribute("id", id);
  piece.innerHTML = entity;
  element.appendChild(piece);
}

let knightMoves = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
];

findmoves([start]);

function findmoves(layerNodes) {
  if (layerNodes.includes(end)) return;
  childNodes = [];
  for (let node of layerNodes) {
    for (let move of knightMoves) {
      let i = node.i + move[0];
      let j = node.j + move[1];
      if (validmove(i, j) && !board[i][j].isvisited) {
        board[i][j].isvisited = true;
        childNodes.push(board[i][j]);
        board[i][j].parent = node;
      }
    }
  }
  findmoves(childNodes);
}

function validmove(i, j) {
  return i >= 0 && i <= 7 && j >= 0 && j <= 7;
}

function drawpath() {
  let temp = end;
  while (true) {
    if (temp == start) break;
    if (temp != end) {
      let pathSquare = document.createElement("div");
      pathSquare.setAttribute("class", "pathSquare");
      pathSquare.style.backgroundColor = "black";
      temp.appendChild(pathSquare);
    }
    temp = temp.parent;
  }
}

drawpath();
