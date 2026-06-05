const moreInfoButtons = document.querySelectorAll(".more-info-button");

for (const moreInfoButton of moreInfoButtons) {
  moreInfoButton.addEventListener("click", (event) => {
    const popupSection = event.currentTarget.parentElement.nextElementSibling;
    popupSection.style.display = "block";
  });
}

const closePopupButtons = document.querySelectorAll(".close-popup-button");

for (const closePopupButton of closePopupButtons) {
  closePopupButton.addEventListener("click", (event) => {
    console.log(event.target);
    const popupSection =
      event.currentTarget.parentElement.parentElement.parentElement;
    popupSection.style.display = "none";
  });
}

const createLoadingContainer = function () {
  const loadingContainer = document.querySelector(".loading-container");

  //check for the existance of children in the object, if there are none it means there are no images so create one
  if (!loadingContainer.innerHTML) {
    const loader = document.createElement("img");
    loader.src = "../../images/loader.gif";
    loader.alt = "loader gif while the data loads";
    loader.width = 60;
    loader.height = 60;
    loadingContainer.append(loader);
  } else {
    //if there is an image, we have inserted it before and it is hidden by fetchCatFacts, so remove the display-none tag
    loadingContainer.setAttribute("class", "loading-container");
  }
  return loadingContainer; //return the object properly
};

const fetchCatFacts = async function () {
  const catFactsList = document.getElementById("cat-facts-list");
  catFactsList.replaceChildren();

  createLoadingContainer();

  try {
    const response = await fetch("https://catfact.ninja/facts?limit=10");
    const data = await response.json();

    data.data.forEach((element) => {
      const catFactItem = document.createElement("p");
      catFactItem.setAttribute("class", "cat-fact-list-item");
      catFactItem.textContent = element.fact;
      catFactsList.append(catFactItem);
    });
  } catch (error) {
    console.error("Error fetching cat facts:", error);
  } finally {
    const loading = document.querySelector(".loading-container");
    loading.setAttribute("class", "display-none loading-container");
  }
};

//fetchCatFacts();

document
  .querySelector(".reload-cat-facts")
  .addEventListener("click", fetchCatFacts);
