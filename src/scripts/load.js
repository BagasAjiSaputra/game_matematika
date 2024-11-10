export function initLoad() {
    window.addEventListener("load", () => {
      const euy = document.querySelector(".euy");
      if (euy) {
        euy.classList.add("hidden");
      }
    });
  }
  