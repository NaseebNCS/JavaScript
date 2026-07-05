document.addEventListener("click", function (e) {
  document.querySelectorAll("code").forEach((codeEl) => {
    const rect = codeEl.getBoundingClientRect();

    // width & height area for the ::after button
    const btnWidth = 50;
    const btnHeight = 30;

    const clickedButton =
      e.clientX > rect.right - btnWidth &&
      e.clientX < rect.right &&
      e.clientY > rect.top &&
      e.clientY < rect.top + btnHeight;

    if (clickedButton) {
      const preText = codeEl.querySelector("pre").innerText.trim();

      navigator.clipboard.writeText(preText).then(() => {
        codeEl.style.outline = "2px solid rgb(255, 171, 171)";
        setTimeout(() => (codeEl.style.outline = "none"), 500);
      });
    }
  });
});
