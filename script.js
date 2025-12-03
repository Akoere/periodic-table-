const modal = document.getElementById("element-modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.querySelector(".close-btn");
const allElements = document.querySelectorAll(".element");

allElements.forEach(element => {
  element.addEventListener("click", () => {

    const name = element.getAttribute("data-name");
    const description = element.getAttribute("data-description");

    
    modalTitle.innerText = name;
    modalDesc.innerText = description;

  
    modal.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});


const guideModal = document.getElementById("guide-modal");
const startBtn = document.getElementById("start-btn");


window.addEventListener("load", () => {
  guideModal.style.display = "block";
});


startBtn.addEventListener("click", () => {
  guideModal.style.display = "none";
});