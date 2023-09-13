const button=document.querySelector("button");
const body=document.querySelector("body")
const color=['red','green','blue','pink','purple','black']
body.style.backgroundColor='violet';

button.addEventListener('click',changeBg)
function changeBg() {
    const colorIndex=parseInt(Math.random()*color.length)
    body.style.backgroundColor=color[colorIndex]

}