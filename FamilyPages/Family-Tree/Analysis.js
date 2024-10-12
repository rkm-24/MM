// js code STARTS for opening and closing the navbar starts
const bar = document.getElementById(`bar`);
        const close = document.getElementById(`close`);
        const nav = document.getElementById('navbar');

        if (bar) {
            bar.addEventListener('click', () => {
                nav.classList.add('active');
            })
        }

        if (close) {
            close.addEventListener('click', () => {
                nav.classList.remove('active');
            })
        }
// js code ENDS for opening and closing the navbar starts





const variable = localStorage.getItem('variable');
console.log(variable);
document.getElementById("level-count14").innerHTML = "Members in L-14 = " +variable;



const variable1 = localStorage.getItem('variable1');
console.log(variable1);
document.getElementById("level-count15").innerHTML = "Members in L-15 = " +variable1;


const variable2 = localStorage.getItem('variable2');
console.log(variable2);
document.getElementById("fem-count1").innerHTML = "All Female Count = " +variable2;



const variable3 = localStorage.getItem('variable3');
console.log(variable3);
document.getElementById("percent-fem1").innerHTML = "All Female share = " +variable3+ "%";


const variable4 = localStorage.getItem('variable4');
console.log(variable4);
document.getElementById("male-count1").innerHTML = "All Male Count = " +variable4;


const variable5 = localStorage.getItem('variable5');
console.log(variable5);
document.getElementById("counter1").innerHTML = "Total Members added in Family Tree = " +variable5;


const variable6 = localStorage.getItem('variable6');
console.log(variable6);
document.getElementById("level-count16").innerHTML = "Members in L-16 = " +variable6;