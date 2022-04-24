const backButton = document.querySelector("[data-back-button]");
backButton.addEventListener("click", handleBackButton);

function handleBackButton(e) {
  const uri = backButton.dataset.backButton;
  const paramsString = window.location.search.split("?")[1];
  const paramStringArray = paramsString.split("&");
  paramStringArray.pop();
  const params =
    paramStringArray.length !== 0 ? `?${paramStringArray.join("&")}` : ``;

  const url = `${window.location.origin}${uri}${params}`;
  window.location = url;
}
