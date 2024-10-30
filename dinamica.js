function openModal(element) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "flex";
    modalImg.src = element.querySelector("img").src;
  }
  
  function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  }
  