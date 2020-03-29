$(".home").on("click", function(e) {
  console.log("clicked");
  e.preventDefault();
  $("#wrapper1").fadeIn(1500);
  $("#wrapper1").modal({
    backdrop: "static", //remove ability to close modal with click
    keyboard: false, //remove option to close with keyboard
    show: true //Display loader!
  });
  setTimeout(function() {
    
    $("#wrapper1").modal("hide");
  }, 5000);

  setTimeout(function() {
    window.location.href = '/';
  }, 4000);
  
});
//ajax code here (example for $.post) using test page from https://reqres.in
//Adding a delay so we can see the functionality of the loader while request processes
$(".about a").on("click", function(e) {
  console.log();
  $("#wrapper1").fadeIn(1500);
  e.preventDefault();
  $("#wrapper1").modal({
    backdrop: "static", //remove ability to close modal with click
    keyboard: false, //remove option to close with keyboard
    show: true //Display loader!
  });
  setTimeout(function() {
    
    $("#wrapper1").modal("hide");
  }, 5000);

  setTimeout(function() {
    window.location.href = '/about';
  }, 4000);
});

$(".skills a").on("click", function(e) {
  console.log();
  $("#wrapper1").fadeIn(1500);
  e.preventDefault();
  $("#wrapper1").modal({
    backdrop: "static", //remove ability to close modal with click
    keyboard: false, //remove option to close with keyboard
    show: true //Display loader!
  });
  setTimeout(function() {
    
    $("#wrapper1").modal("hide");
  }, 5000);

  setTimeout(function() {
    window.location.href = '/skills';
  }, 4000);
});

$(".work a").on("click", function(e) {
  console.log();
  $("#wrapper1").fadeIn(1500);
  e.preventDefault();
  $("#wrapper1").modal({
    backdrop: "static", //remove ability to close modal with click
    keyboard: false, //remove option to close with keyboard
    show: true //Display loader!
  });
  setTimeout(function() {
    
    $("#wrapper1").modal("hide");
  }, 5000);

  setTimeout(function() {
    window.location.href = '/work';
  }, 4000);
});

$(".contact a").on("click", function(e) {
  console.log();
  $("#wrapper1").fadeIn(1500);
  e.preventDefault();
  $("#wrapper1").modal({
    backdrop: "static", //remove ability to close modal with click
    keyboard: false, //remove option to close with keyboard
    show: true //Display loader!
  });
  setTimeout(function() {
    
    $("#wrapper1").modal("hide");
  }, 5000);

  setTimeout(function() {
    window.location.href = '/contact';
  }, 4000);
});

$(".btn").on("click", function(e) {
  console.log(e);
  $("#wrapper1").fadeIn(1500);
  e.preventDefault();
  $("#wrapper1").modal({
    backdrop: "static", //remove ability to close modal with click
    keyboard: false, //remove option to close with keyboard
    show: true //Display loader!
  });
  setTimeout(function() {
    
    $("#wrapper1").modal("hide");
  }, 5000);

  setTimeout(function() {
    window.location.href = '/contact';
  }, 4000);
});


let menuIcon = document.querySelector('.menuIcon');
let nav = document.querySelector('.overlay-menu');

menuIcon.addEventListener('click', () => {
    if (nav.style.transform != 'translateX(0%)') {
      nav.style.transform = 'translateX(0%)';
      nav.style.transition = 'transform 0.2s ease-out';
    } else { 
            nav.style.transform = 'translateX(-100%)';
            nav.style.transition = 'transform 0.2s ease-out';
          }
});


  // Toggle Menu Icon ========================================
let toggleIcon = document.querySelector('.menuIcon');

toggleIcon.addEventListener('click', () => {
  if (toggleIcon.className != 'menuIcon toggle') {
    toggleIcon.className += ' toggle';
  } else {
    toggleIcon.className = 'menuIcon';
    }
});

$("#menu .h1").on("click", function(e) {
  e.preventDefault();
  $("#wrapper1").fadeIn(1500);
  $("#wrapper1").modal({
    backdrop: "static", //remove ability to close modal with click
    keyboard: false, //remove option to close with keyboard
    show: true //Display loader!
  });
  setTimeout(function() {
    
    $("#wrapper1").modal("hide");
  }, 5000);

  setTimeout(function() {
    window.location.href = '/';
  }, 4000);
  
});

$("#menu .h2").on("click", function(e) {
  e.preventDefault();
  $("#wrapper1").fadeIn(1500);
  $("#wrapper1").modal({
    backdrop: "static", //remove ability to close modal with click
    keyboard: false, //remove option to close with keyboard
    show: true //Display loader!
  });
  setTimeout(function() {
    
    $("#wrapper1").modal("hide");
  }, 5000);

  setTimeout(function() {
    window.location.href = '/about';
  }, 4000);
  
});

$("#menu .h3").on("click", function(e) {
  e.preventDefault();
  $("#wrapper1").fadeIn(1500);
  $("#wrapper1").modal({
    backdrop: "static", //remove ability to close modal with click
    keyboard: false, //remove option to close with keyboard
    show: true //Display loader!
  });
  setTimeout(function() {
    
    $("#wrapper1").modal("hide");
  }, 5000);

  setTimeout(function() {
    window.location.href = '/skills';
  }, 4000);
  
});

$("#menu .h4").on("click", function(e) {
  e.preventDefault();
  $("#wrapper1").fadeIn(1500);
  $("#wrapper1").modal({
    backdrop: "static", //remove ability to close modal with click
    keyboard: false, //remove option to close with keyboard
    show: true //Display loader!
  });
  setTimeout(function() {
    
    $("#wrapper1").modal("hide");
  }, 5000);

  setTimeout(function() {
    window.location.href = '/work';
  }, 4000);
  
});

$("#menu .h5").on("click", function(e) {
  e.preventDefault();
  $("#wrapper1").fadeIn(1500);
  $("#wrapper1").modal({
    backdrop: "static", //remove ability to close modal with click
    keyboard: false, //remove option to close with keyboard
    show: true //Display loader!
  });
  setTimeout(function() {
    
    $("#wrapper1").modal("hide");
  }, 5000);

  setTimeout(function() {
    window.location.href = '/contact';
  }, 4000);
  
});

$("#menu .h6").on("click", function(e) {
  e.preventDefault();
  $("#wrapper1").fadeIn(1500);
  $("#wrapper1").modal({
    backdrop: "static", //remove ability to close modal with click
    keyboard: false, //remove option to close with keyboard
    show: true //Display loader!
  });
  setTimeout(function() {
    
    $("#wrapper1").modal("hide");
  }, 5000);

  setTimeout(function() {
    window.location.href = '/resume';
  }, 4000);
  
});