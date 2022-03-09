(()=>{"use strict";const e=({formId:e,someElem:t=[]})=>{const o=document.getElementById(e),n=document.createElement("div");try{if(!o)throw new Error("Верните форму на место, пожалуйста!");o.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=o.querySelectorAll("input"),l=new FormData,a={};var r;l.forEach(((e,t)=>{a[t]=e})),t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?a[e.id]=t.textContent:"input"===e.type&&(a[e.id]=t.value)})),n.textContent="Загрузка...",o.append(n),(r=a,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{n.textContent="Спасибо! Наш менеджер с вами свяжется!",e.forEach((e=>{e.value=""}))})).catch((e=>{n.textContent="Ошибка..."}))})()}))}catch(e){console.log(e.message)}};(function(e){const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds"),l=document.getElementsByClassName("timer-action")[0],a=()=>{let e=(()=>{let e=(new Date("15 March 2022").getTime()-(new Date).getTime())/1e3,t=Math.floor(e/3600),o=Math.floor(e/60%60),n=Math.floor(e%60);return e<0&&(e=0,t=0,o=0,n=0,l.textContent="Акция закончилась..."),{timeRemaning:e,hours:t,minutes:o,seconds:n}})();e.hours<10?t.textContent="0"+e.hours:t.textContent=e.hours,e.minutes<10?o.textContent="0"+e.minutes:o.textContent=e.minutes,e.seconds<10?n.textContent="0"+e.seconds:n.textContent=e.seconds,e.timeRemaning>0&&setTimeout(a,1e3)};a()})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),o=(t.querySelectorAll("ul>li>a"),()=>{t.classList.toggle("active-menu")});e.addEventListener("click",o),t.addEventListener("click",(e=>{console.dir(e.target),e.target.classList.contains("close-btn")&&o(),e.target.classList.contains("close-btn")||o()}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelector(".popup-content"),o=document.querySelectorAll(".popup-btn"),n=window.innerWidth;o.forEach((o=>{o.addEventListener("click",(()=>{e.style.display="block",n>768&&(({timing:e,draw:t,duration:o})=>{let n=performance.now();requestAnimationFrame((function l(a){let r=(a-n)/o;r>1&&(r=1);let c=e(r);t(c),r<1&&requestAnimationFrame(l)}))})({duration:400,timing:e=>e,draw(e){t.style.top=25*e+"%"}})}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none")}))})(),(()=>{const e=document.querySelectorAll("input.calc-item"),t=document.querySelector(".main-form"),o=t.querySelector("input[type=text]"),n=t.querySelector("input[type=tel]"),l=t.querySelector("input[type=email]"),a=document.querySelector(".footer-form"),r=a.querySelector("input[type=text]"),c=a.querySelector("input[type=tel]"),u=a.querySelector("input[type=email]"),s=a.querySelector("input.mess"),i=document.querySelector("#form3"),d=i.querySelector("input[type=text]"),m=i.querySelector("input[type=tel]"),v=i.querySelector("input[type=email]");t.addEventListener("submit",(e=>{e.preventDefault(),(/[^а-яА-Я -]/g.test(o.value)||""===o.value)&&(alert("Введите ваше имя на кириллице"),o.value=""),(/[^a-zA-Z0-9@-_.!~*']/g.test(l.value)||""===l.value)&&(alert("Введите корректную адресную почту"),l.value=""),(/[^0-9()-]/g.test(n.value)||""===n.value)&&(alert("Введите корректный номер телефона"),n.value="")})),a.addEventListener("submit",(e=>{e.preventDefault(),(/[^а-яА-Я -]/g.test(r.value)||""===r.value)&&(alert("Введите ваше имя на кириллице"),r.value=""),(/[^a-zA-Z0-9@-_.!~*']/g.test(u.value)||""===u.value)&&(alert("Введите корректную адресную почту"),u.value=""),(/[^0-9()-]/g.test(c.value)||""===c.value)&&(alert("Введите корректный номер телефона"),c.value=""),/[^а-яА-Я -]/g.test(s.value)&&(alert("Введите корректное сообщение"),s.value="")})),i.addEventListener("submit",(e=>{e.preventDefault(),(/[^а-яА-Я -]/g.test(d.value)||""===d.value)&&(alert("Введите ваше имя на кириллице"),d.value=""),(/[^a-zA-Z0-9@-_.!~*']/g.test(v.value)||""===v.value)&&(alert("Введите корректную адресную почту"),v.value=""),(/[^0-9()-]/g.test(m.value)||""===m.value)&&(alert("Введите корректный номер телефона"),m.value="")})),e.forEach((e=>{e.addEventListener("input",(t=>{t.preventDefault(),/[^0-9]/g.test(e.value)&&(alert("Вписывать нужно только цифры!"),e.value="")}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const n=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===n?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelectorAll(".dot");let n,l=0;const a=(e,t,o)=>{e[t].classList.remove(o)},r=(e,t,o)=>{e[t].classList.add(o)},c=()=>{a(t,l,"portfolio-item-active"),a(o,l,"dot-active"),l++,l>=t.length&&(l=0),r(t,l,"portfolio-item-active"),r(o,l,"dot-active")},u=(e=1500)=>{n=setInterval(c,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(a(t,l,"portfolio-item-active"),a(o,l,"dot-active"),e.target.matches("#arrow-right")?l++:e.target.matches("#arrow-left")?l--:e.target.classList.contains("dot")&&o.forEach(((t,o)=>{e.target===t&&(l=o)})),l>=t.length&&(l=0),l<0&&(l=t.length-1),r(t,l,"portfolio-item-active"),r(o,l,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(n)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&u(2e3)}),!0),u(2e3)})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),l=document.querySelector(".calc-count"),a=document.querySelector(".calc-day"),r=document.getElementById("total");t.addEventListener("input",(t=>{t.target!==o&&t.target!==n&&t.target!==l&&t.target!==a||(()=>{const t=+o.options[o.selectedIndex].value,c=n.value;let u=0,s=1,i=1;l.value>1&&(s+=+l.value/10),a.value&&a.value<5?i=2:a.value&&a.value<10&&(i=1.5),u=o.value&&n.value?e*t*c*s*i:0,r.textContent=u})()}))})(100),e({formId:"form1",someElem:[{type:"block",id:"total"}]}),e({formId:"form2",someElem:[{type:"block",id:"total"}]}),e({formId:"form3",someElem:[{type:"block",id:"total"}]})})();