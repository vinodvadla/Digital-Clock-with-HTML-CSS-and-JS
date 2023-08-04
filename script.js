let hrs=document.getElementById("hrs")
let min=document.getElementById("min")
let sec=document.getElementById("sec")

setInterval(()=>{
    let date=new Date();
if(hrs.innerHTML<10){
    hrs.innerHTML="0"+date.getHours()
}else{
    hrs.innerHTML=date.getHours();
}
if(min.innerHTML<10){
    min.innerHTML="0"+date.getMinutes()
}else{
    min.innerHTML=date.getMinutes();
}
if(sec.innerHTML<10){
    sec.innerHTML="0"+date.getSeconds()
}else{
    sec.innerHTML=date.getSeconds();
}


if(hrs>12){
    hrs=hrs-12;
}
},1000)
