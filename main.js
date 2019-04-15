//Preload function for loading browser values after everything has been loaded
document.addEventListener("DOMContentLoaded", () => {
    //Navigator
    document.getElementById("appName").innerHTML = "Application Name: " + navigator.appName;
    document.getElementById("productName").innerHTML = "Product Name: " + navigator.product;
    document.getElementById("appVersion").innerHTML = "Application Version: " + navigator.appVersion;
    document.getElementById("userAgent").innerHTML = "User Agent: " + navigator.userAgent;
    document.getElementById("platformName").innerHTML = "Operating System: " + navigator.platform;
    document.getElementById("browserLanguage").innerHTML = "Language: " + navigator.language;
    
    //Window
    document.getElementById("windowHeight").innerHTML = "Window Height: " + window.innerHeight;
    document.getElementById("windowWidth").innerHTML = "Window Width: " + window.innerWidth;

    //Screen
    document.getElementById("screenHeight").innerHTML = "Screen Width: " + screen.width;
    document.getElementById("screenWidth").innerHTML = "Screen Height: " + screen.height;
    document.getElementById("screenAvailableWidth").innerHTML = "Screen Available Width: " + screen.availWidth;
    document.getElementById("screenAvailableHeight").innerHTML = "Screen Available Height: " + screen.availHeight;
    document.getElementById("screenColor").innerHTML = "Screen Color Depth: " + screen.colorDepth;
    document.getElementById("screenPixel").innerHTML = "Screen Pixels: " + screen.pixelDepth;

    //Location
    document.getElementById("pageLocation").innerHTML = "Page Location: " + window.location.href;
    document.getElementById("pageHostName").innerHTML = "Page Host Name: " + window.location.hostname;
    document.getElementById("pagePathName").innerHTML = "Page Path Name: " + window.location.pathname;
    document.getElementById("pageProtocol").innerHTML = "Page Protocol: " + window.location.protocol;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        document.getElementById("userLatitude").innerHTML = "Geolocation is not supported by this browser.";
        document.getElementById("userLongitude").innerHTML = "Geolocation is not supported by this browser.";
    }
});

//Function for having an interactive feel whenever browser is resized
window.addEventListener("resize", () => {
    let height = document.getElementById("windowHeight");
    let width = document.getElementById("windowWidth");
    height.innerHTML = "Browser Height: " + window.innerHeight;
    width.innerHTML = "Browser Width: " + window.innerWidth;
});

function showPosition(position){
    document.getElementById("userLatitude").innerHTML = "Latitude: " + position.coords.latitude;
    document.getElementById("userLongitude").innerHTML = "Longitude: " + position.coords.latitude;
}

//Server connection
// var net = require('net');

// var client = new net.Socket();
// client.connect(8484, '127.0.0.1', function() {
//     console.log('Connected');
//     client.write('Hello, server! Love, Client.');
// });

// client.on('data', function(data) {
//     console.log('Received: ' + data);
//     client.destroy(); // kill client after server's response
// });