let ul = document.querySelector(".ul");

class ItemList {
  constructor(root, list = []) {
    this.root = root;
    this.list = list;
  }
  add(item) {
    let listItem = new Item(item);
    this.list.push(listItem);
    this.createUI();
    return this.list.length;
  }
  createUI() {
    this.root.innerHTML = "";
    this.list.forEach((item) => {
      let ui = item.createUI();
      this.root.append(ui);
    });
  }
}
class Item {
  constructor(item) {
    this.item = item;
  }

  createUI() {
    let li = document.createElement("li");
    li.className = "li";
    li.draggable = true;
    li.addEventListener("dragstart", handleDragStart, false);
    li.addEventListener("dragenter", handleDragEnter, false);
    li.addEventListener("dragover", handleDragOver, false);
    li.addEventListener("dragleave", handleDragLeave, false);
    li.addEventListener("drop", handleDrop, false);
    li.addEventListener("dragend", handleDragEnd, false);
    let p = document.createElement("p");
    p.innerText = this.item;
    let span = document.createElement("span");
    span.className = "dragme";
    span.innerText = "Drag Me";
    li.append(p, span);
    return li;
  }
}

var dragSrcEl = null;

function handleDragStart(e) {
  this.style.opacity = "0.4";

  dragSrcEl = this;

  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/html", this.innerHTML);
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }

  e.dataTransfer.dropEffect = "move";

  return false;
}

function handleDragEnter(e) {
  this.classList.add("over");
}

function handleDragLeave(e) {
  this.classList.remove("over");
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation(); // stops the browser from redirecting.
  }

  if (dragSrcEl != this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData("text/html");
  }

  return false;
}

function handleDragEnd(e) {
  this.style.opacity = "1";

  itemList.forEach(function (item) {
    item.classList.remove("over");
  });
}

let itemList = new ItemList(document.querySelector(".ul"));
let submit = document.querySelector(".btn");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  let input = document.querySelector("input");
  itemList.add(input.value);
  input.value = "";
});
