function pagination(currentList) {
  const indicators = document.querySelectorAll(".nav li");

  for (let indicator of indicators) {
    indicator === currentList
      ? indicator.classList.add("is-active")
      : indicator.classList.remove("is-active");
  }
}

export default pagination;
