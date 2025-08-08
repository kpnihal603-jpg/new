// Responsive menu toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
};


// Resume tab switching
const resumeButtons = document.querySelectorAll('.resume-btn');
const resumeSections = document.querySelectorAll('.resume-details');

resumeButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    // Remove active classes
    resumeButtons.forEach(b => b.classList.remove('active'));
    resumeSections.forEach(s => s.classList.remove('active'));

    // Add active class to clicked button and matching section
    btn.classList.add('active');
    resumeSections[index].classList.add('active');
  });
});
