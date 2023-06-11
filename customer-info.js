document.getElementById('customerInfoForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  
  // Retrieve the booking information
  const sessionType = sessionStorage.getItem('sessionType');
  const photographerName = sessionStorage.getItem('photographerName');
  const date = sessionStorage.getItem('date');
  const time = sessionStorage.getItem('time');
  const specialRequest = sessionStorage.getItem('specialRequest');

  sessionStorage.clear();
  
  // Redirect to the booking confirmation page
  window.location.href = `booking-confirmed.html?sessionType=${encodeURIComponent(sessionType)}&photographerName=${encodeURIComponent(photographerName)}&date=${encodeURIComponent(date)}&time=${encodeURIComponent(time)}&specialRequest=${encodeURIComponent(specialRequest)}&fullName=${encodeURIComponent(fullName)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}`;
});