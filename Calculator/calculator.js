const display = document.getElementById('output');


function displayvalue(value){
    display.value += value;
}

function cleardisplay(){
    display.value = '';
}
function delLast(){
const lastChar = display.value.slice(0,-1);
display.value = lastChar

}
function calculate(){
    try{
        display.value = eval(display.value);
    }catch(e){
        display.value = 'Error';
    }
}