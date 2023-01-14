const min=document.querySelector('.min');
const sec=document.querySelector('.sec');
const hour=document.querySelector('.hour');

setInterval(() => {
let date=new Date()
let second=date.getSeconds();
let minute=date.getMinutes();
let hours=date.getHours();

let hrotate=30*hours+minute/2;
let mrotate=6*minute;
let srotate=6*second;
hours=hours>12?hours=hour-12:hours=hours
hour.style.transform=`rotate(${hrotate}deg)`;
min.style.transform=`rotate(${mrotate}deg)`;
sec.style.transform=`rotate(${srotate}deg)`;

},1000)
