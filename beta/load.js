$(document).ready(function() {

    // Experinces 
    $('#work-exp').append(readTextFile('components/work-experince.htm'));



    // Lesson
    /*$('#les-cs50').append(readTextFile('lessons/cs50.htm'));
    $('#les-api').append(readTextFile('lessons/api.htm'));*/


    // Projects
    /*$('#pro-win').append(readTextFile('projects/win.htm'));
    $('#pro-web').append(readTextFile('projects/web.htm'));
    $('#pro-some').append(readTextFile('projects/some.htm'));*/

    //window.scrollTo(0,0);

    //Check if the visitor come from PDF file 
    try {
        const urlParms = new URLSearchParams(window.location.search);
        if (urlParms.get('frompdf') == 'true') {
            alert("Thank you for coming from PDF file to My Digital CV!");
            window.history.pushState("", "", "/");
        }
    } catch {}

})

function readTextFile(file) {
    var allText = "";
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                allText = rawFile.responseText;

            }
        }
    }
    rawFile.send(null);
    return allText;
}


const darkModeToggle = document.getElementById('darkModeToggle');
        
// Check for saved theme preference
if (localStorage.getItem('darkMode') === 'true') {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkModeToggle.checked = true;
}

// Toggle dark mode
darkModeToggle.addEventListener('change', function() {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('darkMode', 'true');
    } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('darkMode', 'false');
    }
});

// Enhanced animation observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add visible class with a slight delay based on index
            const index = Array.from(document.querySelectorAll('.right')).indexOf(entry.target);
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);

            // Add subtle entrance animation
            entry.target.style.transition = `all 1.2s cubic-bezier(0.645, 0.045, 0.355, 1) ${index * 0.2}s`;
            
            // Optional: Add a subtle pop effect after the main animation
            setTimeout(() => {
                entry.target.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    entry.target.style.transform = 'scale(1)';
                }, 200);
            }, 1200 + index * 200);

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all right divs
document.querySelectorAll('.right').forEach(div => {
    observer.observe(div);
});

// Optional: Add scroll-triggered parallax effect
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.right.visible');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.05;
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            card.style.transform = `perspective(1000px) translateZ(${rate}px)`;
        }
    });
});