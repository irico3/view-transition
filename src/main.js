const transition = () => {
  const startButton = document.getElementById("startButton");
  const diff1 = document.getElementById("difference1");
  const diff2 = document.getElementById("difference2");

  startButton.addEventListener("click", () => {
    document.startViewTransition(() => {
      diff1.hidden = true;
      diff2.hidden = false;
    });
  });
};
