const card=document.querySelector("#card");
const love=document.querySelector("i");

card.addEventListener("dblclick",()=>{
    love.style.transform="translate(-50%,-50%) scale(1)";
    love.style.opacity=0.8;
    setTimeout(()=>{
        love.style.opacity=0;
        love.style.transform="translate(-50%,-50%) scale(0)";
    },1000)
})

