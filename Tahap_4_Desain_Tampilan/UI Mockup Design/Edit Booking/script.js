document.getElementById("editBookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Booking updated successfully!");
});

function cancelBooking() {
  if (confirm("Are you sure you want to cancel editing?")) {
    window.location.href = "index.html";
  }
}
