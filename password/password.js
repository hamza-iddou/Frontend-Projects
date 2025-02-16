const passwordBox = document.getElementById("password");
const pa = 12;

const upperCase = "ABCDEFJHIJKLMNOPQRSTUVWXYZ";
const loweCase = "abcdefjhijklmnopqrstuvwxyz";

const numbers = "0123456789"
const symbol = "!@#$%^&*()_+-+/*'}{:{><";

const allChars  = upperCase + loweCase + numbers + symbol; 

function creat(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)]; 
    password += loweCase[Math.floor(Math.random() * loweCase.length)]; 
    password += numbers[Math.floor(Math.random() * numbers.length)]; 
    password += symbol[Math.floor(Math.random() * symbol.length)];
    
    while(pa > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];         
    }
    passwordBox.value = password;
}
function copyy(){
    passwordBox.select();
    document.execCommand("copy");
}
