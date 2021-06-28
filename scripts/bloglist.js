// Search for the modals & get the reference in the below given code
var dltPostModal = document.getElementById("dltPostModal");
var cancelDlt = document.getElementById("cancelDlt");
var confirmDlt = document.getElementById("confirmDlt");

// Search for the dlt icons that opened the modal code
var deleteIcons = document.querySelectorAll(".delete-icon");
var dltIconsArray = Array.from(deleteIcons);

//  code for Deleting the seleted post
var selectedPost;
openDltPostModal = (dltPostModal, clickedIcon) => {
  selectedPost = "";
  openModal(dltPostModal);
  selectedPost = clickedIcon.closest(".post");
};

deletePost = () => {
  selectedPost.remove();
  closeModal(dltPostModal);
};

//code for Event handlers
dltIconsArray.map(deleteIcon => {
    deleteIcon.addEventListener("click", e =>
      openDltPostModal(dltPostModal, e.target)
    );
});

window.addEventListener("click", function(event) {
    if (event.target == dltPostModal) {
      dltPostModal.style.display = "none";
    }
});

cancelDlt.addEventListener("click", () => closeModal(dltPostModal));
confirmDlt.addEventListener("click", () => deletePost());

// code for Searching the dots
var dots = document.querySelectorAll(".dots");
var dotsArray = Array.from(dots);

dotsArray.map(dot => {
    dot.addEventListener("click", e => navigateToPost(e.target));
});

navigateToPost = postThread => {
    var post = postThread.closest(".blogPost");
    var author = post.querySelector(".username p").textContent.trim();
    var postTitle = post.querySelector(".title p").textContent.trim();
    var postContent = post.querySelector(".content").textContent.trim();
    // Not used in this assigment.
    sessionStorage.setItem("author", author);
    sessionStorage.setItem("postTitle", postTitle);
    sessionStorage.setItem("postContent", postContent);
    window.location.href = "../html/post.html";
};