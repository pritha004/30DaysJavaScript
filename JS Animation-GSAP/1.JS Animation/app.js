const button=document.querySelector("button");
const sidebar=document.querySelector(".sidebar");

button.addEventListener("click",()=>{
    // if(sidebar.classList.contains("hide")){
    //     sidebar.classList.remove("hide");
    // }else{
    //     sidebar.classList.add("hide")
    // }

    sidebar.classList.toggle("hide")
})