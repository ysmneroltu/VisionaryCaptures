const urlParams = new URLSearchParams(window.location.search);
const sessionType = urlParams.get('sessionType');
const photographerName = urlParams.get('photographerName');
const date = urlParams.get('date');
const time = urlParams.get('time');
const specialRequest = urlParams.get('specialRequest');
const fullName = urlParams.get('fullName');
const email = urlParams.get('email');
const phone = urlParams.get('phone');

document.getElementById('sessionType').textContent = sessionType;
document.getElementById('photographerName').textContent = photographerName;
document.getElementById('date').textContent = date;
document.getElementById('time').textContent = time;
document.getElementById('specialRequest').textContent = specialRequest;
document.getElementById('fullName').textContent = fullName;
document.getElementById('email').textContent = email;
document.getElementById('phone').textContent = phone;