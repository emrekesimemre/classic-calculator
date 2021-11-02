let num1 = document.getElementById("number1");
let num2 = document.getElementById("number2");
let oper = document.getElementById("operator");
let button = document.getElementById("check_btn");
let sonuc = document.getElementById("result")

button.addEventListener("click", ()=>{
    if (oper.value.includes("+")) {
        sonuc.innerText = parseInt(num1.value) + parseInt(num2.value); 
    }
    if (oper.value.includes("-")) {
        sonuc.innerText = parseInt(num1.value) - parseInt(num2.value); 
    }
    if (oper.value.includes("*")) {
        sonuc.innerText = parseInt(num1.value) * parseInt(num2.value); 
    }
    if (oper.value.includes("/")) {
        sonuc.innerText = parseInt(num1.value) / parseInt(num2.value); 
    }
})