// Efek interaksi sederhana: alert saat gambar diklik
document.querySelectorAll('.character-img').forEach(img => {
  img.addEventListener('click', () => {
    alert("Kamu mengklik gambar tokoh utama RE9!");
  });
});