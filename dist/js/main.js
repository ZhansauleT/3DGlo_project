(()=>{"use strict";(function(e){const t=document.getElementById("timer-hours"),l=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds"),n=()=>{let e=(new Date("1 March 2022").getTime()-(new Date).getTime())/1e3,t=Math.floor(e/3600),l=Math.floor(e/60%60),r=Math.floor(e%60);return e<0&&(e=0,t=0,l=0,r=0),{timeRemaning:e,hours:t,minutes:l,seconds:r}},u=()=>{let e=n();t.textContent=e.hours,l.textContent=e.minutes,r.textContent=e.seconds,0===n&&(t.textContent="0"+e.hours,l.textContent="00",r.textContent="00"),e.timeRemaning>0&&setTimeout(u,1e3)};u()})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),l=t.querySelector(".close-btn"),r=t.querySelectorAll("ul>li>a"),n=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",n),l.addEventListener("click",n),r.forEach((e=>e.addEventListener("click",n)))})(),(()=>{const e=document.querySelector(".popup"),t=(document.querySelector(".popup-content"),document.querySelectorAll(".popup-btn"));window.innerWidth,t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block"}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none")}))})(),(()=>{const e=document.querySelectorAll("input.calc-item"),t=document.querySelector(".main-form"),l=t.querySelector("input[type=text]"),r=t.querySelector("input[type=tel]"),n=t.querySelector("input[type=email]"),u=document.querySelector(".footer-form"),a=u.querySelector("input[type=text]"),o=u.querySelector("input[type=tel]"),c=u.querySelector("input[type=email]"),s=u.querySelector("input.mess"),i=document.querySelector("#form3"),v=i.querySelector("input[type=text]"),d=i.querySelector("input[type=tel]"),m=i.querySelector("input[type=email]");t.addEventListener("submit",(e=>{e.preventDefault(),/[^а-яА-Я -]/g.test(l.value)||""===l.value?(alert("Введите ваше имя на кириллице"),l.value=""):console.log("no error"),(/[^a-zA-Z0-9@-_.!~*']/g.test(n.value)||""===l.value)&&(alert("Введите корректную адресную почту"),n.value=""),/[^0-9()-]/g.test(r.value)&&""===l.value&&(alert("Введите корректный номер телефона"),r.value="")})),u.addEventListener("submit",(e=>{e.preventDefault(),(/[^а-яА-Я -]/g.test(a.value)||""===a.value)&&(alert("Введите ваше имя на кириллице"),a.value=""),(/[^a-zA-Z0-9@-_.!~*']/g.test(c.value)||""===a.value)&&(alert("Введите корректную адресную почту"),c.value=""),(/[^0-9()-]/g.test(o.value)||""===a.value)&&(alert("Введите корректный номер телефона"),o.value=""),(/[^а-яА-Я -]/g.test(s.value)||""===s.value)&&(alert("Введите корректное сообщение"),s.value="")})),i.addEventListener("submit",(e=>{e.preventDefault(),(/[^а-яА-Я -]/g.test(v.value)||""===v.value)&&(alert("Введите ваше имя на кириллице"),v.value=""),(/[^a-zA-Z0-9@-_.!~*']/g.test(m.value)||""===m.value)&&(alert("Введите корректную адресную почту"),m.value=""),(/[^0-9()-]/g.test(d.value)||""===d.value)&&(alert("Введите корректный номер телефона"),r.value="")})),e.forEach((e=>{e.addEventListener("input",(t=>{t.preventDefault(),/[^0-9]/g.test(e.value)&&(alert("Вписывать нужно только цифры!"),e.value="")}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),l=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest("service-header-tab")){const r=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===r?(e.classList.add("active"),l[t].classList.remove("d-none")):(e.classList.remove("active"),l[t].classList.remove("d-none"))}))}}))})()})();