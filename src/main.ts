import { assert } from "./assert";
import "./style.css";

const transition = () => {
  const startButton = document.getElementById("startButton");
  assert(startButton);
  const diff1 = document.getElementById("difference1");
  assert(diff1);
  const diff2 = document.getElementById("difference2");
  assert(diff2);

  startButton.addEventListener("click", () => {
    document.startViewTransition(() => {
      diff1.hidden = true;
      diff2.hidden = false;
    });
  });
};

transition();

const transition2 = () => {
  const startButton2 = document.getElementById("startButton2");
  assert(startButton2);
  const diff1 = document.getElementById("difference2-1");
  assert(diff1);
  const diff2 = document.getElementById("difference2-2");
  assert(diff2);

  startButton2.addEventListener("click", () => {
    diff1.classList.add("fadeOut");
    diff2.classList.add("fadeIn");
  });
};

transition2();

const transition3 = () => {
  const startButton3 = document.getElementById("startButton3");
  assert(startButton3);
  const diff1 = document.getElementById("difference3-1");
  assert(diff1);
  const diff2 = document.getElementById("difference3-2");
  assert(diff2);

  startButton3.addEventListener("click", () => {
    diff1.classList.add("fadeOut");
    diff2.classList.add("fadeIn");
  });
};

transition3();

const transition4 = () => {
  const startButton4 = document.getElementById("startButton4");
  assert(startButton4);
  const diff1 = document.getElementById("difference4-1");
  assert(diff1);
  const diff2 = document.getElementById("difference4-2");
  assert(diff2);
  const container = document.getElementById("container");

  startButton4.addEventListener("click", () => {
    document.startViewTransition(() => {
      diff1.hidden = true;
      diff2.hidden = false;
      container?.classList.add("is-zoomed");
    });
  });
};

transition4();

const transition5 = () => {
  const startButton4 = document.getElementById("startButton5");
  assert(startButton4);
  const diff1 = document.getElementById("difference5-1");
  assert(diff1);
  const diff2 = document.getElementById("difference5-2");
  assert(diff2);

  startButton4.addEventListener("click", () => {
    document.startViewTransition(() => {
      diff1.hidden = true;
      diff2.hidden = false;
    });
  });
};

transition5();
