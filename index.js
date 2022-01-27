let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let line3 = document.querySelector(".line3");
let img = document.querySelector("img");

line1.addEventListener('click', () =>{
    img.src = 'watches1.png';
})

line2.addEventListener('click', () =>{
    img.src = 'watches2.png';

})

line3.addEventListener('click', () =>{
    img.src = 'watches3.png';

})
