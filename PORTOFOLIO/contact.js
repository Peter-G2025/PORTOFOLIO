const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');


});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    alert("Το μήνυμά σου στάλθηκε με επιτυχία! ✅");
    // εδώ μπορείς να προσθέσεις αποστολή σε server ή API
    e.target.reset();
  } else {
    alert("Παρακαλώ συμπλήρωσε όλα τα πεδία.");
  }
});
