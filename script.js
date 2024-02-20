const input_box = document.getElementById("input-box");
const list_item = document.getElementById("list-item");
const alertContainer = document.getElementById("alert-container");

function addTask() {
  // if input-box is empty
  if (input_box.value === "") showAlert("Please write your task!", "error");
  //   else add the task
  else {
    let li = document.createElement("li");
    li.innerHTML = input_box.value;
    list_item.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    showAlert("Task added successfully!", "success");
  }
  //   empty-search-box
  input_box.value = "";
  //   save data
  savedata();
}
list_item.addEventListener(
  "click",
  function (e) {
    // when clicked on task
    if (e.target.tagName === "LI") {
      // show "checked" class
      e.target.classList.toggle("checked");
      savedata();
    }

    // when clicked on cross
    else if (e.target.tagName === "SPAN") {
      // remove the task
      e.target.parentElement.remove();
      showAlert("Task removed successfully!", "success");
      savedata();
    }
  },
  false
);

// Alerts
function showAlert(message, type) {
  const alertDiv = document.createElement("div");
  alertDiv.classList.add("alert");
  alertDiv.classList.add(type);
  alertDiv.innerText = message;
  alertContainer.appendChild(alertDiv);
  setTimeout(() => {
    alertDiv.remove();
  }, 2000); // Remove after 2 seconds
}
// To save the data in Browser
function savedata() {
  localStorage.setItem("data", list_item.innerHTML);
}

// Show the saved data
function showdata() {
  list_item.innerHTML = localStorage.getItem("data");
}
// call the function
showdata();
