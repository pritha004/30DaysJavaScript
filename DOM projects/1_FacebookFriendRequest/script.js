const addButton=document.querySelector("#add");
const state=document.querySelector("h5")
let check=0;

addButton.addEventListener("click",()=>{
    if(check===0)
    {
        state.innerHTML="You are now friends";
        state.style.color="cadetblue";
        addButton.textContent="Remove";
        addButton.style.backgroundColor="#dadada";
        addButton.style.color="black";
        check=1;
    }
    else{
        state.innerHTML="Stranger";
        state.style.color="rgb(248, 100, 100)";
        addButton.textContent="Add Friend";
        addButton.style.backgroundColor="cadetblue";
        addButton.style.color="white";
        check=0;
    }
})
