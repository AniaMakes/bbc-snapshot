// Querying exercises part 1
// console.log(document.getElementById("page-title").innerText);
//
// var listOfTopStories = document.getElementsByClassName("top-story__title");
//
// console.log(listOfTopStories);
// Array.from(listOfTopStories).forEach(story => console.log(story.innerText));
//
//
// var listOfImages = document.getElementsByTagName("img");
//
// console.log(listOfImages);
//
// Array.from(listOfImages).forEach(image => console.log(image.src));
//
// var orbAside = document.getElementById("orb-aside");
// var arrayOfLinksInOrb = orbAside.getElementsByTagName("a");
//
// console.log(arrayOfLinksInOrb);
//
// Array.from(arrayOfLinksInOrb).forEach(aItem => console.log(aItem.href));

// Query selector exercises

// console.log(document.querySelector("#page-title").innerText);
//
// var listOfTopStories = document.querySelectorAll(".top-story__title");
//
// Array.from(listOfTopStories).forEach(story => console.log(story.innerText));
//
// var listOfImages = document.querySelectorAll("img");
// Array.from(listOfImages).forEach(image => console.log(image.src));
//
// var orbAsideAList = document.querySelector("#orb-aside").querySelectorAll("a");
// Array.from(orbAsideAList).forEach(orb => console.log(orb.href));

// DOM Manipulation

var navbarLinks = document.querySelector("nav").querySelectorAll("a");
Array.from(navbarLinks).forEach(link => link.innerHTML = "*" + link.innerHTML + "*");

var topStoriesTextTitles = document.querySelectorAll(".top-story__title");
Array.from(topStoriesTextTitles).forEach(title => title.innerHTML = "<i>" + title.innerHTML + "</i>")

Array.from(topStoriesTextTitles).forEach(title => title.style.color = "#6ef442");


// Creating and inserting elements
// var linkItem = document.createElement("li");
// var newA = document.createElement("a");
// linkItem.append(newA);
// newA.href = "http://constructorlabs.com";
// newA.innerHTML = "Constructor Labs";
// linkItem.className = "orb-nav-conlab";
//
// var parentNode = document.querySelector("#orb-nav-links ul");
// var sportRef = document.querySelector(".orb-nav-sport");
//
// var insertedNode = sportRef.parentNode.insertBefore(linkItem, sportRef);


// Removing and re-inserting nodes

var parentNode = document.getElementById("top-stories");
var toBeRemoved = document.getElementById("main-story");
const removedNode = parentNode.removeChild(toBeRemoved);

parentNode.append(removedNode);
