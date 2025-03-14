document.addEventListener("DOMContentLoaded", function () 
{
    let form = document.getElementById("todoForm");
    let input = document.getElementById("taskInput");
    let list = document.getElementById("taskList");
    let theme = document.querySelector(".theme");
    let bd = document.querySelector("body");
    let heading = document.querySelector("h1");


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
                <label>
                    <input type="checkbox" class= "work">
                    <span>${taskText}</span>
                </label>
                <button class="edit btn btn-sm"><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="btn btn-danger btn-sm delete"><i class="fa-solid fa-trash"></i></button>
            `;

            list.appendChild(li);
            input.value = ""; // Clear input
        }
    });



    list.addEventListener("click", function (event) {
        if (event.target.closest(".delete")) {  // Use `closest()` for reliability
            let taskItem = event.target.closest("li");
    
            if (!taskItem) return;
    
            event.stopPropagation();  // Prevent event from bubbling up
    
            taskItem.style.transition = "opacity 0.3s ease-out, transform 0.3s ease-out";
            taskItem.style.opacity = 0;
            taskItem.style.transform = "translateX(-10px)";
    
            setTimeout(() => taskItem.remove(), 300);
        }
    });
    
    


    //task complete(cut option)
    list.addEventListener("change", function (event) {
        if (event.target.classList.contains("work")) {
            let label = event.target.closest("label");
            if (event.target.checked) {
                label.style.textDecoration = "line-through";
            } else {
                label.style.textDecoration = "none";
            }
        }
    });

    list.addEventListener("click", function (event) {
        if (event.target.closest(".edit")) {  // Use `closest()` for reliability
            let taskItem = event.target.closest("li");
    
            if (!taskItem) return;
    
            event.stopPropagation();  // Prevent label from interfering
    
            let taskText = taskItem.querySelector("span").innerText.trim();
            input.value = taskText;
    
            requestAnimationFrame(() => {
                taskItem.style.transition = "opacity 0.3s ease-out, transform 0.3s ease-out";
                taskItem.style.opacity = 0;
                taskItem.style.transform = "translateX(-10px)";
            });
    
            taskItem.addEventListener("transitionend", () => taskItem.remove(), { once: true });
        }
    });
    
    
    
    //logo

    let logo = document.querySelector(".logo");
    let faze = document.querySelector(".faze");

    logo.addEventListener("click", ()=>{
        faze.classList.remove("faze");
        logo.remove();
    });


    let count = 0;
    theme.addEventListener("click", function () {
        count++;
        console.log(count);
    
        // Toggle theme based on count
        if (count %2== 0) {
            bd.style.backgroundColor =`#ff9a9e`;
            heading.style.color =`#ff6b81`;
            logo.style.color = `#ff6b81`;
            logo.style.border = `#e84118`;

            
        } else {
            bd.style.backgroundColor = '#ADD8E6';
            heading.style.color =`#896bff`;
            logo.style.color = `#896bff`;
            logo.style.border = `#ADD8E6`;

        }
    });


});
