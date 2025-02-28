document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("todoForm");
    let input = document.getElementById("taskInput");
    let list = document.getElementById("taskList");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        let taskText = input.value.trim();
        if (taskText !== "") {
            let li = document.createElement("li");
            li.classList.add("list-group-item");

            // Add fade-in animation
            li.style.opacity = 0;
            li.style.transform = "translateY(-10px)";
            setTimeout(() => {
                li.style.opacity = 1;
                li.style.transform = "translateY(0)";
            }, 100);

            li.innerHTML = `
                <span>${taskText}</span>
                <button class="btn btn-danger btn-sm delete">Delete</button>
            `;

            list.appendChild(li);
            input.value = ""; // Clear input
        }
    });

    list.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete")) {
            let taskItem = event.target.closest("li");

            // Add fade-out animation
            taskItem.style.opacity = 0;
            taskItem.style.transform = "translateX(-10px)";
            setTimeout(() => taskItem.remove(), 300);
        }
    });
});
