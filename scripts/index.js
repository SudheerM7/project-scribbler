var crtPostModal = document.getElementById("crtPostModal");

// code for  create post button
var createPostButton   = document.getElementById("createPostButton");

// code for  close button
var clsCreatePost = document.getElementById("clsCreatePost");

// code to open the modal
openModal = modal => {
    modal.style.display = "block";
};

// code  to Close the modal
closeModal = modal => {
    modal.style.display = "none";
};

//code to Add events to the buttons
createPostButton.addEventListener("click", () => openModal(crtPostModal));
clsCreatePost.addEventListener("click", () => closeModal(crtPostModal));

window.addEventListener("click", function(event) {
  if (event.target == crtPostModal) {
    crtPostModal.style.display = "none";
  }
});
