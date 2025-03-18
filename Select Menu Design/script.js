var selectField = document.getElementById(`selectField`);
var selectText = document.getElementById(`selectText`);
var list = document.getElementById(`list`);

var arrowIco = document.getElementById(`arrowIco`);
var options = document.getElementsByClassName(`options`);
selectField.onclick = function(){
    list.classList.toggle("hide");
    arrowIco.classList.toggle("rotate");
}

for(option of options){
    option.onclick = function(){
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrowIco.classList.toggle("rotate");
    }
}