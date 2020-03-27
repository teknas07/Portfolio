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