const taskInput = document.querySelector("#task__name");
const filterInput = document.querySelector("#task__filter");
const container = document.querySelector(".container");
const yesBtn = document.querySelector("#yes__btn");
const noBtn = document.querySelector("#no__btn");
const form = document.querySelector("form");
const deleteAll = document.querySelector("#delete__all");
const taskCollection = document.querySelector(".task__collection");
const alertAsk = document.querySelector(".alert__ask");
const allElement = [];
const optionSort = document.querySelector('select');

filterInput.addEventListener('keyup', filterTasks);
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll(".task").forEach(
        function(task){
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1){
                task.style.display ="flex";
            }
            else{
                task.style.display ="none";
            }
        }
    )    
}
form.addEventListener("submit", (e) => {
  if (!taskInput.value == "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const deleteIcon = document.createElement("a");
    deleteIcon.className = "delete-icon";
    li.className = "task";
    li.classList.add("fade");
    deleteIcon.innerHTML = '<i class="fas fa-times"></i>';
    p.appendChild(document.createTextNode(taskInput.value));
    li.appendChild(p);
    li.appendChild(deleteIcon);
    li.style.transition = "all 5s ease";
    taskCollection.appendChild(li);
    allElement.push(taskInput.value);
    taskInput.value = "";
    deleteAll.addEventListener("click", (e) => {
      alertAsk.style.display = "flex";
      container.style.display = "none";
    });
    yesBtn.addEventListener("click", (e) => {
      while (taskCollection.firstChild) {
        taskCollection.removeChild(taskCollection.firstChild);
      }
      alertAsk.style.display = "none";
      container.style.display = "block";
      taskInput.value = "";
    });
    noBtn.addEventListener("click", (e) => {
      console.log(noBtn.value);
      alertAsk.style.display = "none";
      container.style.display = "block";
    });
    deleteIcon.addEventListener("click", (e) => {
        if (e.target.parentElement.parentElement.classList.contains("task")) {
          e.target.parentElement.parentElement.remove();
        }
    });
    if(optionSort.value == 'by_alphabet'){
      function sortList() {
        var ul = document.getElementById('collect');
      
        Array.from(ul.getElementsByTagName("LI"))
          .sort((a, b) => a.textContent.localeCompare(b.textContent))
          .forEach(li => ul.appendChild(li));
    }
    } else{
      console.log("Not sorted")
    }
  }
  e.preventDefault();
  sortList();
  taskInput.value = "";
});