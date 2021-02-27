var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var text = document.getElementById("userText");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function textLength() {
    return text.value.length;
}

function listLength() {
    return item.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(document.createTextNode(text.value));
    ul.appendChild(li);
    input.value = "";
    text.value = "";

    function crossOut() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);

    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);

    function deleteListItem() {
        li.classList.add("delete");
    }
}

function addListAfterClick() {
    if (inputLength() > 0 && textLength() > 0) {
        createListElement();
    }
}


function addListAfterKeypress(event) {
    if (inputLength() > 0 && textLength() > 0 && event.which === 13) {
        createListElement();
    }
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

text.addEventListener("keypress", addListAfterKeypress);