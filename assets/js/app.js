// Toggle accordion
document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const icon = button.querySelector('i');

    // Toggle active class
    content.classList.toggle('active');

    // Change icon
    if (content.classList.contains('active')) {
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-minus');
    } else {
      icon.classList.remove('fa-minus');
      icon.classList.add('fa-plus');
    }
  });
});

// Sticky navigation
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('nav');
  const backToTop = document.getElementById('backToTop');

  if (window.scrollY > 50) {
    navbar.classList.add('bg-white', 'shadow-md');
    navbar.classList.remove('bg-transparent');

    // Show back to top button
    backToTop.classList.remove('opacity-0', 'invisible');
    backToTop.classList.add('opacity-100', 'visible');
  } else {
    navbar.classList.remove('bg-white', 'shadow-md');
    navbar.classList.add('bg-transparent');

    // Hide back to top button
    backToTop.classList.add('opacity-0', 'invisible');
    backToTop.classList.remove('opacity-100', 'visible');
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  });
});

// Form validation
const contactForm = document.querySelector('#contact form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
      alert('Please fill in all required fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Simulate form submission
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
  });
}

// Add animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.animate-on-scroll');

  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (elementPosition < screenPosition) {
      element.classList.add('animate-fadeIn');
    }
  });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const body = document.body;

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  body.classList.toggle('menu-open');
});

mobileMenuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  body.classList.remove('menu-open');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    body.classList.remove('menu-open');
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', e => {
  if (
    mobileMenu.classList.contains('active') &&
    !mobileMenu.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {
    mobileMenu.classList.remove('active');
    body.classList.remove('menu-open');
  }
});

// Back to top button functionality
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.remove('opacity-0', 'invisible');
    backToTopButton.classList.add('opacity-100', 'visible');
  } else {
    backToTopButton.classList.add('opacity-0', 'invisible');
    backToTopButton.classList.remove('opacity-100', 'visible');
  }
});

backToTopButton.addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// Tab Switching Functionality
document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons and contents
      tabButtons.forEach(btn => {
        btn.classList.remove('active', 'text-green-600', 'border-b-2', 'border-green-600');
        btn.classList.add('text-gray-600');
      });
      tabContents.forEach(content => content.classList.add('hidden'));

      // Add active class to clicked button and corresponding content
      button.classList.add('active', 'text-green-600', 'border-b-2', 'border-green-600');
      button.classList.remove('text-gray-600');
      const tabId = button.getAttribute('data-tab');
      document.getElementById(`${tabId}-tab`).classList.remove('hidden');
    });
  });
});
