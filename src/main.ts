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
      diff1.hidden = false;
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
