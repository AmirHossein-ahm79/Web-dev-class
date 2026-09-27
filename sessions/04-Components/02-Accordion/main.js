const buttons = document.querySelectorAll(".accordion-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentItem = button.parentElement;

    // Close other items
    document.querySelectorAll(".accordion-item").forEach((item) => {
      if (item !== currentItem) {
        item.classList.remove("active");
      }
    });

    // Toggle current item
    currentItem.classList.toggle("active");
  });
});
