// Add event listener to booking form
const bookingForm = document.querySelector('.booking form');
bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const checkin = document.querySelector('#checkin').value;
  const checkout = document.querySelector('#checkout').value;
  const roomType = document.querySelector('#room-type').value;
  // Send booking request to server
  fetch('/book', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      checkin,
      checkout,
      roomType
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Handle successful booking
  })
  .catch(error => console.error(error));
});