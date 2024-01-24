function addTask() {
    let taskInput = document.getElementById('taskInput')
    let taskList = document.getElementById('taskList')

    if (taskInput.value.trim() ===""){
    alert("Please enter a task!")
    return
   }

   let newTask = document.createElement('li')
   newTask.className = "taskItem"
   newTask.innerHTML = taskInput.value

   let deleteButton = document.createElement('span')
   deleteButton.className = 'deleteButton'
   deleteButton.innerHTML = '❌'
   deleteButton.onclick= function(){
    taskList.removeChild(newTask)
   }

   newTask.appendChild(deleteButton)
   taskList.appendChild(newTask)


   taskInput.value = ""
}

