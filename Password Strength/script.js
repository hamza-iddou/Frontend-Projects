let input = document.getElementById("password");
let msg = document.getElementById("msg");
let strength = document.getElementById("strength");

input.addEventListener('input', () => {
    if(input.value.length > 0){
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }

     if(input.value.length < 4){
         strength.innerHTML = "weak";
         strength.style.color = "red";
     }else if(input.value.length > 4 && input.value.length < 8){
        strength.innerHTML = "Medium";
        strength.style.color = "yellow";
     }else{
        strength.innerHTML = "Good";
        strength.style.color = "green";
     }
})

