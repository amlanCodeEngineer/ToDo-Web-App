const inputBox = document.getElementById("input-box"); //creating a vaianble consiting the id "input-box" by using document.getElementByID
const listContainer = document.getElementById("list-Container");

function addTask() {
  // this function is included in the button which means all the work of the button is in the function
  if (inputBox.value === "") {
    // checks that if user pressing the button without any task(text)!
    alert("you must write something!"); // if the condition is true then this alert massage pops up in the website!
  } else {
    let li = document.createElement("li"); //dnamically adding items to the ul list.document.createElement("li"): This tells the browser to create a new <li> HTML element (used for list items).
    li.innerHTML = inputBox.value;
    //inputBox.value: This grabs whatever text the user typed into the input field (assuming inputBox is an input element like <input type="text">).

    listContainer.appendChild(li);
    // appendChild(li): This adds the <li> element (which now contains the user’s input) to another element on the page.

    let span = document.createElement("span");
    //This creates a new <span> HTML element.

    span.innerHTML = "\u00d7";
    li.appendChild(span);
    //\u00d7 is a Unicode character that represents "×" (a multiplication or close symbol).

    //span.innerHTML = ...: This puts the × symbol inside the <span>, making it visible on the page. setting this up as a "delete" or "remove" button for each list item.
  }
  inputBox.value = "";
  //this clears placeholder of the inputbox after adding the task on the list.
  saveData();
}

//Add event listner for "ENTER" key:

inputBox.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    addTask();
  }
});

listContainer.addEventListener(
  "click",
  function (e) {
    //“Hey list, listen for any clicks!”
    if (e.target.tagName === "LI") {
      //“Did the user click on a list item?”
      e.target.classList.toggle("checked"); // “If yes, mark it as done or unmark it.”
      saveData(); //“Then save the current list.”
    } else if (e.target.tagName === "SPAN") {
      //“Or did the user click on the × button?”
      e.target.parentElement.remove();
      //“If yes, delete the entire list item.”
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
