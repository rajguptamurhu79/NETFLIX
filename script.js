document.addEventListener('DOMContentLoaded', () => {
    // Handle form submission
    const emailForm = document.getElementById('email-form');
    const emailInput = document.getElementById('email');

    emailForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = emailInput.value;
        
        if (validateEmail(email)) {
            // Simulate sign up process
            console.log('Starting signup process for:', email);
            // Here you would typically make an API call to your backend
            simulateSignup(email);
        }
    });

    // Handle language selection
    const languageSelect = document.getElementById('language');
    languageSelect.addEventListener('change', (e) => {
        const selectedLanguage = e.target.value;
        changeLanguage(selectedLanguage);
    });

    // Handle sign in button
    const signInBtn = document.querySelector('.sign-in-btn');
    signInBtn.addEventListener('click', () => {
        // Redirect to sign in page
        console.log('Redirecting to sign in page...');
        // window.location.href = '/signin';
    });
});

// Email validation function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Simulate signup process
function simulateSignup(email) {
    const btn = document.querySelector('.get-started-btn');
    const originalText = btn.innerHTML;
    
    // Show loading state
    btn.innerHTML = 'Loading...';
    btn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        alert('Thanks for signing up! Check your email for next steps.');
    }, 2000);
}

// Handle language change
function changeLanguage(lang) {
    const translations = {
        en: {
            title: 'Unlimited movies, TV shows and more',
            subtitle: 'Starts at ₹149. Cancel at any time.',
            cta: 'Ready to watch? Enter your email to create or restart your membership.',
            button: 'Get Started',
            signin: 'Sign In'
        },
        hi: {
            title: 'अनलिमिटेड फ़िल्में, टीवी शो और बहुत कुछ',
            subtitle: '₹149 से शुरू. कभी भी कैंसल करें.',
            cta: 'देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें.',
            button: 'शुरू करें',
            signin: 'साइन इन करें'
        }
    };

    // Update content
    document.querySelector('.hero-content h1').textContent = translations[lang].title;
    document.querySelector('.hero-content h2').textContent = translations[lang].subtitle;
    document.querySelector('.hero-content p').textContent = translations[lang].cta;
    document.querySelector('.get-started-btn').textContent = translations[lang].button;
    document.querySelector('.sign-in-btn').textContent = translations[lang].signin;
}