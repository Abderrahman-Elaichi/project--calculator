const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};





const display =document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}


function clearDisplay(){
display.value = "";
}


function calculate(){
    try{
display.value = eval(display.value);
}
catch(error){
    display.value = "Error";
}

}
