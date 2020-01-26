// TODO: JavaScript Part

let months = document.querySelector('h1');
let weeks = document.querySelector('h2');
let days = document.querySelector('h3');
let hours = document.querySelector('h4');
let minutes = document.querySelector('h5');
let seconds = document.querySelector('h6');

let salvation = new Date(2020, 04, 04);
let today = Date.now();
let dur = salvation - today;

let milli = dur;
let sec = Math.floor(milli / 1000);
let min = Math.floor(sec / 60);
let hour = Math.floor(min / 60);
let day = Math.floor(hour / 24);
let week = Math.floor(day / 7);
let month = Math.floor(day / 30);

console.log('millis - ', dur);
console.log('secs - ', sec, ' - ', Math.round(sec));
console.log('mins - ', min, ' - ', Math.round(min));
console.log('hours - ', hour, ' - ', Math.round(hour));
console.log('days - ', day, ' - ', Math.round(day));
console.log('weeks - ', week, ' - ', Math.round(week));
console.log('months - ', month, ' - ', Math.round(month));

months.innerHTML = `${month} <span class='grey'>MONTHS</span>`;
weeks.innerHTML = `${week} <span class='grey'>WEEKS</span>`;
days.innerHTML = `${day} <span class='grey'>DAYS</span>`;
