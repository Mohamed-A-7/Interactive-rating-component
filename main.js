let rate = document.querySelectorAll(".rate button");
let submit = document.querySelector(".submit");

rate.forEach((btn) => {
  btn.addEventListener("click", () => {
    rate.forEach((button) => {
      button.classList.remove("clicked");
    });
    btn.classList.add("clicked");
    // ##########################################################
    submit.onclick = function () {
      let NumberOfRating = btn.innerHTML;
      document.querySelector(".main.card-rate").remove();
      document.querySelector(
        ".your-rate"
      ).innerHTML = `You selected ${NumberOfRating} out of 5`;
    };
  });
});
