//Preload function for loading browser values after everything has been loaded
document.addEventListener("DOMContentLoaded", () => {
    let height = document.getElementById("windowHeight");
    let width = document.getElementById("windowWidth");
    height.innerHTML = "Browser Height: " + window.outerHeight;
    width.innerHTML = "Browser Width: " + window.outerWidth;
    document.getElementById("screenHeight").innerHTML = "Screen Height: " + screen.availHeight;
    document.getElementById("screenWidth").innerHTML = "Screen Width: " + screen.availWidth;
    document.getElementById("pageLocation").innerHTML = "Page Location: " + window.location.href;
    document.getElementById("pageHostName").innerHTML = "Page Host Name: " + window.location.hostname;
    document.getElementById("pagePathName").innerHTML = "Page Path Name: " + window.location.pathname;
    document.getElementById("pageProtocol").innerHTML = "Page Protocol: " + window.location.protocol;
    document.getElementById("pagePort").innerHTML = "Page Port Number: " + window.location.port;
});

//Function for having an interactive feel whenever browser is resized
window.addEventListener("resize", () => {
    let height = document.getElementById("windowHeight");
    let width = document.getElementById("windowWidth");
    height.innerHTML = "Browser Height: " + window.outerHeight;
    width.innerHTML = "Browser Width: " + window.outerWidth;
});