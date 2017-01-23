//BUSINESS LOGIC
function vacation(first, last, where, landmarks, when, notes) {
  this.firstName = first;
  this.lastName = last;
  this.place = where;
  this.landmarks = landmarks;
  this.when =  when;
  this.notes = notes;
}

//USER INTERFACE
$("document").ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var Firstname = $("input#firstName").val();
    var Lastname = $("input#lastName").val();
    var Place = $("input#location").val();
    var Landmarks = $("input#landmarks").val();
    var When = $("input#when").val();
    var Notes = $("input#notes").val();

    var user = new vacation(Firstname,Lastname,Place,Landmarks,When,Notes);

    $(".yourname").append(user.firstName + "" + user.lastName);
    $(".yourname").last().click(function(){
      $("#results").show();
      $("ul#showLocation").append("<li>" + user.place+ "</li>");
      $("ul#showLandmarks").append("<li>"+ user.landmarks+ "</li>");
      $("ul#showWhen").append("<li>"+ user.when + "</li>");
      $("ul#showNotes").append("<li>"+ user.notes + "</li>")

    });
  });
});
