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

if(currentPage<pages.length-1){

currentPage++;

showPage(currentPage);

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


/* =======================================
   Music Button
======================================= */

let musicPlaying = false;

musicButton.addEventListener(

    "click",

    () => {

        if (musicPlaying) {

            musicButton.innerHTML = "🎵";

            musicPlaying = false;

        }

        else {

            musicButton.innerHTML = "🔇";

            musicPlaying = true;

        }

    }

);


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


