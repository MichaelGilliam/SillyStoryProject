// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

// added 3 sections of strings in 3 arrays

const insertX = [
    "Willy the Goblin",
    "Big Daddy",
    "Father Christmas",

];

const insertY = [
    "the soup kitchen",
    "Disneyland",
    "the White House",

];
const insertZ = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away",

];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

// below I added 4 new variables that are relevant to the arrays I made
function result() {
    var newStory = storyText;

    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);
   
     // below I added 4 .replace string, robin #help post, helped me!

    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);
    
    // added .replace with bob and name 

  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Bob', name);
 
  }

  // added /14 for lbs to stone calculation, and added -32 * 0.5556 for F to C calculation
  // added 2 new story.replace for the tempature and weight varibles
  if(document.getElementById("uk").checked) {
    let weight = Math.round(300 / 14) + ' stone';
    var temperature =  Math.round((94 - 32) * 0.5556) + ' centigrade';
         
   newStory = newStory.replace('94 fahrenheit', temperature);
   newStory = newStory.replace('300 pounds', weight);
   
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';

}