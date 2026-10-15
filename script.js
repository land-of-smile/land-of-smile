const menuBtn =
  document.getElementById("menuBtn");

const nav =
  document.getElementById("mainNav");

const toTop =
  document.getElementById("toTop");

menuBtn.addEventListener(
  "click",
  () => {

    nav.classList.toggle(
      "open"
    );

  }
);

nav
  .querySelectorAll("a")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        nav.classList.remove(
          "open"
        );

      }
    );

  });

window.addEventListener(
  "scroll",
  () => {

    if (
      window.scrollY >
      600
    ) {

      toTop.style.display =
        "block";

    } else {

      toTop.style.display =
        "none";

    }

  }
);

toTop.addEventListener(
  "click",
  () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }
);

document
  .querySelectorAll(
    ".rules details"
  )
  .forEach(item => {

    item.addEventListener(
      "toggle",
      () => {

        if (!item.open)
          return;

        document
          .querySelectorAll(
            ".rules details"
          )
          .forEach(other => {

            if (
              other !== item
            ) {

              other.open =
                false;

            }

          });

      }
    );

  });
