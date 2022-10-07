const textareaE1 =document.getElementById("textarea");
const totalcounterE1 =document.getElementById("total-counter");
const remainingcounterE1 = document.getElementById("remaining-counter");

textareaE1.addEventListener("keyup", ()=>{
   updatecounter();
});

function updatecounter(){
    totalcounterE1.innerText =textareaE1.value.length;
   remainingcounterE1.innerText =textareaE1.getAttribute("maxLength")-textareaE1.value.length;
}