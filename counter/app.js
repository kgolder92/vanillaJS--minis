const btns = document.querySelectorAll('.btn');
const value = document.getElementById('value');
let count = 0;

btns.forEach(function(btn) {
    btn.addEventListener("click", (e) => {
        if(e.target.classList.contains('decrease')) {
            count --;
        } else if(e.target.classList.contains('increase')) {
            count ++;
        } else {
            count = 0;
        }

        if(count > 0) value.style.color = "green";
        if(count < 0) value.style.color = "red";
        if(count === 0) value.style.color = "black";
        
        value.textContent = count;

    })
})