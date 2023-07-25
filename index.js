const modeToggle = document.querySelector("#mode-toggle");
const swap = document.querySelector('.swap');
const drawerSide = document.querySelector('.drawer-side');
const myDrawer = document.querySelector('#my-drawer');
const products = document.querySelectorAll('.card-compact');
const myModal = document.querySelector('.modal-toggle')
swap.addEventListener('click',()=>{
    if(modeToggle.checked){
        document.querySelector('html').classList.add('dark');
    }
    else{
        document.querySelector('html').classList.remove('dark');
    }
})
// myDrawer.addEventListener('click',()=>{
//     if(myDrawer.checked){
//         drawerSide.classList.add('dark:bg-slate-950')
            
//     }
//     else{
//         drawerSide.classList.remove('dark:bg-slate-950');
//     }
// })
