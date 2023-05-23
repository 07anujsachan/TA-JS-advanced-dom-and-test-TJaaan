class NoticeBoard {
  constructor(root, board = []) {
    this.root = root;
    this.board = board;
  }
  add(category, title) {
    let notice = new Notice(title, category);
    this.board.push(notice);
    this.createUI();
    return this.board.length;
  }
  createUI() {
    this.root.innerHTML = "";
    this.board.forEach((notice) => {
      let ui = notice.createUI();
      this.root.append(ui);
    });
  }
}
class Notice {
  constructor(title, category) {
    this.title = title;
    this.category = category;
  }

  createUI() {
    let box = document.createElement("div");
    box.className = "box";
    let category = document.createElement("p");
    category.innerText = this.category;
    category.contentEditable = true;
    let title = document.createElement("p");
    title.innerText = this.title;
    title.contentEditable = true;
    box.append(category, title);
    return box;
  }
}
let noticeBoard = new NoticeBoard(document.querySelector(".notice"));
let submit = document.querySelector(".btn");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  let title = document.getElementById("title");
  let category = document.getElementById("category");
  noticeBoard.add(title.value, category.value);
  console.log(title.value, category.value);
  title.value = "";
  category.value = "";
});
