const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.input');
const equal = document.querySelector('.btn-equal');
const clear = document.querySelector('.btn-clear');

for(i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function(e){
        let inputValue = e.target.id
        screen.value += inputValue
    });
}

equal.addEventListener('click', function(){
    if(screen.value === ""){
        screen.value = "";
    } else {
        let answer = eval(screen.value)
        screen.value = answer
    };
});

clear.addEventListener('click', function(){
    screen.value = "";
})