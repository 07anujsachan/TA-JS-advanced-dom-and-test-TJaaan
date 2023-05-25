let ul = document.querySelector(".ul");

function createUi() {
  quotes.slice(0, 3).map((quote) => {
    let li = document.createElement("li");
    li.className = "quote";
    let h1 = document.createElement("h1");
    h1.innerText = quote.quoteText;
    let p = document.createElement("p");
    p.innerText = quote.quoteAuthor;
    li.append(h1, p);
    ul.append(li);
  });
}
createUi();

document.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight;
  let clientHeight = document.documentElement.clientHeight;
  if (scrollTop + clientHeight >= scrollHeight) {
    createUi();
  }
});

window.addEventListener("DOMContentLoaded", () => {
  alert("Dom content is loaded");
  createUi();
});
