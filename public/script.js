function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active'); // Ensure the 'active' class is toggled
}

function addClass() {
    document.body.classList.add("sent");
  }
  
  sendLetter.addEventListener("click", addClass);