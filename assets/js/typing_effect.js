const d=document;
let i = 0;
let txt = 'Software Developer';
let speed = 150;
let interval;
let count=0;
export default function typeWriter (tag, text){

            interval = setInterval(() => {
                if (i === text[count].length) {
                    d.querySelector(tag).innerHTML="";
                    i=0;
                    count++;
                    if (!(count < text.length)) {
                        count =0;
                    }
                }
                d.querySelector(tag).innerHTML += text[count].charAt(i);
                i++;
            }, speed);

 


}