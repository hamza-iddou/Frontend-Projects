const inputBox = document.getElementById("input-box");
const cont = document.getElementById("listcontainer");

function AddTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
    };
    inputBox.value = "";
    saveData();
};

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask(){
    cont.innerHTML = localStorage.getItem("data");
}

showTask();