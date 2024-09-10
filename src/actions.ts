import { addTaskToList } from "./add_task";



export function addActions() {
    const addButton = document.getElementById("add-task-button") as HTMLInputElement;



    addButton.addEventListener("click" , e => {
        e.preventDefault()
        addTaskToList()
    })

    

}