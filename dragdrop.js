function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  clearBoard();
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  findpath();
  drawpath();
}

let tds = document.getElementsByTagName("td");
for (let td of tds) {
  td.setAttribute("ondrop", "drop(event)");
  td.setAttribute("ondragover", "allowDrop(event)");
}

let pieces = document.querySelectorAll("piece");
for (let piece of pieces) {
  piece.setAttribute("draggable", "true");
  piece.setAttribute("ondragstart", "drag(event)");
}
