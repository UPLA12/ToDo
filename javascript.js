const list = document.getElementById("list")
let count = 0;

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("nextItem").value = "";
});

function createNew(text) {
  let newItem = document.getElementById("nextItem").value;

  // creating text side of things
  let textE = document.createElement("div");
  count += 1;
  textE.innerText = text;
  textE.className = "item";
  textE.id = "item " + count;
  list.appendChild(textE);

  // creating button side of things
  let buttonE = document.createElement("button");
  buttonE.innerText = "X";
  buttonE.className = "done";
  buttonE.id = count;
  buttonE.addEventListener("click", function () {
    list.removeChild(document.getElementById("item " + this.id))
    list.removeChild(document.getElementById(this.id))
    console.log(this.id);
  });
  list.appendChild(buttonE);

  // resetting text box
  document.getElementById("nextItem").value = "";
}

document.getElementById("submit").onclick = function () {
  let newItem = document.getElementById("nextItem").value;
  if (newItem) {
    createNew(newItem);
  }
};

document.addEventListener("keydown", function (event) {
  if (event.which == 13) {
    let newItem = document.getElementById("nextItem").value;
    if (newItem) {
      createNew(newItem);
    }
  }
});
