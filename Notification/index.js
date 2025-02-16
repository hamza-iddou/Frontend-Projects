

let toastBox = document.getElementById(`toastbox`);
let successMsg = '<i class="fa-solid fa-circle-check"></i>Successfully Submitted'
let ErrorMsg = '<i class="fa-solid fa-circle-xmark"></i>Error'
let InvaliidMsg = '<i class="fa-solid fa-circle-exclamation"></i>Invalid'



function showToast(MSG){
   let toast = document.createElement('div');
   toast.classList.add('toast');
   toast.innerHTML = MSG;
   toastBox.appendChild(toast);

   if(MSG.includes('Error')){
        toast.classList.add('error');
   }if(MSG.includes('Invalid')){
        toast.classList.add('Invalid')
   }
   
   setTimeout(()=>{
    toast.remove();
   },6000);
}