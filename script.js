// TODO: JavaScript Part

let months = document.querySelector('h1'),
	weeks = document.querySelector('h2'),
	days = document.querySelector('h3'),
	hours = document.querySelector('h4'),
	minutes = document.querySelector('h5'),
	seconds = document.querySelector('h6');

let salvation = new Date(2020, 04, 04);

let sec = Math.floor((salvation - Date.now()) / 1000),
	min = Math.floor(sec / 60),
	hour = Math.floor(min / 60),
	day = Math.floor(hour / 24),
	week = Math.floor(day / 7),
	month = (day / 30).toFixed(1);

months.innerHTML = `${month} <span class='grey'>MONTHS</span>`;
weeks.innerHTML = `${week} <span class='grey'>WEEKS</span>`;
days.innerHTML = `${day} <span class='grey'>DAYS</span>`;
hours.innerHTML = `${hour} <span class='grey'>HOURS</span>`;
minutes.innerHTML = `${min} <span class='grey'>MINUTES</span>`;
seconds.innerHTML = `${sec} <span class='grey'>SECONDS</span>`;

setInterval(() => {
	sec = Math.floor((salvation - Date.now()) / 1000);
	min = Math.floor(sec / 60);
	hour = Math.floor(min / 60);
	day = Math.floor(hour / 24);
	week = Math.floor(day / 7);
	month = (day / 30).toFixed(1);

	months.innerHTML = `${month} <span class='grey'>MONTHS</span>`;
	weeks.innerHTML = `${week} <span class='grey'>WEEKS</span>`;
	days.innerHTML = `${day} <span class='grey'>DAYS</span>`;
	hours.innerHTML = `${hour} <span class='grey'>HOURS</span>`;
	minutes.innerHTML = `${min} <span class='grey'>MINUTES</span>`;
	seconds.innerHTML = `${sec} <span class='grey'>SECONDS</span>`;
}, 1000);
