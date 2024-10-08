// Select all links with a href attribute that starts with '#'
const links = document.querySelectorAll('a[href^="#"]');

// Add an event listener to each link
links.forEach((link) => {
  link.addEventListener('click', function (e) {
    // Prevent the default link behavior
    e.preventDefault();

    // Get the href attribute of the link
    const href = link.getAttribute('href');

    // Get the element with the ID that matches the href attribute
    const target = document.querySelector(href);

    // If the target element exists, scroll to it smoothly with an offset
    if (target) {
      const offset = 80; // Change this value to adjust the offset (increase for more space above)
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  });
});

let scrollTimeout; // Variable to hold the timeout ID

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');

  // Set navbar opacity to 70% when scrolling
  navbar.style.opacity = '0.7';

  // Clear the previous timeout
  clearTimeout(scrollTimeout);

  // Reset opacity to 100% when scrolling stops
  scrollTimeout = setTimeout(() => {
    navbar.style.opacity = '1';
  }, 200); // Adjust delay as needed (200ms in this case)
});

document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = mobileMenu.querySelectorAll('a'); // Select all nav links

  // Toggle mobile menu
  mobileMenuButton.addEventListener('click', () => {
    const isExpanded =
      mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
    mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.style.display = isExpanded ? 'none' : 'block';
  });

  // Close the mobile menu when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.style.display = 'none';
      mobileMenuButton.setAttribute('aria-expanded', 'false');
    });
  });
});
