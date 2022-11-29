let count = 0;

const number = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")
console.log(btns)
btns.forEach(function (btn) {
    btn.addEventListener("click", function(e) {
        const currentButton = e.currentTarget.classList
        if(currentButton.contains("decrease")){
            count--
        } else if(currentButton.contains("reset")){
            count = 0
        } else  {
            count++
        }
       
        if(count>0){
            number.style.color = "red"
        } else if(count===0){
            number.style.color = "black"
        } else if (count<0){
            number.style.color = "green"
        }
        number.textContent = count
    }) 
})

