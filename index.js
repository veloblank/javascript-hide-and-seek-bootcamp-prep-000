function getFirstSelector(selector) {
  return document.querySelector(selector);

}

function nestedTarget() {
  return document.getElementById("app").querySelector("#nested .target")
}

function increaseRankBy(n) {
  let li = document.getElementById("app").querySelectorAll(".ranked-list li")
  for (let i = 0; i < li.length; i++) {
    li[i].innerHTML =  parseInt(li[i].innerHTML) + n
  }
}

function deepestChild() {
  return document.getElementById("app").querySelectorAll("#grand-node div div div div")[0]
}
