document.addEventListener('DOMContentLoaded', () => {
  // Contoh: simulasi angka statistik
  const totalBeams = 630300;
  const totalUsers = 28200;

  animateCount('beams', totalBeams);
  animateCount('users', totalUsers);

  document.getElementById('discordBtn').addEventListener('click', () => {
    window.location.href = "https://discord.gg/k5M6eme2CK";
  });
});

function animateCount(id, target) {
  const el = document.getElementById(id);
  let count = 0;
  const step = Math.ceil(target / 100);
  const interval = setInterval(() => {
    count += step;
    if (count >= target) {
      el.textContent = target.toLocaleString();
      clearInterval(interval);
    } else {
      el.textContent = count.toLocaleString();
    }
  }, 20);
}
