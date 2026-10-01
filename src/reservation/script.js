(() => {
  const steps = document.querySelectorAll(".step");
  if (steps.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    steps.forEach((step) => observer.observe(step));
  } else {
    steps.forEach((step) => step.classList.add("is-visible"));
  }

  const form = document.getElementById("resa-form");
  const success = document.getElementById("resa-success");
  if (!form || !success) return;

  const dateInput = document.getElementById("date");
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 2);
    dateInput.min = tomorrow.toISOString().slice(0, 10);
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    form.classList.add("is-sent");
    success.classList.add("is-shown");
  });
})();
