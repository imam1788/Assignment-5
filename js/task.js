let buttons = document.getElementsByClassName("completed-button");

for (let button of buttons) {
  button.addEventListener("click", function () {

    alert("Board Updated successfully.");

    button.disabled = true;
    button.style.opacity = "0.5";
    button.style.cursor = "not-allowed";

    let checkNumber = document.getElementById("check-number");
    let currentCheck = parseInt(checkNumber.innerText);
    checkNumber.innerText = currentCheck + 1;

    let taskCounter = document.getElementById("task-counter");
    let currentTask = parseInt(taskCounter.innerText);
    taskCounter.innerText = currentTask - 1;


    let newLog = document.createElement("p");

    let taskTitle = button.parentElement.parentElement.querySelector("h3").innerText;

    let now = new Date();
    let timeString = now.toLocaleTimeString();
    newLog.innerText = "You have completed the task " + taskTitle + "  at " + timeString;
    document.getElementById("right-section").appendChild(newLog);

    document.getElementById('clear-history-btn').addEventListener('click', function () {
      const historySection = document.getElementById('right-section');
      historySection.innerHTML = '';
    });

  });
}
