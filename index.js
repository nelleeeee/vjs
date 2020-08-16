// const title = document.getElementById("title");

// console.log(title);
// console.dir(title);
// title.innerHTML = "hihihihi";
// title.style.color = "blue";
// console.dir(document);

// function handleResize(){
//     console.log("resized");
// }

// window.addEventListener("resize", handleResize)
// // handleResize 함수에 ()를 붙히면 바로 호출, 안붙히면 이벤트시에 호출


// function handleClick(){
//     title.style.color = "red";
// }

// title.addEventListener("click", handleClick);

// if("10" === 10){
//     console.log("hi");
// } else if("10" === "10"){
//     console.log("dlal");
// } else {
//     console.log("ho");
// }

// if(20 > 5 && "noco" === "asd"){
//     console.log("asdasd");
// } else {
//     console.log("aasdasddasdasd");
// }

// // const age = prompt("How old are you");

// // if (age > 18){
// //     console.log("over");
// // } else {
// //     console.log("under");
// // }

const title = document.querySelector("#title");

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";

// function handleClick(){
//     const currentcolor = title.style.color;
//     if(currentcolor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     } else {
//         title.style.color = BASE_COLOR;
//     }
    
// }



const CLICKED_CLASS = "clicked";

// function handleClick(){
//     const hasClass = title.classList.contains(CLICKED_CLASS);
//     if(!hasClass){
//         title.classList.add(CLICKED_CLASS);
//     } else {
//         title.classList.remove(CLICKED_CLASS);
//     }
// }

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}


function init(){
    title.addEventListener("click", handleClick);
}

init();