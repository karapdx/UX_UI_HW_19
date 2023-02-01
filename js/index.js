const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
  item.addEventListener("click", function() {
    this.classList.toggle("active");
    const body = this.querySelector(".accordion-body");
    const toggle = this.querySelector(".toggle");
    body.style.display === "block"
      ? (body.style.display = "none") && (toggle.innerHTML = "+")
      : (body.style.display = "block") && (toggle.innerHTML = "-");
  });
});
