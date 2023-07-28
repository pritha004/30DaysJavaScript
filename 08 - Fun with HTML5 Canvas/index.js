const canvas=document.querySelector('#draw');
  const ctx=canvas.getContext('2d');
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
  ctx.strokeStyle='black';
  ctx.lineJoin='round';
  ctx.lineCap='round';
  ctx.lineWidth=10;

  let isDrawing=false;
  let lastX=0;
  let lastY=0;
  console.log(lastX,lastY);

  function draw(e){
    if(!isDrawing)
    return;
    // console.log(e);
    ctx.strokeStyle='red';
    ctx.lineWidth=10;
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    lastX=e.offsetX;
    lastY=e.offsetY;
    console.log(lastX,lastY);
  }

  
  canvas.addEventListener('mousedown',(e)=>{
    isDrawing=true;
    lastX=e.offsetX;
    lastY=e.offsetY;
    console.log(lastX,lastY);
  });
  canvas.addEventListener('mousemove',draw);
  canvas.addEventListener('mouseup',()=>{isDrawing=false});
  canvas.addEventListener('mouseout',()=>{isDrawing=false});