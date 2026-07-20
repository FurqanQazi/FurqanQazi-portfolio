const comSkill = document.getElementById('com');
const comCard = document.getElementById('com-card');
const psSkill = document.getElementById('ps');
const psCard = document.getElementById('ps-card');
const timeSkill = document.getElementById('time');
const timeCard = document.getElementById('time-card');
const ATSkill = document.getElementById('AT');
const ATCard = document.getElementById('AT-card');
const teamSkill = document.getElementById('Team');
const teamCard = document.getElementById('team-card');
const learnSkill = document.getElementById('learn');
const learnCard = document.getElementById('learn-card');


comSkill.addEventListener('click', () => {
    comSkill.classList.add('hide');   
    comCard.classList.add('active');
});

comCard.addEventListener('click', () => {
    comCard.classList.remove('active'); 
    comSkill.classList.remove('hide');
});
//PS Skills
psSkill.addEventListener('click', () => {
    psSkill.classList.add('hide');   
    psCard.classList.add('active');
});

psCard.addEventListener('click', () => {
    psCard.classList.remove('active');
    psSkill.classList.remove('hide');
});
//Time Skill
timeSkill.addEventListener('click', () => {
    timeSkill.classList.add('hide');
    timeCard.classList.add('active');
});

timeCard.addEventListener('click', () => {
    timeCard.classList.remove('active');
    timeSkill.classList.remove('hide');
});
// Analytics skill
ATSkill.addEventListener('click', () => {
    ATSkill.classList.add('hide');
    ATCard.classList.add('active');
});

ATCard.addEventListener('click', () => {
    ATCard.classList.remove('active');
    ATSkill.classList.remove('hide');
});
//Team skill
teamSkill.addEventListener('click', () => {
    teamSkill.classList.add('hide');
    teamCard.classList.add('active');
});

teamCard.addEventListener('click', () => {
    teamCard.classList.remove('active');
    teamSkill.classList.remove('hide');
});
//learning skill
learnSkill.addEventListener('click', () => {
    learnSkill.classList.add('hide');
    learnCard.classList.add('active');
});

learnCard.addEventListener('click', () => {
    learnCard.classList.remove('active');
    learnSkill.classList.remove('hide');
});


const overlay = document.getElementById('overlay');

function openCard(card, skill) {
    card.classList.add('active');
    skill.style.transform = 'rotateY(90deg)';
    skill.style.opacity = '0';

    overlay.classList.add('active'); // show overlay
    document.body.style.overflow = 'hidden'; // block scroll

    // disable clicking on other skills
    document.querySelectorAll('.my-skill').forEach(s => {
        if(s !== skill) s.style.pointerEvents = 'none';
    });

    
}

function closeCard(card, skill) {
    card.classList.remove('active');
    skill.style.transform = 'rotateY(0deg)';
    skill.style.opacity = '1';

    overlay.classList.remove('active'); // hide overlay
    document.body.style.overflow = 'auto'; // enable scroll

    // enable clicking on other skills
    document.querySelectorAll('.my-skill').forEach(s => {
        s.style.pointerEvents = 'auto';
    });
}


// Example for communication card
comSkill.addEventListener('click', () => openCard(comCard, comSkill));
comCard.addEventListener('click', () => closeCard(comCard, comSkill));

// Repeat the same for other skills/cards
psSkill.addEventListener('click', () => openCard(psCard, psSkill));
psCard.addEventListener('click', () => closeCard(psCard, psSkill));

timeSkill.addEventListener('click', () => openCard(timeCard, timeSkill));
timeCard.addEventListener('click', () => closeCard(timeCard, timeSkill));

ATSkill.addEventListener('click', () => openCard(ATCard, ATSkill));
ATCard.addEventListener('click', () => closeCard(ATCard, ATSkill));

teamSkill.addEventListener('click', () => openCard(teamCard, teamSkill));
teamCard.addEventListener('click', () => closeCard(teamCard, teamSkill));

learnSkill.addEventListener('click', () => openCard(learnCard, learnSkill));
learnCard.addEventListener('click', () => closeCard(learnCard, learnSkill));


const allskills = document.querySelectorAll('.my-skill') 

allskills.forEach(skilli=>{ 
    skilli.addEventListener('click',()=>{ 
        psSkill.scrollIntoView({
            behavior: 'smooth', block: 'center' 
        }) 
    }) 
})

const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.right-arrow');
const prevBtn = document.querySelector('.left-arrow');

let current = 0;

function updateSlides() {
    slides.forEach(slide => slide.className = 'slide');

    slides[current].classList.add('active');
    slides[(current + 1) % slides.length].classList.add('next');
    slides[(current - 1 + slides.length) % slides.length].classList.add('prev');
}

nextBtn.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    updateSlides();
});

prevBtn.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    updateSlides();
});

slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        current = index;
        updateSlides();
    });
});

updateSlides();


const form = document.getElementById("connectForm");
const connectbtn = document.getElementById("connectbtn");
const email = document.getElementById("email");
const phone = document.getElementById("phnetxt");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    await fetch(form.action, {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: new FormData(form)
    });

    email.style.display = "none";
    phone.style.display = "none";
    connectbtn.style.width = "400px";
    connectbtn.textContent = "I will shortly reach you out!🤗😇";
    connectbtn.style.transform = "scale(1.1)";
    connectbtn.disabled = true;

  } catch {
    connectbtn.textContent = "Submission failed — try again";
  }
});



(() => {
  // Run ONLY on <=1000px, but still attach listeners always
  const isMobile = () => window.innerWidth <= 1000;

  // Scope to your section
  const root = document.querySelector("#fifth");
  if (!root) return;

  const layout = root.querySelector(".cert-layout");
  if (!layout) return;

  // IMPORTANT: slot order must match your CSS z-index 1..7
  // slot1 = bottom-right, slot2 = bottom-left ... slot7 = main-cert
  const SLOT_QUERY = [
    ".cert.side-cert.bottom-right", // slot 1  -35deg
    ".cert.side-cert.bottom-left",  // slot 2  -22deg
    ".cert.side-cert.left",         // slot 3  -12deg
    ".cert.side-cert.bottom",       // slot 4   0deg
    ".cert.side-cert.bottom-2",     // slot 5  12deg
    ".cert.side-cert.right",        // slot 6  22deg
    ".cert.main-cert"               // slot 7  35deg
  ];

  const SLOT_ANGLES = [-35, -22, -12, 0, 12, 22, 35];

  let slots = [];
  let animating = false;
  let hasClickedOnce = false;
  let topIsOpen = false;

  function buildSlots() {
    slots = SLOT_QUERY.map(sel => layout.querySelector(sel)).filter(Boolean);
    if (slots.length !== 7) {
      console.warn("Certificates: expected 7 certs, found:", slots.length);
      return false;
    }
    return true;
  }

  function indexOfEl(el) {
    return slots.indexOf(el);
  }

  function setTransition(ms) {
    slots.forEach(el => {
      el.style.transition = `transform ${ms}ms ease`;
    });
  }

  function applySlots(straightTop) {
    for (let i = 0; i < 7; i++) {
      const el = slots[i];
      const slotNum = i + 1; // 1..7

      // Keep z-index strictly between 1..7
      el.style.zIndex = String(slotNum);

      // Keep your fan, only straighten + scale the top after click
      if (slotNum === 7 && straightTop) {
        el.style.transform = "translateX(-50%) rotate(0deg) scale(1.3)";
      } else {
        el.style.transform = `translateX(-50%) rotate(${SLOT_ANGLES[i]}deg) scale(1)`;
      }
    }
  }

  function swapForward(i) {
    const tmp = slots[i];
    slots[i] = slots[i + 1];
    slots[i + 1] = tmp;
  }

  function animateToTop(clickedEl) {
    if (!isMobile()) return;
    if (animating) return;

    const startIndex = indexOfEl(clickedEl);
    if (startIndex === -1) return;

    animating = true;

    // Do NOT change load state. Only after first click we take control.
    if (!hasClickedOnce) {
        hasClickedOnce = true;
        topIsOpen = false;        // NEW
        setTransition(1);
        applySlots(false);     
    }

    // If user clicks the current slot-7 card: straighten + scale
    // If user clicks the current slot-7 card: TOGGLE open/close
    if (startIndex === 6) {
    const total = 450;
    setTransition(total);
    if (topIsOpen) {
    
        topIsOpen = false;
        applySlots(false);
    } else {
        topIsOpen = true;
        applySlots(true);
    }
        setTimeout(() => {
        setTransition(400);
        animating = false;
        }, total);

        return;
    }


    // Step-by-step from slot N to slot 7
    const steps = 6 - startIndex;
    const totalDuration = 520; // 0.4–0.6 seconds total
    const stepMs = Math.max(70, Math.round(totalDuration / steps));

    setTransition(stepMs);

    for (let s = 0; s < steps; s++) {
      setTimeout(() => {
        swapForward(startIndex + s);

        // While moving: keep fan angles (still not straight)
        applySlots(false);

        // Final: straighten + scale once it reaches slot 7
        if (s === steps - 1) {
          setTimeout(() => {
            topIsOpen = true;
            applySlots(true);

            setTimeout(() => {
              setTransition(400);
              animating = false;
            }, stepMs);
          }, stepMs);
        }
      }, s * stepMs);
    }
  }

  function attach() {
    if (!buildSlots()) return;

    // Attach click listeners to all 7 cards
    slots.forEach(el => el.addEventListener("click", () => animateToTop(el)));

    console.log("Certificates: shuffle ready (7 elements found).");
  }

  // Your script is near </body>, but this makes it safe either way
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", attach);
  } else {
    attach();
  }
})();






















