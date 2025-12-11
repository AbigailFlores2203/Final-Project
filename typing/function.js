document.getElementById ("Image")
const gallery = document.getElementById("gallery");
const toggleButton = document.getElementById("toggle");

let toggled = true;

toggleButton.addEventListener("click", () => {

    if (toggled) {
        gallery.src = "../assets/25letterwordschallenge.jpg";
        toggled = false;
    } else {
        gallery.src = "../assets/20240620_104036.jpg";
        toggled= true;
    }
});