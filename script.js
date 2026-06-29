/* ==========================================
   Project Surprise ❤️
   Made for Sushii
========================================== */

const pages = document.querySelectorAll(".page");

const nextButtons = document.querySelectorAll(".nextButton");

const answers = document.querySelectorAll(".answer");

const progressFill =
document.getElementById("progressFill");

const yesButton =
document.getElementById("yesButton");

const yesButton2 =
document.getElementById("yesButton2");

const hearts =
document.getElementById("hearts");

const musicButton =
document.getElementById("musicButton");

let currentPage = 0;

let userAnswers = [];

/* =======================================
   Show Page
======================================= */

function showPage(index){

pages.forEach(page=>{

page.classList.remove("active");

});

pages[index].classList.add("active");

updateProgress();

}

/* =======================================
   Next Page
======================================= */

function nextPage(){

    if(currentPage < pages.length-1){

        currentPage++;

        showPage(currentPage);

        // Start music automatically after the first click
        if(currentPage === 1 && !musicPlaying){

            bgMusic.currentTime = 20;

            bgMusic.play().then(()=>{

                musicPlaying = true;

                musicButton.innerHTML = "⏸️";

            }).catch(err=>{

                console.log(err);

            });

        }

    }

}
/* =======================================
   Progress Bar
======================================= */

function updateProgress(){

const percent =
((currentPage+1)/pages.length)*100;

progressFill.style.width =
percent+"%";

}

/* =======================================
   Next Buttons
======================================= */

nextButtons.forEach(button=>{

button.addEventListener(

"click",

nextPage

);

});

/* =======================================
   Save Answers
======================================= */

answers.forEach(button=>{

button.addEventListener(

"click",

()=>{

userAnswers.push(

button.innerText

);

nextPage();

}

);

});

/* =======================================
   Debug
======================================= */

console.log(

"Project Surprise Loaded ❤️"

);

showPage(currentPage);

/* =======================================
   Floating Hearts Animation
======================================= */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (18 + Math.random() * 24) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 700);


/* =======================================
   YES Button Animation
======================================= */

function celebration() {

    for (let i = 0; i < 80; i++) {

        setTimeout(() => {

            createHeart();

        }, i * 30);

    }

    setTimeout(() => {

        nextPage();

    }, 1500);

}

yesButton.addEventListener(

    "click",

    celebration

);

yesButton2.addEventListener(

    "click",

    celebration

);

/* ==========================
   MUSIC PLAYER
========================== */

const bgMusic = document.getElementById("bgMusic");

bgMusic.preload = "auto";

let musicPlaying = false;

musicButton.innerHTML = "🎵";

musicButton.addEventListener("click", async () => {

    try{

        if(musicPlaying){

            bgMusic.pause();

            musicPlaying = false;

            musicButton.innerHTML = "🎵";

        }else{

            if(bgMusic.currentTime < 20){

                bgMusic.currentTime = 20;

            }

            await bgMusic.play();

            musicPlaying = true;

            musicButton.innerHTML = "⏸️";

        }

    }catch(err){

        console.error(err);

    }

});
/* =======================================
   Page Transition
======================================= */

function fadeOut(page){

page.style.opacity="0";

page.style.transform="translateY(30px)";

}

function fadeIn(page){

page.style.opacity="1";

page.style.transform="translateY(0px)";

}


/* =======================================
   Show Answers In Console
======================================= */

window.addEventListener(

"beforeunload",

()=>{

console.log(

"Answers:",

userAnswers

);

}

);


/* =======================================
   Secret Easter Egg
======================================= */

let tapCount = 0;

document.querySelector("h1").addEventListener(

"click",

()=>{

tapCount++;

if(tapCount==5){

alert(

"❤️ Secret Found ❤️\n\nYou found my hidden message.\n\nThank you for being amazing, Sushii 🌸"

);

tapCount=0;

}

}

);

console.log("Animations Loaded ❤️");

/* ===========================================
   TYPEWRITER EFFECT
=========================================== */

function typeWriter(element, speed = 35) {

    const originalText = element.innerHTML;

    element.innerHTML = "";

    let i = 0;

    function typing() {

        if (i < originalText.length) {

            element.innerHTML += originalText.charAt(i);

            i++;

            setTimeout(typing, speed);

        }

    }

    typing();

}

/* ===========================================
   GLOW EFFECT ON BUTTONS
=========================================== */

const allButtons = document.querySelectorAll("button");

allButtons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.boxShadow =
            "0 0 25px rgba(255,105,180,.8)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.boxShadow = "";

    });

});

/* ===========================================
   PAGE CHANGE ANIMATION
=========================================== */

function animateCurrentPage() {

    const active = document.querySelector(".page.active");

    if (!active) return;

    active.style.opacity = "0";

    active.style.transform = "translateY(30px)";

    setTimeout(() => {

        active.style.transition = ".6s";

        active.style.opacity = "1";

        active.style.transform = "translateY(0)";

    }, 50);

}

const originalNextPage = nextPage;

nextPage = function () {

    originalNextPage();

    animateCurrentPage();

};

/* ===========================================
   AUTO HEART BURST
=========================================== */

function heartBurst() {

    for (let i = 0; i < 25; i++) {

        setTimeout(createHeart, i * 60);

    }

}

/* ===========================================
   FINAL PAGE EFFECT
=========================================== */

const finalButtons = [yesButton, yesButton2];

finalButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        heartBurst();

        document.body.style.transition = "1s";

        document.body.style.filter =
            "brightness(1.15)";

        setTimeout(() => {

            document.body.style.filter = "";

        }, 1200);

    });

});

/* ===========================================
   AUTO TYPE LETTER
=========================================== */

window.addEventListener("load", () => {

    const letter =
        document.querySelector(".letter");

    if (letter) {

        const paragraphs =
            letter.querySelectorAll("p");

        paragraphs.forEach((p, index) => {

            setTimeout(() => {

                typeWriter(p, 18);

            }, index * 800);

        });

    }

});

/* ===========================================
   LOCAL STORAGE
=========================================== */

function saveAnswers() {

    localStorage.setItem(

        "ProjectSurpriseAnswers",

        JSON.stringify(userAnswers)

    );

}

answers.forEach(btn => {

    btn.addEventListener("click", saveAnswers);

});

/* ===========================================
   SECRET MESSAGE
=========================================== */

let logoTap = 0;

document.body.addEventListener("click", e => {

    if (e.target.tagName === "H1") {

        logoTap++;

        if (logoTap === 7) {

            alert(

`❤️

You found my hidden message.

Dear Sushii,

No matter what life brings,

I'll always be cheering for you.

— Shivang ❤️`

            );

            logoTap = 0;

        }

    }

});

console.log("Part 3 Loaded ❤️");


/* ==========================================
   PART 4
   Premium Effects
========================================== */

/* ---------- Floating Background Glow ---------- */

const background = document.getElementById("background");

let glow = 0;

setInterval(() => {

    glow += 0.5;

    document.body.style.backgroundPosition =
        glow + "% 50%";

}, 60);


/* ---------- Random Sparkles ---------- */

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";

    sparkle.style.left = Math.random() * 100 + "vw";

    sparkle.style.top = Math.random() * 100 + "vh";

    sparkle.style.fontSize =
        (10 + Math.random() * 15) + "px";

    sparkle.style.pointerEvents = "none";

    sparkle.style.opacity = ".8";

    sparkle.style.transition = "2s";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.style.opacity = "0";

        sparkle.style.transform =
            "translateY(-40px)";

    }, 100);

    setTimeout(() => {

        sparkle.remove();

    }, 2200);

}

setInterval(createSparkle, 1800);


/* ---------- Button Ripple ---------- */

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", e => {

        const ripple = document.createElement("span");

        ripple.style.position = "absolute";

        ripple.style.width = "20px";

        ripple.style.height = "20px";

        ripple.style.borderRadius = "50%";

        ripple.style.background =
            "rgba(255,255,255,.4)";

        ripple.style.left =
            e.offsetX - 10 + "px";

        ripple.style.top =
            e.offsetY - 10 + "px";

        ripple.style.animation =
            "ripple .7s ease-out";

        button.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 700);

    });

});


/* ---------- Time Spent ---------- */

const websiteOpenedAt = Date.now();

function getTimeSpent(){

    return Math.floor(

        (Date.now()-websiteOpenedAt)/1000

    );

}


/* ---------- Browser ---------- */

const browserInfo =
navigator.userAgent;


/* ---------- Final Summary ---------- */

function showSummary(){

console.log("==============");

console.log("Project Surprise");

console.log("Answers");

console.log(userAnswers);

console.log(

"Time",

getTimeSpent(),

"seconds"

);

console.log(browserInfo);

console.log("==============");

}


/* ---------- YES BUTTON ---------- */

yesButton.addEventListener(

"click",

showSummary

);

yesButton2.addEventListener(

"click",

showSummary

);


/* ---------- Fake Loading ---------- */

window.addEventListener(

"load",

()=>{

const loader=document.createElement("div");

loader.style.position="fixed";

loader.style.left="0";

loader.style.top="0";

loader.style.width="100%";

loader.style.height="100%";

loader.style.background="#0f0c29";

loader.style.display="flex";

loader.style.justifyContent="center";

loader.style.alignItems="center";

loader.style.fontSize="28px";

loader.style.zIndex="999999";

loader.innerHTML="❤️";

document.body.appendChild(loader);

setTimeout(()=>{

loader.style.transition=".8s";

loader.style.opacity="0";

setTimeout(()=>loader.remove(),800);

},1000);

});


console.log("Part 4 Loaded ❤️");


