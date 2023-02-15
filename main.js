// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//form

const name = document.getElementById("name");
const meetingTime = document.getElementById("meeting-time");
const guests = document.getElementById("guests");
const errorElement = document.getElementById("error")

Form.addEventListener("submit", (e) => {
  let messages = []
  if (name.value === '' || name.value == null)
    messages.push("Name is required.")
}

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(,)

});

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}