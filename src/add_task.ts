export function addTaskToList(currentInput:string) {
    
    const taskContainer = document.createElement("p") as HTMLParagraphElement;
    const taskList = document.getElementById("task-list") as HTMLUListElement;
    const taskInList = document.createElement("li") as HTMLLIElement;
    const checkBox = document.createElement("input") as HTMLInputElement;
    const removeButton = document.createElement("button") as HTMLInputElement;
    const tasks = JSON.parse(localStorage.getItem('tasks')!)


    taskInList.id = 'task-container';
    taskInList.classList.add("task-container")
    checkBox.type = 'checkbox';
    checkBox.id = 'check-box';
    removeButton.innerText = 'Discard';
    removeButton.id = 'remove-button';

    
    removeButton.addEventListener("click", function() {

        taskInList.parentNode?.removeChild(taskInList)
    })
    
    checkBox.addEventListener("change", function() {
    
        if (checkBox.checked) {
            console.log('checked')

            taskInList.style.backgroundColor = '#3b3b3b'
            
        }
        else {
            console.log('not check')
            taskInList.style.backgroundColor = '#E9EFEC'
        }

        
    })

    if (currentInput === "") return
    taskContainer.textContent = currentInput;
    taskContainer.id = 'task-detail';
    taskInList.append(checkBox, taskContainer, removeButton);
    taskList.append(taskInList); 
    currentInput = "";

    console.log(taskContainer)
    const myList = JSON.stringify(taskContainer);
    localStorage.setItem("tasks", myList); 
    const theSave = JSON.parse(localStorage.getItem("tasks")!)
    console.log(theSave)


    
    
    
}