let completedTaskNum = 0;
function editedTarget(pending, editedTarget) {
    function save() {
        editedTarget.innerText = editInput.value;
        editPanel.style.visibility = "hidden";
        editedTarget = "";
    }
    let editPanel = document.querySelector(".edit-panel");
    let editInput = document.querySelector(".edit-input");
    let editSave = document.querySelector(".edit-save");
    editPanel.style.visibility = "visible";
    console.log(editedTarget.innerText);
    editInput.value = editedTarget.innerText;
    //question question question 
    // setAttribute doesnt work but editInput.value did why?
    // this is for edit option's input valuee
    // editInput.setAttribute("value", editedTarget.innerText);

    editSave.addEventListener("click", () => {
        save();
    });

    editInput.addEventListener("keydown", (event) => {
        if(event.key == "Enter") {
            save();
        }
    })
}

function addFunction() {
    function completeFunction(newTarget, edit, deleteButton) {
        completedTaskNum += 1;
        let para = document.querySelector("#completedCount");
        para.innerText = `Completed ${completedTaskNum}`;
        var sound = new Audio("bellSound.wav");
        sound.play();

        newTarget.remove();
        edit.remove();
        deleteButton.remove();

        let text = newTarget.innerText;
        newTarget.remove();
        let completed = document.createElement("div");

        completed.setAttribute("class", "items");
        let completedBox = document.querySelector("#completed");
        completed.innerText = text;
        completed.style.textDecoration = "Line-Through";
        completedBox.append(completed);
    }


    let input = document.querySelector("input");
    let pending = document.querySelector("#pending");
    let newTarget = document.createElement("div");
    newTarget.style.cursor = "pointer";
    newTarget.setAttribute("class", "items");
    newTarget.innerText = input.value;
    if(input.value == "") {
        return 
    } else {
        input.value = "";
        pending.append(newTarget);
        
        let edit = document.createElement("div");
        edit.setAttribute("class", "items");
        edit.innerText = "EDIT";
        pending.append(edit);
        edit.addEventListener("click", () => {
            editedTarget(pending, newTarget);
        });

        let deleteButton = document.createElement("div");
        deleteButton.setAttribute("class", "items");
        deleteButton.innerText = "DELETE";
        pending.append(deleteButton);
        deleteButton.addEventListener("click", () => {
            newTarget.remove();
            edit.remove();
            deleteButton.remove();
        });
        newTarget.addEventListener("click", () => {
            completeFunction(newTarget, edit, deleteButton);
        });

        

        document.querySelector(".nothingSelected").style.visibility = "hidden";
    }
}
let sendButton = document.querySelector("button");
sendButton.addEventListener("click", addFunction);
window.addEventListener("keydown", (event) => {
    if(event.key == "Enter") {
        console.log("hello")
        addFunction();
    }
})

let date = new Date();
console.log(date.getDay());
let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let dayName = document.createElement("p");
dayName.innerText = `${day[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`;
dayName.setAttribute("class", "dayName");
document.querySelector("header").append(dayName);

document.querySelector(".cross").addEventListener("click", () => {
    document.querySelector(".edit-panel").style.visibility = "hidden";
});