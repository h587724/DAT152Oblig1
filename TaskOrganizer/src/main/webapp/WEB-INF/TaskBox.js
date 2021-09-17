var modal = document.getElementById("modal");
var newTaskButton = document.getElementById("newTask");
var span = document.getElementsByClassName("close")[0];
var addTaskButton = document.getElementById("addTask");
var ourList = document.getElementById("listOfItems");
const taskBox = document.querySelector("task-box");
const items = [];

function showModal (){
    modal.style.display = "block";
    modal.style.display = "none";
}

newTaskButton.onclick = function(){
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

addTaskButton.addEventListener("click", newTaskCallBack);

function newTaskCallBack() {
    let taskTitle = document.getElementById("taskTitle").value;
    let taskStatus = document.getElementById("status").value;
    let task = {title: taskTitle, status: taskStatus};
    items.push(task);
    document.getElementById("taskTitle").value = "";
    let htmlString = "<li>" + task.title + " " + task.status + "<button id=\"modify_"+ task.title + "\" class=\"button\" onClick=\"modify(this.id)\"> Modify" +
        "</button><button id=\"remove_" + task.title + "\" class=\"button\" onClick=\"remove(this.id)\">Remove</button></li>";
    ourList.innerHTML += htmlString;
    modal.style.display = "none";
}

function show(){
    ourList.innerHTML = "";
    let html = "";
    for (let i = 0; i < items.length; i++){
        let task = items[i];
        html += "<li>" + task.title + " " + task.status + "<button id=\"modify_"+ task.title + "\" class=\"button\" onClick=\"modify(this.id)\"> Modify" +
            "</button><button id=\"remove_" + task.title + "\" class=\"button\" onClick=\"remove(this.id)\">Remove</button></li>";
        console.log(task + " " + i);
    }
    ourList.innerHTML += html;
}

/*function showItems(){
    for (let i = 0; i < items.length; i++){
        ourList.innerHTML += JSON.stringify(items[i], null, 2)/*"<li>" + items[i].title + " " + items[i].status + "<button id=\"modify"+ items[i].title + "\" class=\"button\"> Modify" +
        "</button>" + "<button id=\"remove" + items[i].title + "\" class=\"button\">Remove</button></li>";
    }
}*/

/*function activateItem(){
    for (i = 0; i < items.size; i++){
        let listModifyButton = document.getElementById("modify" + keys[i]);
        let listRemoveButton = document.getElementById("remove" + keys[i]);
        listModifyButton.addEventListener('click', modify(keys[i]));
        listRemoveButton.addEventListener("click", remove(keys[i]));
    }
}*/

function modify (clicked_id){
    console.log("kjhg");
}

function remove (clicked_id){
    var clickedString = String(clicked_id);
    var taskTitle = clickedString.split("remove_").pop();
    var index = items.findIndex(x => x.title === taskTitle);
    items.splice(index, 1);
    show();
}
/*
const openEls = document.querySelectorAll("[data-open]");
const isVisible = "is-visible";

for(const el of openEls) {
    el.addEventListener("click", function() {
        const modalId = this.dataset.open;
        document.getElementById("popUp").classList.add(isVisible);
    });
}

const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of closeEls) {
    el.addEventListener("click", function() {
        this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    });
}

const isVisible = "is-visible";

document.addEventListener("click", e => {
    if (e.target == document.querySelector(".popUp.is-visible")) {
        document.querySelector(".popUp.is-visible").classList.remove(isVisible);
    }
});

const isVisible = "is-visible";

document.addEventListener("keyup", e => {
    if (e.key == "Escape" && document.querySelector(".popUp.is-visible")) {
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
});*/