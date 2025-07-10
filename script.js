function addButton(){
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }   
    //creating list item
    const li = document.createElement("li");
    li.className ="flex justify-between items-center p-2 bg-gray-100 rounded ";
    //adding delete button
    const deleteBtn = document.createElement("Button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className ="bg-red-500 hover:bg-red-400 text-white px-2 rounded";
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    }
    //adding task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskSpan.className = "flex-1";

    //appending the tasks
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    //clearing the input field
    taskInput.value = "";
    taskInput.focus();
    // //saving the task to local storage
    saveTasks();



}