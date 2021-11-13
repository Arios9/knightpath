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

$("td").attr({
  ondrop: "drop(event)",
  ondragover: "allowDrop(event)",
});

$("piece").attr({
  draggable: "true",
  ondragstart: "drag(event)",
});
