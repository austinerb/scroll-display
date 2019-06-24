const scrollDisplay = document.querySelector("#scroll-display");

document.addEventListener("scroll", updateScrollDisplay);

// update scroll Display
// get scroll Display
// percent = viewport pos / (window height - viewport height)
// set scroll display width percent to percent
function updateScrollDisplay() {
  let percent = window.scrollY / (document.documentElement.scrollHeight
  - window.innerHeight);

  percent = Math.ceil(percent * 100);

  scrollDisplay.style.width = percent + "%";
}
