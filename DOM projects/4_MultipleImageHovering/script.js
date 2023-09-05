const elems=document.querySelectorAll(".elem");

elems.forEach((elem)=>{

    elem.addEventListener("mouseenter",()=>{
        elem.childNodes[3].style.opacity=1;
    });
    elem.addEventListener("mouseleave",()=>{
        elem.childNodes[3].style.opacity=0;
    });
    elem.addEventListener("mousemove",(e)=>{
        elem.childNodes[3].style.left=e.x+"px";
        // elem.childNodes[3].style.top=e.y+"px";
    });
})
