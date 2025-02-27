

let userinput = document.getElementById(`date`);

userinput.max = new Date().toISOString().split("T")[0];
const r = document.getElementById(`result`);

const btn = getElementById(``);

function calulateAge(){
    let birthday = new Date(userinput.value);

    let d1 = birthday.getDate();
    let m1 = birthday.getMonth() + 1;
    let y1 = birthday.getFullYear();
    
    let today = new Date();
    
    
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let y3 = y2 - y1;
    if (m2 < m1 || (m2 === m1 && d2 < d1)) {
        y3--; // Adjust if the birthday hasn't occurred yet this year
    }
    
    // Calculate months
    let m3 = m2 - m1;
    if (d2 < d1) {
        m3--; // Adjust if the current day is before the birthday day in the current month
    }
    if (m3 < 0) {
        m3 += 12; // Adjust for negative months by adding 12
    }
    
    // Calculate days
    let d3 = d2 - d1;
    if (d3 < 0) {
        let daysInPreviousMonth = new Date(y2, m2 - 1, 0).getDate(); // Days in the previous month
        d3 += daysInPreviousMonth; // Borrow days from the previous month
        m3--; // Adjust the months as well if needed
    }

   function getDaysInmont(year, month){
        return new Date(year, month, 0).getDate();

   }
   
    
    

    result = `you are ${y3}years and ${m3}mont and ${d3}days.`;
    r.textContent = result;
}

