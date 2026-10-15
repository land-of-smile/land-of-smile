/* =========================
   LOADING SCREEN
========================= */

const loadingScreen =
  document.getElementById(
    "loadingScreen"
  );

window.addEventListener(
  "load",
  () => {

    setTimeout(
      () => {

        loadingScreen.classList.add(
          "hide"
        );

      },
      1600
    );

  }
);


/* =========================
   MENU
========================= */

const menuBtn =
  document.getElementById(
    "menuBtn"
  );

const mainNav =
  document.getElementById(
    "mainNav"
  );

menuBtn.addEventListener(
  "click",
  () => {

    mainNav.classList.toggle(
      "open"
    );

  }
);

mainNav
  .querySelectorAll("a")
  .forEach(
    link => {

      link.addEventListener(
        "click",
        () => {

          mainNav.classList.remove(
            "open"
          );

        }
      );

    }
  );


/* =========================
   TOPBAR + TOP BUTTON
========================= */

const topbar =
  document.getElementById(
    "topbar"
  );

const toTop =
  document.getElementById(
    "toTop"
  );

window.addEventListener(
  "scroll",
  () => {

    const y =
      window.scrollY;

    topbar.classList.toggle(
      "scrolled",
      y > 40
    );

    toTop.classList.toggle(
      "show",
      y > 600
    );

  }
);

toTop.addEventListener(
  "click",
  () => {

    window.scrollTo({

      top:
        0,

      behavior:
        "smooth"

    });

  }
);


/* =========================
   REVEAL ANIMATION
========================= */

const revealObserver =
  new IntersectionObserver(

    entries => {

      entries.forEach(
        entry => {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "visible"
            );

            revealObserver.unobserve(
              entry.target
            );

          }

        }
      );

    },

    {

      threshold:
        0.12

    }

  );

document
  .querySelectorAll(
    ".reveal"
  )
  .forEach(
    element => {

      revealObserver.observe(
        element
      );

    }
  );


/* =========================
   RULE ACCORDION
========================= */

const ruleCards =
  document.querySelectorAll(
    ".rule-card"
  );

ruleCards.forEach(
  card => {

    card.addEventListener(
      "toggle",
      () => {

        if (
          !card.open
        ) {

          return;

        }

        ruleCards.forEach(
          other => {

            if (
              other !== card
            ) {

              other.open =
                false;

            }

          }
        );

      }
    );

  }
);


/* =========================
   SUPERNATURAL MODE
========================= */

const supernaturalRule =
  document.getElementById(
    "supernaturalRule"
  );

supernaturalRule.addEventListener(
  "toggle",
  () => {

    document.body.classList.toggle(

      "supernatural-mode",

      supernaturalRule.open

    );

  }
);


/* =========================
   RULE SEARCH
========================= */

const ruleSearch =
  document.getElementById(
    "ruleSearch"
  );

const clearSearch =
  document.getElementById(
    "clearSearch"
  );

const searchResultText =
  document.getElementById(
    "searchResultText"
  );


function searchRules() {

  const keyword =
    ruleSearch.value
      .trim()
      .toLowerCase();

  let results =
    0;

  ruleCards.forEach(
    card => {

      const text =
        card.innerText
          .toLowerCase();

      const match =
        text.includes(
          keyword
        );

      if (
        keyword === ""
      ) {

        card.classList.remove(
          "hidden"
        );

        card.open =
          false;

        return;

      }

      if (
        match
      ) {

        card.classList.remove(
          "hidden"
        );

        card.open =
          true;

        results++;

      } else {

        card.classList.add(
          "hidden"
        );

        card.open =
          false;

      }

    }
  );


  if (
    keyword === ""
  ) {

    searchResultText.textContent =
      "";

  } else if (
    results > 0
  ) {

    searchResultText.textContent =
      `พบ ${results} หมวดกฎที่เกี่ยวข้องกับ "${ruleSearch.value}"`;

  } else {

    searchResultText.textContent =
      `ไม่พบกฎที่เกี่ยวข้องกับ "${ruleSearch.value}"`;

  }

}


ruleSearch.addEventListener(
  "input",
  searchRules
);


clearSearch.addEventListener(
  "click",
  () => {

    ruleSearch.value =
      "";

    searchRules();

    ruleSearch.focus();

  }
);


/* =========================
   AMBIENT AUDIO
========================= */

const ambientAudio =
  document.getElementById(
    "ambientAudio"
  );

const soundButton =
  document.getElementById(
    "soundButton"
  );

let soundEnabled =
  false;


soundButton.addEventListener(
  "click",
  async () => {

    if (
      !soundEnabled
    ) {

      try {

        ambientAudio.volume =
          0.28;

        await ambientAudio.play();

        soundEnabled =
          true;

        soundButton.textContent =
          "🔊";

        soundButton.title =
          "ปิดเสียงบรรยากาศ";

      } catch (
        error
      ) {

        alert(
          "ยังไม่มีไฟล์ ambient.mp3 หรือเบราว์เซอร์ไม่สามารถเล่นเสียงได้"
        );

      }

    } else {

      ambientAudio.pause();

      soundEnabled =
        false;

      soundButton.textContent =
        "🔇";

      soundButton.title =
        "เปิดเสียงบรรยากาศ";

    }

  }
);
