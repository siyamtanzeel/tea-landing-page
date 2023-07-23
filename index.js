const modeToggle = document.querySelector("#mode-toggle");
const swap = document.querySelector('.swap');
swap.addEventListener('click',()=>{
    if(modeToggle.checked){
        document.querySelector('html').setAttribute('data-theme','dark')
    }
    else{
        document.querySelector('html').setAttribute('data-theme','light')
    }
})
// else{

// }

