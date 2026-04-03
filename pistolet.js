// ТАЙМЕР ДО 1 ЯНВАРЯ 2025
function updateTimer() {
  const now = new Date().getTime();
  const newYear = new Date("January 1, 2027 00:00:00").getTime();
  const diff = newYear - now;

  if (diff <= 0) {
    document.getElementById("timer").innerHTML = "<h2>С Новым Годом! 🎉</h2>";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, '0');
  document.getElementById("hours").textContent = String(hours).padStart(2, '0');
  document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
  document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
}

setInterval(updateTimer, 1000);
updateTimer();

// ОТКРЫТИЕ ПОДАРКОВ
function openGift(el) {
  if (el.classList.contains('opened')) return;
  el.classList.add('opened');
  el.innerHTML = "❤️ Счастья!";
}

// СНЕГОВИК
document.getElementById('snowman').addEventListener('click', () => {
  const wishes = [
    "Пусть 2025 будет вкусным!",
    "Здоровья, тепла и Wi-Fi без обрывов!",
    "Пусть мечты сбываются быстрее, чем загружается YouTube!",
    "Счастья, как снега в январе — много и пушистого!"
  ];
  const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
  document.getElementById('wish').textContent = randomWish;
});

// ФЕЙЕРВЕРК
function launchFirework() {
  const firework = document.getElementById('firework');
  firework.classList.add('active');
  setTimeout(() => {
    firework.classList.remove('active');
  }, 2000);
}