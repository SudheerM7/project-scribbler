var likeCounter = 0;
var titleNode = document.getElementById("blogTitle");
var authorNode = document.getElementById("writer");
var contentNode = document.getElementById("blogContent");
var authorContent = 'Jimi';
var titleContent = "The legacy of Jimi Hendrix";
var postsContent = 'Jimi Hendrix was arguably the greatest instrumentalist in the history of rock music.[1] Hendrix ecpanded the range and vocabulary of the electric guitar into areas no musician had ever ventured before. His boundless drive, techncal ability and creative application of such effects as distortion forever trasnformed the sound of rock and roll. While creating his unique musical voice and guitar style, Hendrix synthesized diverse genres, including blues, R&B. soul, British rock,American folk music, 1950s rock and roll, psychedelic and jazz. Hendrix favored overdriven amplifiers with high volume and grain.[119] He was instrumental in developing the developing the previously undesirable technique of guitar amplifier feedback, and helped to popularize use of the wah-wah pedal in mainstream rock.[348] He rejected the standard barre chord fretting technique used by most guitarists in favor of fertting the low 6th string root notes with his thumb.[349] He applied this technique during the beggining bars of "Little Wing", which allowed him to sustain the root note of chords while also playing melody. This method has been described as piano style, with thumb playing what a pianist\'s left hand would play and the others finges playing melody as a right hand.[350] Having spent several years fronting a trio, he developed an ability to play rythm chords and lead lines together, giving the audio impression that more than one guitarist was perfoming.[351][nb41] He was the first artistto incorporate stereophonic phasing effects in rock music recordings.[354] Holly George-Warren of Rolling Stone commented:"Hendrix pioneeredthe use of the instrument as  an electronicsound source. Players before him had experimented with feedback and distortion, but Hendrix turned those effects and others into a controlled,fluid vocabulary every bit as personal as the blues with which he began."[3][nb 42] Aledort wrote: "In rock guitar, there are but two eras--before Hendrix after Hendrix."';

window.onload = function() {
    // Fill in post content
    authorNode.innerHTML = authorContent;
    titleNode.innerHTML = titleContent;
    contentNode.innerHTML = postsContent;
};

document.addEventListener("click",function(e) {
    if (hasClass(e.target, "saved")) {
      // When edit button is clicked
      e.target.classList.remove("saved");
      e.target.classList.add("unsaved");
      e.target.innerHTML = 'Save <i class="fa fa-save"></i>';
      titleNode.setAttribute("contenteditable", true);
      titleNode.classList.add("editable");
      contentNode.setAttribute("contenteditable", true);
      contentNode.classList.add("editable");
    }
    else if (hasClass(e.target, "unsaved")) {
        // When save button is clicked
        e.target.classList.remove("unsaved");
        e.target.classList.add("saved");
        e.target.innerHTML = 'Edit <i class="fa fa-edit"></i>';
        titleNode.setAttribute("contenteditable", false);
        titleNode.classList.remove("editable");
        contentNode.setAttribute("contenteditable", false);
        contentNode.classList.remove("editable");
        
        // Updating Session storage upon Save to reflect updated data if the page is refreshed
        sessionStorage.setItem("blogTitle", titleNode.innerText);
        sessionStorage.setItem("blogContent", contentNode.innerText);
    }
    else if (hasClass(e.target, "like-button")) {
        // When like button is clicked
        likeCounter++;
        e.target.innerHTML = '<i class="fa fa-thumbs-up"></i> Liked';
        if (likeCounter == 1) {
            document.getElementById("likeText").innerHTML = "1 person likes this!";
        } 
        else if (likeCounter > 1) {
            document.getElementById("likeText").innerHTML =
            likeCounter + " people like this!";
        }
    }
    else if (hasClass(e.target, "comment-button")) {
        // When Comment button is clicked
        var commentText = document.getElementById("cmmntBox").value.trim();
        if (commentText !== "") {
        // Following code will display the latest comment on the top
          document.getElementById("commentsWrapper").innerHTML = "<p>" +commentText+ "</p>" + document.getElementById("commentsWrapper").innerHTML;
        }        
        document.getElementById("cmmntBox").value = "";
    }
}, false);

function hasClass(elem, className) {
  return elem.classList.contains(className);
}