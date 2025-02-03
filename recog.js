// script.js

document.addEventListener('DOMContentLoaded', () => {
    const videoUpload = document.getElementById('video-upload');
    const videoPlayer = document.getElementById('video-player');
    const analyzeButton = document.getElementById('analyze-btn');
    const resultsSection = document.getElementById('results');
    
    // Handle video file upload
    videoUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        
        if (file) {
            const videoURL = URL.createObjectURL(file);
            videoPlayer.src = videoURL;
            videoPlayer.load();
            videoPlayer.style.display = 'block';
        } else {
            videoPlayer.style.display = 'none';
        }
    });

    // Placeholder function for video analysis (could be extended to run actual analysis)
    analyzeButton.addEventListener('click', () => {
        if (!videoPlayer.src) {
            alert('Please upload a video first.');
            return;
        }

        resultsSection.innerHTML = '<p>Analyzing video...</p>';

        // Simulate analysis (to be replaced with actual motion analysis logic)
        setTimeout(() => {
            resultsSection.innerHTML = `
                <p>Analysis Complete!</p>
                <p>Speed: 25 km/h (Estimated)</p>
                <p>Motion: Smooth with no sudden jerks detected.</p>
            `;
        }, 3000);  // Simulate 3 seconds for analysis
    });
});

// Get elements
const login = document.getElementById('login');
const loginModal = document.getElementById('loginModal');
const closeBtn = document.getElementById('closeBtn');

const loginTab = document.getElementById('loginTab');
const signUpTab = document.getElementById('signUpTab');
const forgotTab = document.getElementById('forgotTab');

const loginForm = document.getElementById('loginForm');
const signUpForm = document.getElementById('signUpForm');
const forgotPasswordForm = document.getElementById('forgotPasswordForm');

const forgotPasswordLink = document.getElementById('forgotPasswordLink');

// Open the modal when the login icon is clicked
login.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Close the modal if the user clicks outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

// Tab switching functionality
loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    signUpTab.classList.remove('active');
    forgotTab.classList.remove('active');

    loginForm.style.display = 'block';
    signUpForm.style.display = 'none';
    forgotPasswordForm.style.display = 'none';
});

signUpTab.addEventListener('click', () => {
    signUpTab.classList.add('active');
    loginTab.classList.remove('active');
    forgotTab.classList.remove('active');

    signUpForm.style.display = 'block';
    loginForm.style.display = 'none';
    forgotPasswordForm.style.display = 'none';
});

forgotTab.addEventListener('click', () => {
    forgotTab.classList.add('active');
    loginTab.classList.remove('active');
    signUpTab.classList.remove('active');

    forgotPasswordForm.style.display = 'block';
    loginForm.style.display = 'none';
    signUpForm.style.display = 'none';
});

// Forgot password link functionality
forgotPasswordLink.addEventListener('click', () => {
    forgotTab.click(); // Switch to the forgot password form when clicked
});



// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    // Mobile menu toggle functionality
    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Close the mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('#nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
        });
    });
});
