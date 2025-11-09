document.addEventListener("DOMContentLoaded", () => {
    const otpBtn = document.getElementById("getOtpBtn");
    const otpSection = document.getElementById("otpSection");
    const countdownEl = document.getElementById("countdown");
    const form = document.getElementById("profileForm");
    const countrySelect = document.getElementById("countryCode");
    const phoneInput = document.getElementById("phone");
  
    // Menangani tombol Get OTP
    otpBtn.addEventListener("click", () => {
      otpSection.classList.remove("d-none");
      let timeLeft = 15;
      countdownEl.textContent = timeLeft;
  
      const countdown = setInterval(() => {
        timeLeft--;
        countdownEl.textContent = timeLeft;
        if (timeLeft <= 0) clearInterval(countdown);
      }, 1000);
    });
  
    // Simulasi submit form
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fullPhone = `${countrySelect.value} ${phoneInput.value}`;
      alert(`Profile updated successfully!\nFull Name: ${document.getElementById("fullname").value}\nPhone: ${fullPhone}`);
    });
  });