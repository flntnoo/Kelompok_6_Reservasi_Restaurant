// Slot interaktif
const slots = document.querySelectorAll(".slot");
let selectedTime = null;

slots.forEach(slot => {
  slot.addEventListener("click", () => {
    slots.forEach(s => s.classList.remove("selected"));
    slot.classList.add("selected");
    selectedTime = slot.textContent;
  });
});

// Tombol Find Slots
document.getElementById("findSlots").addEventListener("click", () => {
  if (selectedTime) {
    alert(`✅ You have selected ${selectedTime} for your reservation!`);
  } else {
    alert("⚠️ Please select a time slot before continuing.");
  }
});
