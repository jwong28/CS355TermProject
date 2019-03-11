//Preload function for loading browser values after everything has been loaded
document.addEventListener("DOMContentLoaded", () => {
    let height = document.getElementById("windowHeight");
    let width = document.getElementById("windowWidth");
    height.innerHTML = "Browser Height: " + window.outerHeight;
    width.innerHTML = "Browser Width: " + window.outerWidth;
    document.getElementById("screenHeight").innerHTML = "Screen Height: " + screen.availHeight;
    document.getElementById("screenWidth").innerHTML = "Screen Width: " + screen.availWidth;
});

//Function for having an interactive feel whenever browser is resized
window.addEventListener("resize", () => {
    let height = document.getElementById("windowHeight");
    let width = document.getElementById("windowWidth");
    height.innerHTML = "Browser Height: " + window.outerHeight;
    width.innerHTML = "Browser Width: " + window.outerWidth;
});