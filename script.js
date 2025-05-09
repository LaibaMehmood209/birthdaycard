function showBirthdayPage() {
  document.querySelector('.card').style.display = 'none';
  document.getElementById('birthdayPage').classList.remove('hidden');
  startSlideshow();
  

  // Play background music
  const music = document.getElementById("bgMusic");
  music.play().catch(error => {
    console.log("Autoay blocked:", error);
  });
}

function showMemories() {
  document.getElementById('memories').classList.remove('hidden');
}

let images = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg"];
let index = 0;
function startSlideshow() {
  setInterval(() => {
    index = (index + 1) % images.length;
    document.getElementById('slide').src = images[index];
  }, 3000);
}

