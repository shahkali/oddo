$("#accordion").on("hide.bs.collapse show.bs.collapse", (e) => {
  $(e.target).prev().find("i:last-child").toggleClass("fa-minus fa-plus");
});
$("#accordion").on("hide.bs.collapse show.bs.collapse", (e) => {
  $(e.target).prev().find("i:last-child").toggleClass("fa-minus fa-plus");
});

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    document.getElementById("bdy").style.display = "none";
    document.getElementById("alertMsg").style.display = "block";
  } else {
    document.getElementById("bdy").style.display = "";
    document.getElementById("alertMsg").style.display = "none";
  }
}
var windObj = window.matchMedia("(max-width: 992px)");
myFunction(windObj); // Call listener function at run time
windObj.addListener(myFunction);
