const d=document;
let i = 0;
let txt = 'Software Developer';
let speed = 100;
let interval;
export default function typeWriter (tag){
    console.log(txt.length);
    interval = setInterval(() => {
            if (i === txt.length) {
                d.querySelector(tag).innerHTML="";
                i=0;
            }
            d.querySelector(tag).innerHTML += txt.charAt(i);
            i++;
    }, speed);

}