var modal = document.getElementById("modal");
var newTaskButton = document.getElementById("newTask");
var span = document.getElementsByClassName("close")[0];
var addTaskButton = document.getElementById("addTask");
var ourList = document.getElementById("listOfItems");
const taskBox = document.querySelector("task-box");
const items = [];

//Make a modal box
newTaskButton.onclick = function(){
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

//Listens to the "Add Task" button and calls newTaskCallBack function
addTaskButton.addEventListener("click", newTaskCallBack);

//Gets elements from the fields "Task title" and "Status"
//Then, the method creates a Task object with attributes "title" and "status" and pushes it to a global array "items"
//Furthermore, an html string is spawned, consisting of list item: Title, Status, and two buttons with onclick methods.
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

//Merges all the tasks from the array to the html page
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

//Modifies a task (meant to) after a modify button is pressed.
function modify (clicked_id){
    console.log("kjhg");
}

//Removes a Task from the arrays and spawns the new array via the show() method
function remove (clicked_id){
    var clickedString = String(clicked_id);
    var taskTitle = clickedString.split("remove_").pop();
    var index = items.findIndex(x => x.title === taskTitle);
    items.splice(index, 1);
    show();
}
