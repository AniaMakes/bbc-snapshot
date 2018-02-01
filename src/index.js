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

console.log(document.querySelector("#page-title").innerText);

var listOfTopStories = document.querySelectorAll(".top-story__title");

Array.from(listOfTopStories).forEach(story => console.log(story.innerText));

var listOfImages = document.querySelectorAll("img");
Array.from(listOfImages).forEach(image => console.log(image.src));

var orbAsideAList = document.querySelector("#orb-aside").querySelectorAll("a");
Array.from(orbAsideAList).forEach(orb => console.log(orb.href));
