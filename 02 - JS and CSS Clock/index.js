const time=()=>{
    const hourHand=document.getElementById("hour");
const minuteHand=document.getElementById("minute");
const secondHand=document.getElementById("second");
    const now=new Date();
    const hour=now.getHours();
    const min=now.getMinutes();
    const second=now.getSeconds();
    const hourDeg=(30*hour)+(min/2);
    const minuteDeg=(6*min);
    const secondDeg=(6*second);

    hourHand.style.transform=`rotate(${hourDeg}deg)`;
    minuteHand.style.transform=`rotate(${minuteDeg}deg)`
    secondHand.style.transform=`rotate(${secondDeg}deg)`
}

setInterval(time,1000);