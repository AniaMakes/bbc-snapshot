// write your exercise code here

console.log(document.getElementById("page-title").innerText);

var listOfTopStories = document.getElementsByClassName("top-story__title");

console.log(listOfTopStories);
Array.from(listOfTopStories).forEach(story => console.log(story.innerText));


var listOfImages = document.getElementsByTagName("img");

console.log(listOfImages);

Array.from(listOfImages).forEach(image => console.log(image.src));

var orbAside = document.getElementById("orb-aside");
var arrayOfLinksInOrb = orbAside.getElementsByTagName("a");

console.log(arrayOfLinksInOrb);

Array.from(arrayOfLinksInOrb).forEach(aItem => console.log(aItem.href));
