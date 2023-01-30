// import Typed from "typed.js";
// var typed = new Typed('.languages',{
//     strings: ['JavaScript','html','CSS','Java','React'],
//     typeSpeed: 150,
//     backSpeed: 150,
//     loop: true
// });
let rotateCenter = "rotate-scale-up";
let slideinLeft = "slide";
let slideOutRight = "slide-out-right"

const addIcon = document.querySelector('#add-icon-mini');
const addIcon2 = document.querySelector('.add-icon');
addIcon.addEventListener('click', openList = (e) => {
    const list = document.querySelector('.mini-app-list');
    addIcon.classList.add('rotate-scale-up');
    removeAnimation(addIcon, rotateCenter);
    if (addIcon.classList.contains('fa-plus')) {
        addIcon.classList.replace("fa-plus", "fa-minus");
        console.log("hi");
        // list.style.opacity = "1";
        console.log(list);
        list.style.display = "block"
        list.classList.add("slide");
        removeAnimation(list, slideinLeft)
    }
    else {
        addIcon.classList.replace("fa-minus", "fa-plus")
        removeAnimation(list, slideOutRight)
        list.style.display = "none";
        // list.style.opacity = "0";
    }
})
addIcon2.addEventListener('click', openList = (e) => {
    const list = document.querySelector('.mini-app-list2');
    addIcon2.classList.add('rotate-scale-up');
    removeAnimation(addIcon2, rotateCenter);
    if (addIcon2.classList.contains('fa-plus')) {
        addIcon2.classList.replace("fa-plus", "fa-minus");
        console.log("hi");
        // list.style.opacity = "1";
        console.log(list);
        list.style.display = "block"
        list.classList.add("slide");
        removeAnimation(list, slideinLeft)
    }
    else {
        addIcon2.classList.replace("fa-minus", "fa-plus")
        removeAnimation(list, slideOutRight)
        list.style.display = "none";
        // list.style.opacity = "0";
    }
})

const removeAnimation = function (button , className, time) {
    let ab = setTimeout(() => { 
        button.classList.remove(`${className}`);
    }, 651)
}
  