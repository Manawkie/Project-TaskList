export function addTask(typedtask : string) {
    const tasklist = document.getElementById('tasks') as HTMLUListElement;
    const taskbox = document.createElement("li") as HTMLLIElement;
    const checkbox = document.createElement("input") as HTMLInputElement;
    const removeButton = document.createElement("button") as HTMLButtonElement;
    
    removeButton.innerText = 'REMOVE'
    removeButton.id = "discard"
    checkbox.type = "checkbox"
    

    taskbox.append(checkbox, typedtask, removeButton)
    tasklist.append(taskbox)  
    removeButton.addEventListener('click', e => {
        e.preventDefault()
        removeButton.parentNode?.removeChild(removeButton)
        taskbox.parentNode?.removeChild(taskbox)
        
    })  

    checkbox.addEventListener(
        'change', e => {
            e.preventDefault()
            
            

        }
    )
}


