//getting system date and displaying in written format
let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
let today = new Date();
let dayToday = document.getElementById("day-today");
dayToday.innerHTML = today.toLocaleDateString("en-US", options);

//accessing the todolist 
let toDoList = document.getElementById("to-do-list");
let toDoArray = [];
//Function for adding values to the array from user input
function addToDoList() {
  let toDoInput = document.getElementById("to-do-input").value;
  if (toDoInput == "") {
    alert("You need to type a task");
  } else {
    toDoArray.push({ name: toDoInput });
    document.getElementById("to-do-input").value = "";
    showToDoList();
  }
}
//Function for displaying the list in browser
function showToDoList() {
  toDoList.innerHTML = "";
  for (let i = 0; i < toDoArray.length; i++) {
    toDoList.innerHTML += `<div class="item"><input type="checkbox" /><p> ${toDoArray[i].name} </p>
    <button id="delete-btn" onclick="deleteTask(${i})"><i class="fa fa-trash"></i></button></div>`;
  }
}
//Function to delete the task from the list
function deleteTask(i) {
  let confirmUser = prompt("Do you want to delete this from your list? Yes/No");
  if (confirmUser == "yes") {
    toDoArray.splice(i, 1);
    alert("one item deleted");
  } else {
    alert("nothing deleted");
  }
  showToDoList();
}
