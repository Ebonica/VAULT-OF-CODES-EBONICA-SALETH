document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const taskList = document.getElementById("task-list");
    const addButton = document.getElementById("add");

    addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete">DELETE</button>
                <button class="complete">COMPLETE</button>
            `;

            taskList.appendChild(taskItem);
            taskInput.value = "";

            const deleteButton = taskItem.querySelector(".delete");
            deleteButton.addEventListener("click", function () {
                taskList.removeChild(taskItem);
            });

            const completeButton = taskItem.querySelector(".complete");
            completeButton.addEventListener("click", function () {
                taskItem.classList.toggle("completed");
            });
        }
    });
});
