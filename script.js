document.addEventListener("DOMContentLoaded", function() {
  
  // 1. Pidato Sambutan di Home Page
  let userName = "Budi";
  document.getElementById("userName").textContent = userName;

  // 2. Validasi dan Proses Formulir Kirim Pesan
  let contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();

      let nama = document.getElementById("nama").value.trim();
      let email = document.getElementById("email").value.trim();
      let pesan = document.getElementById("pesan").value.trim();

      if (nama === "" || email === "" || pesan === "") {
        alert("Semua bidang harus diisi!");
        return;
      }

      let formResult = document.getElementById("formResult");
      formResult.innerHTML = `<h3>Pesan Terkirim</h3>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong> ${pesan}</p>`;

      contactForm.reset();
    });
  }
})