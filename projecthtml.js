// Marios

function subAlert() {
    alert("Thanks for Subscribing to our Newsletter");
}
function darkmode() {

    if (document.body.className.match('dark')) {
        document.body.classList.remove("dark");

    }
    else {
        document.body.classList.add("dark");
    }
}
setInterval(myTimer, 1000);
function myTimer() {
    const d = new Date();
    document.getElementById("timer").innerHTML = d.toLocaleTimeString();
}

// function revial() {
//     var reveals = document.querySelectorAll(".reveal");
//     for (var i = 0; i < reveals.length; i++) {
//         var windowHeight = window.innerHeight;
//         var elementTop = reveals[i].getBoundingClientRect().top;
//         var elementVisible = 150;
//         if (elementTop < windowHeight - elementVisible) {
//             reveals[i].classList.add("active");
//         } else {
//             reveals[i].classList.remove("active");
//         }
//     }
// }
// window.addEventListener("scroll", revial);

// reveal();
