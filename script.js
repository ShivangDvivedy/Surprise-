/* ==========================================================================
   Project Surprise ❤️ | Production V2 Engine for Sushii
   ========================================================================== */

const pages = document.querySelectorAll(".page");
const progressFill = document.getElementById("progressFill");
const bgMusic = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");
const heartsContainer = document.getElementById("hearts");

let currentPage = 0;
let userAnswers = [];
let musicPlaying = false;

// 16 Memory Photos and unique captions tailored perfectly to compile your journey
const photoMemories = [
    { src: "photo1.jpeg", caption: "Every moment with you is a favorite memory 🌸" },
    { src: "photo2.jpeg", caption: "Your smile makes even the most ordinary days special ✨" },
    { src: "photo3.jpeg", caption: "Grateful for every single laugh we've shared 😂" },
    { src: "photo4.jpeg", caption: "Always down for any adventure, as long as it's with you 🚗" },
    { src: "photo5.jpeg", caption: "Just checking in to remind you how awesome you are ❤️" },
    { src: "photo6.jpeg", caption: "To more coffee dates and deep late-night talks ☕" },
    { src: "photo7.jpeg", caption: "Cheering for you today, tomorrow, and every day after 🌟" },
    { src: "photo8.jpeg", caption: "You possess a heart made pure out of kindness 🧸" },
    { src: "photo9.jpeg", caption: "My day automatically gets 100x better when we talk ☀️" },
    { src: "photo10.jpeg", caption: "Thank you for being my constant happy place 🏡" },
    { src: "photo11.jpeg", caption: "Keep shining, keep working hard, keep being you 💫" },
    { src: "photo12.jpeg", caption: "Time flies so fast whenever you're around ⏳" },
    { src: "photo13.jpeg", caption: "Through all your exams and life goals, I got your back 📚" },
    { src: "photo14.jpeg", caption: "You inspire me more than you will ever know 🏔️" },
    { src: "photo15.jpeg", caption: "Wishing for every single dream of yours to come true 🌠" },
    { src: "photo16.jpeg", caption: "Always and forever, your biggest fan. Shivang ❤️" }
];

/* ==========================================================================
   Navigation Engine
   ========================================================================== */
function showPage(index) {
    pages.forEach(p => p.classList.remove("active"));
    pages[index].classList.add("active");
    updateProgress(index);

    // Dynamic Engine Hookups per specific states
    if (pages[index].id === "page7") {
        // Trigger optimized typewriter lines sequentially on letter page
        triggerLetterTypewriter();
    }
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
}

function updateProgress(index) {
    // Exclude dynamic slideshow and black screen from calculating progress index length
    const standardPages = Array.from(pages).filter(p => p.id !== "slideshowPage" && p.id !== "finalEnding");
    const matchedIndex = standardPages.findIndex(p => p.id === pages[index].id);
    
    if (matchedIndex !== -1) {
        const percent = ((matchedIndex + 1) / standardPages.length) * 100;
        progressFill.style.width = percent + "%";
    } else {
        progressFill.style.width = "100%";
    }
}

// Global Next Click Bindings
document.querySelectorAll(".nextButton").forEach(button => {
    button.addEventListener("click", (e) => {
        if (button.id !== "startSurpriseBtn") {
            nextPage();
        }
    });
});

// Auto transitions page loading engine cleanly
window.addEventListener("DOMContentLoaded", () => {
    showPage(0);
    setTimeout(() => {
        nextPage(); // Transitions intro1 -> intro2 perfectly after 1.8s
    }, 1800);
});

/* ==========================================================================
   V2 Audio Audio System
   ========================================================================== */
async function playMusicFrom20() {
    try {
        bgMusic.pause();
        bgMusic.currentTime = 20; // Starts instantly from ~20 seconds
        await bgMusic.play();
        musicPlaying = true;
        musicButton.innerHTML = "⏸️";
    } catch (err) {
        console.log("Audio autoplay block handled:", err);
    }
}

document.getElementById("startSurpriseBtn").addEventListener("click", () => {
    playMusicFrom20();
    nextPage(); // Move smoothly into page1
});

musicButton.addEventListener("click", () => {
    if (musicPlaying) {
        bgMusic.pause();
        musicPlaying = false;
        musicButton.innerHTML = "🎵";
    } else {
        bgMusic.play();
        musicPlaying = true;
        musicButton.innerHTML = "⏸️";
    }
});

/* ==========================================================================
   Question Subsystem & Storage
   ========================================================================== */
document.querySelectorAll(".answer").forEach(button => {
    button.addEventListener("click", () => {
        userAnswers.push(button.innerText.trim());
        localStorage.setItem("ProjectSurpriseAnswers", JSON.stringify(userAnswers));
        nextPage();
    });
});

/* ==========================================================================
   Interactive Special Celebrations
   ========================================================================== */
function runCelebrationBurst() {
    for (let i = 0; i < 70; i++) {
        setTimeout(createHeart, i * 35);
    }
}

const triggerCelebration = () => {
    runCelebrationBurst();
    document.body.style.transition = "filter 0.5s ease";
    document.body.style.filter = "brightness(1.2)";
    setTimeout(() => document.body.style.filter = "", 1000);
    
    // Delayed transition into memory slideshow
    setTimeout(() => {
        nextPage();
        startMemorySlideshow();
    }, 2000);
};

document.getElementById("yesButton").addEventListener("click", triggerCelebration);
document.getElementById("yesButton2").addEventListener("click", triggerCelebration);

/* ==========================================================================
   V2 Memory Slideshow Engine
   ========================================================================== */
function startMemorySlideshow() {
    const slideImg = document.getElementById("slideshowImg");
    const slideCaption = document.getElementById("slideshowCaption");
    let photoIndex = 0;

    function displayNextPhoto() {
        if (photoIndex < photoMemories.length) {
            // Remove animation states to reset transitions
            slideImg.classList.remove("animate");
            slideCaption.classList.remove("animate");

            setTimeout(() => {
                slideImg.src = photoMemories[photoIndex].src;
                slideCaption.innerHTML = photoMemories[photoIndex].caption;

                // Fire transitions
                slideImg.classList.add("animate");
                slideCaption.classList.add("animate");
                
                photoIndex++;
                // Hold each picture for 4.5 seconds to watch zoom and fade out
                setTimeout(displayNextPhoto, 4500); 
            }, 200);
        } else {
            // Completely done with all photos -> move to final black canvas screen
            nextPage();
        }
    }
    displayNextPhoto();
}

/* ==========================================================================
   Premium Aesthetic Support Modules (Typewriter, Sparkles, Ripples)
   ========================================================================== */
function triggerLetterTypewriter() {
    const paragraphs = document.querySelectorAll(".letter p");
    paragraphs.forEach((p, idx) => {
        const text = p.innerHTML;
        if (!p.dataset.typed) {
            p.innerHTML = "";
            p.dataset.typed = "true";
            setTimeout(() => {
                let i = 0;
                function type() {
                    if (i < text.length) {
                        p.innerHTML += text.charAt(i);
                        i++;
                        setTimeout(type, 20);
                    }
                }
                type();
            }, idx * 750);
        }
    });
}

// Particle Floating Generator
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (16 + Math.random() * 24) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
}
setInterval(createHeart, 800);

// Random Background Ambient Sparkles
setInterval(() => {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.innerHTML = "✨";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.fontSize = (12 + Math.random() * 12) + "px";
    sparkle.style.opacity = "0.8";
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.style.opacity = "0";
        sparkle.style.transform = "translateY(-30px)";
    }, 100);
    setTimeout(() => sparkle.remove(), 2500);
}, 2000);

// UI Click Ripple Element Injection
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function(e) {
        const ripple = document.createElement("span");
        const rect = this.getBoundingClientRect();
        ripple.style.left = (e.clientX - rect.left) + "px";
        ripple.style.top = (e.clientY - rect.top) + "px";
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

/* ==========================================================================
   Secret Interactive Messages & Easter Eggs
   ========================================================================== */
let secretTapCount = 0;
document.body.addEventListener("click", (e) => {
    if (e.target.tagName === "H1" || e.target.tagName === "H2") {
        secretTapCount++;
        if (secretTapCount === 7) {
            alert("❤️ Secret Found ❤️\n\nDear Sushii,\nNo matter what life brings, I'll always be cheering for you!\n\n— Shivang");
            secretTapCount = 0;
        }
    }
});
