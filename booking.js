document.getElementById('bookingForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const sessionType = document.getElementById('sessionType').value;
  const photographerName = document.getElementById('photographerName').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const specialRequest = document.getElementById('specialRequest').value;
  
  // Store the booking information
  sessionStorage.setItem('sessionType', sessionType);
  sessionStorage.setItem('photographerName', photographerName);
  sessionStorage.setItem('date', date);
  sessionStorage.setItem('time', time);
  sessionStorage.setItem('specialRequest', specialRequest);
  
  // Redirect to the customer information page
  window.location.href = 'customer-info.html';
});