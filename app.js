let count=0;

let value = document.querySelector("#value");
let buttons = document.querySelectorAll(".btn");


buttons.forEach( function (btn) {
   btn.addEventListener("click" , (button) => 
   {
    let classList = button.currentTarget.classList;
    if(classList.contains("decrease")){
        count--;
    }
    else if(classList.contains("reset")){
        count=0;
    }
    else if(classList.contains("increase")){
        count++;
    }
    value.textContent=count;
    if(count>0){
        value.style.color="green";
    }
    if(count<0){
        value.style.color="red";
    };
    if(count==0){
        value.style.color="black";
    }
   })
})