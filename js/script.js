// Select all buttons with the class "add-to-cart-btn"
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');

addToCartBtns.forEach((button, index) => {
  button.addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the link from navigating
    
    // Select the popup related to the clicked button
    const popup = document.querySelectorAll('.popup')[index];
    popup.style.display = 'block';
    
    // Hide the popup after 2 seconds
    setTimeout(function() {
      popup.style.display = 'none';
    }, 2000);
  });
});
function thankYouMessage() {
  alert("Thank you for your purchase!"); // Show alert
  window.scrollTo(0, 0); // Scroll to top of the page
}
function submitReview() {
  alert("Thank you for your review!");
  window.scrollTo(0, 0); // Scroll to top of the page
}



        function updateClock() {
            const now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();
            let amPm = hours >= 12 ? 'PM' : 'AM';
    
            // Convert 24-hour time to 12-hour format
            hours = hours % 12 || 12;
    
            // Add leading zeros if needed
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;
    
            const timeString = `${hours}:${minutes}:${seconds} ${amPm}`;
            document.getElementById('clock').innerText = timeString;
        }
    
        // Update the clock every second
        setInterval(updateClock, 1000);
        updateClock(); // Initial call to set the time immediately


