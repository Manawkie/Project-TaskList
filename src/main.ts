import { addActions } from "./actions";
import { addTaskToList } from "./add_task";

const save = JSON.parse(localStorage.getItem("tasks")!);

// if (save !== null) {
//     const taskList = document.getElementById("task-list") as HTMLUListElement;
//     console.log(save)
// }
// const tasks = JSON.parse(localStorage.getItem("todos")!) || [];

addActions()
addTaskToList()



