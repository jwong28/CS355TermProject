//Preload function for loading browser values after everything has been loaded
// document.addEventListener("DOMContentLoaded", () => {
//     let height = document.getElementById("windowHeight");
//     let width = document.getElementById("windowWidth");
    // height.innerHTML = "Browser Height: " + window.outerHeight;
    // width.innerHTML = "Browser Width: " + window.outerWidth;
//     document.getElementById("screenHeight").innerHTML = "Screen Height: " + screen.availHeight;
//     document.getElementById("screenWidth").innerHTML = "Screen Width: " + screen.availWidth;
//     document.getElementById("screenColor").innerHTML = "Screen Color Depth: " + screen.colorDepth;
//     document.getElementById("screenPixel").innerHTML = "Screen Pixels: " + screen.pixelDepth;
//     document.getElementById("pageLocation").innerHTML = "Page Location: " + window.location.href;
//     document.getElementById("pageHostName").innerHTML = "Page Host Name: " + window.location.hostname;
//     document.getElementById("pagePathName").innerHTML = "Page Path Name: " + window.location.pathname;
//     document.getElementById("pageProtocol").innerHTML = "Page Protocol: " + window.location.protocol;
//     document.getElementById("pagePort").innerHTML = "Page Port Number: " + window.location.port;
// });

// //Function for having an interactive feel whenever browser is resized
// window.addEventListener("resize", () => {
//     let height = document.getElementById("windowHeight");
//     let width = document.getElementById("windowWidth");
//     height.innerHTML = "Browser Height: " + window.outerHeight;
//     width.innerHTML = "Browser Width: " + window.outerWidth;
// });


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