// Highlight current section in navbar on scroll
document.addEventListener("DOMContentLoaded", () => {
  const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: "#navbar",
    offset: 70,
  });
});
