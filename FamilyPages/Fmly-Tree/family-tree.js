
// js code STARTS for opening and closing the navbar starts
const bar = document.getElementById(`bar`);
        const close = document.getElementById(`close`);
        const nav = document.getElementById('navbar');

        if (bar) {
            bar.addEventListener('click', () => {
                nav.classList.add('active');
            })
        }

        if (close) {
            close.addEventListener('click', () => {
                nav.classList.remove('active');
            })
        }
// js code ENDS for opening and closing the navbar starts



// JS code STARTS for div container zoom-in zoom-out feature

const zoomDiv = document.getElementById('zoom-container');

        // Set the initial zoom level to 1 (100%)
        let zoomLevel = 1;

        // Function to zoom in
        function zoomIn() {
            zoomLevel += 0.1;
            zoomDiv.style.transform = `scale(${zoomLevel})`;
        }

        // Function to zoom out
        function zoomOut() {
            zoomLevel -= 0.1;
            if (zoomLevel < 0.1) zoomLevel = 0.1;
            zoomDiv.style.transform = `scale(${zoomLevel})`;
        }

        // Add event listeners to zoom in and out buttons
        document.getElementById('zoom-in-btn').addEventListener('click', zoomIn);
        document.getElementById('zoom-out-btn').addEventListener('click', zoomOut);

// JS code ENDS for div container zoom-in zoom-out feature



//codes STARTS for Counting of img tag(for total members) and various levels ------------>


// JS code STARTS to count image tags in above document

// Select all image elements in the document
let images = document.querySelectorAll('img');

// Get the number of images
let numberOfImages = images.length;

// Output the number of images to the console
console.log("Number of images in the document: " + numberOfImages);

document.getElementById("img-count").innerHTML = "<span> # Total Persons added<br> in family tree = " + numberOfImages + "<br></span>";

// JS code STARTS to count class="fem"
var parent = document.getElementById("zoom-container");
var nodesSameClass = parent.getElementsByClassName("fem");
var femCount = nodesSameClass.length;
console.log(femCount);
document.getElementById("fem-count").innerHTML = "<span> # Female count = " + femCount + "</span>";
// JS code ENDS to count class="fem"

// JS code STARTS to count males appliy formula males = total-females
var maleCount = (numberOfImages - nodesSameClass.length);
console.log(maleCount)
document.getElementById("male-count").innerHTML = "<span> # Male count = " + maleCount + "</span>";
// JS code ENDS to count class="males"

// calculate % of females
// document.getElementById("fem-count").innerHTML = "<span> %-value of females in family tree = " + (nodesSameClass.length)*100/(numberOfImages) + "% </span>";

let num = parseFloat((nodesSameClass.length)*100/(numberOfImages));
var femPercent = num.toFixed(1);
console.log(femPercent);
document.getElementById("percent-fem").innerHTML = "<span> # Female count-share = " + femPercent + "%</span>";

// JS code ENDS to count image tags in above document


// JS code STARTS to count class="L-15"
var parent = document.getElementById("zoom-container");
var nodesSameClass = parent.getElementsByClassName("L-15");
var L15Count = nodesSameClass.length;
console.log(L15Count);
// document.getElementById("L15-count").innerHTML = "<span> Members in L-15 = " + L15Count + "</span>";
// JS code ENDS to count class="L-15"




// JS code STARTS to count class=L-14 for display in tree-page
var parent = document.getElementById("zoom-container");
var nodesSameClass = parent.getElementsByClassName("L-14");
var L14Count = nodesSameClass.length;
console.log(L14Count);
// document.getElementById("L14-count").innerHTML = "<span> Members in L-14 = " + L14Count + "</span>";
// JS code ENDS to count class=L-14 for display in tree-page


// JS code STARTS to count class=L-16 for display in tree-page
var parent = document.getElementById("zoom-container");
var nodesSameClass = parent.getElementsByClassName("L-16");
var L16Count = nodesSameClass.length;
console.log(L16Count);
// document.getElementById("L16-count").innerHTML = "<span> Members in L-16 = " + L14Count + "</span>";
// JS code ENDS to count class=L-16 for display in tree-page









//Following Codes START for printing the count of levels on Analysis page------>

// L14-count variable for printing value on analysis page
let L14Countt = L14Count;
localStorage.setItem('variable', L14Countt);

// L15-count variable for printing value on analysis page
let L15Countt = L15Count;
localStorage.setItem('variable1', L15Countt);

//code for female member count in the tree
let FemaleCount = femCount;
localStorage.setItem('variable2', FemaleCount);


//code for local storage for female % value
let FemPercent = femPercent;
localStorage.setItem('variable3', FemPercent);

//code for local storage for male member count in the tree
let MaleCount = maleCount;
localStorage.setItem('variable4', MaleCount);


//code for local storage of total members
let totalMembers = numberOfImages;
localStorage.setItem('variable5', totalMembers);


// L16-count variable for printing value on analysis page
let L16Countt = L16Count;
localStorage.setItem('variable6', L16Countt);




// TRIAL code

// JS code STARTS to count class="L-15"

// JS code ENDS to count class="L-15"


// JS code STARTS to operate the Modal--------------->  

        // Get the modal, link, and close icon elements
        var modal = document.querySelector('.modal');
        var link = document.querySelector('.open-modal');
        var closeIcon = document.querySelector('.close-icon');

        // Add an event listener to the link
        link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        modal.style.display = 'block'; // Show the modal
        });

        // Add an event listener to the close icon
        closeIcon.addEventListener('click', function() {
        modal.style.display = 'none'; // Hide the modal
        });

        // Add an event listener to the modal to close it when clicked outside
        window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none'; // Hide the modal
        }
        });

// JS code ENDS to operate the Modal--------------->  






