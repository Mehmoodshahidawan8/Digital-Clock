let is24HourFormat = true; // Default to 24-hour format

function updateClock() {
  const now = new Date();

  // Time
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  // Format the time
  let period = "";
  if (!is24HourFormat) {
    period = hours >= 12 ? " PM" : " AM";
    hours = hours % 12 || 12; // Convert 24-hour format to 12-hour
  }
  hours = hours.toString().padStart(2, '0');
  document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}${period}`;

  // Date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString(undefined, options);
  document.getElementById('date').textContent = formattedDate;
}

function toggleFormat() {
  is24HourFormat = !is24HourFormat;
  const button = document.getElementById('toggle-format');
  button.textContent = is24HourFormat ? "Switch to 12-Hour Format" : "Switch to 24-Hour Format";
  updateClock(); // Immediately update the clock with the new format
}

// Event Listeners
document.getElementById('toggle-format').addEventListener('click', toggleFormat);
setInterval(updateClock, 1000); // Update the clock every second

// Initialize the clock
updateClock();
