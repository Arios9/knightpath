function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

let tds = document.getElementsByTagName("td");
tds.setAttribute("ondrop", "drop(event)");
tds.setAttribute("ondragover", "allowDrop(event)");

console.log(tds.length);