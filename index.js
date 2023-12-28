function showabout(){
    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideInLeft");
    },800);
}
function closeabout(){
    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideOutLeft");
        $("#about_container").css("display","none");
    },800);
}
function showwork(){
    $("#work_container").css("display","inherit");
    $("#work_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideInRight");
    },800);
}
function closework(){
    $("#work_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideOutRight");
        $("#work_container").css("display","none");
    },800);
}
function showcontact(){
    $("#contact_container").css("display","inherit");
    $("#contact_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideInUp");
    },800);
}
function closecontact(){
    $("#contact_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideOutDown");
        $("#contact_container").css("display","none");
    },800);
}
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#about").removeClass("animated fadeIn");
      $("#contact").removeClass("animated fadeIn");
      $("#work").removeClass("animated fadeIn");
    },1000);
},1500);
const words = ['Software Developer', 'XR Developer', 'Web Developer'];
let index = 0; // Current word index

function typeWriter() {
    const currentWord = words[index];
    const wordElement = document.querySelector('.word');

    let charIndex = 0;
    const typeInterval = setInterval(() => {
        if (charIndex < currentWord.length) {
            wordElement.textContent += currentWord.charAt(charIndex);
            charIndex++;
        } else {
            clearInterval(typeInterval);
            setTimeout(eraseWord, 1000); // Wait for a second before erasing
        }
    }, 100); // Typing speed (adjust as needed)
}

function eraseWord() {
    const wordElement = document.querySelector('.word');

    let charIndex = wordElement.textContent.length;
    const eraseInterval = setInterval(() => {
        if (charIndex > 0) {
            wordElement.textContent = wordElement.textContent.slice(0, charIndex - 1);
            charIndex--;
        } else {
            clearInterval(eraseInterval);
            index = (index + 1) % words.length; // Move to the next word
            setTimeout(typeWriter, 500); // Wait for half a second before typing the next word
        }
    }, 50); // Erasing speed (adjust as needed)
}

// Start the typing animation
typeWriter();
const flavoursContainer = document.getElementById('flavoursContainer');
const scrollSpeed = 1; // Adjust the scroll speed as needed

let isDragging = false;
let dragStartX = 0;
let scrollStartX = 0;

function startDrag(event) {
  isDragging = true;
  dragStartX = event.clientX || event.touches[0].clientX;
  scrollStartX = flavoursContainer.scrollLeft;
}

function stopDrag() {
  isDragging = false;
}

function performDrag(event) {
  if (!isDragging) return;

  const currentX = event.clientX || event.touches[0].clientX;
  const dragDistance = currentX - dragStartX;

  flavoursContainer.scrollLeft = scrollStartX - dragDistance;
}

flavoursContainer.addEventListener('mousedown', startDrag);
flavoursContainer.addEventListener('touchstart', startDrag);

window.addEventListener('mousemove', performDrag);
window.addEventListener('touchmove', performDrag);

window.addEventListener('mouseup', stopDrag);
window.addEventListener('touchend', stopDrag);


function scrollImages() {
  if (!isDragging) {
	const scrollLeft = flavoursContainer.scrollLeft;

	// Check if we've reached the end, then reset to the beginning
	if (scrollLeft >= flavoursContainer.scrollWidth - flavoursContainer.clientWidth) {
	  flavoursContainer.scrollLeft = 0;
	} else {
	  // Scroll to the right by the scrollSpeed amount
	  flavoursContainer.scrollLeft += scrollSpeed;
	}
  }
}

// Call the scrollImages function repeatedly for continuous scrolling
const scrollInterval = setInterval(scrollImages, 25); // You can adjust the interval for the desired speed

// Stop the scrolling when the page unloads (e.g., when navigating away)
window.addEventListener('beforeunload', () => {
  clearInterval(scrollInterval);
});

