var newDiv = document.createElement("div");
var submitMsg = "Your item has been added!";
newDiv.setAttribute("id", "submit-msg");
// $(document).ready(function() {

// });

$(document).ready(function() {
  $(".parallax").parallax();
  $(".modal").modal();
  $(".dropdown-trigger").dropdown();
  $("select").formSelect();
  $(".collapsible").collapsible();
  $(".sidenav").sidenav();
  // $.ajax({ url: "/api/allitems", method: "GET" }).then(function(res) {
  //   console.log(res);
  // });
});

$(document).ready(function() {
  $(".carousel").carousel();

  setInterval(function() {
    $(".carousel").carousel("next");
  }, 5000);
});

$("#submit").on("click", function(event) {
  $("#submit-msg").empty();
  event.preventDefault();
  var newItem = {};
  newItem = {
    size: $("#q1")
      .val()
      .trim(),
    color: $("#q2")
      .val()
      .trim(),
    type: $("#q3")
      .val()
      .trim(),
    price: $("#shirt-price")
      .val()
      .trim(),
    condition: $("#q4")
      .val()
      .trim(),
    suitedFor: $("#q5").val(),
    userFile: $("#img-url").val()
  };
  console.log(newItem);
  $.post("/api/shirt", newItem).then(function(data) {
    console.log(data);
  });
  newDiv.append(submitMsg);
  $("#submit-div").append(newDiv);
  emptyShirtValue();
});

$("#submit-pants").on("click", function(event) {
  $("#submit-msg").empty();
  event.preventDefault();
  var newPants = {};
  newPants = {
    size: $("#pq1").val(),
    color: $("#pq2").val(),
    type: $("#pq3").val(),
    price: $("#pants-price")
      .val()
      .trim(),
    condition: $("#pq4").val(),
    suitedFor: $("#pq5").val(),
    userFile: $("#pants-img-url").val()
  };
  console.log(newPants);
  $.post("/api/pants", newPants).then(function(data) {
    console.log(data);
  });
  newDiv.append(submitMsg);
  $("#pants-submit-div").append(newDiv);
  emptyPantsValue();
});

$("#submit-dress").on("click", function(event) {
  $("#submit-msg").empty();
  event.preventDefault();
  var newDress = {};
  newDress = {
    size: $("#dq1")
      .val()
      .trim(),
    color: $("#dq2")
      .val()
      .trim(),
    type: $("#dq3")
      .val()
      .trim(),
    price: $("#dress-price")
      .val()
      .trim(),
    condition: $("#dq4")
      .val()
      .trim(),
    suitedFor: $("#dq5").val(),
    userFile: $("#dress-img-url").val()
  };
  console.log(newDress);

  $.post("/api/dress", newDress).then(function(data) {
    console.log(data);
  });
  newDiv.append(submitMsg);
  $("#dress-submit-div").append(newDiv);
  emptyDressValue();
});

$("#submit-shoes").on("click", function(event) {
  $("#submit-msg").empty();
  event.preventDefault();
  var newShoes = {};
  newShoes = {
    size: $("#sq1").val(),
    color: $("#sq2").val(),
    type: $("#sq3").val(),
    price: $("#shoes-price")
      .val()
      .trim(),
    condition: $("#sq4").val(),
    suitedFor: $("#sq5").val(),
    userFile: $("#shoes-img-url").val()
  };
  console.log(newShoes);
  $.post("/api/shoes", newShoes).then(function(data) {
    console.log(data);
  });
  newDiv.append(submitMsg);
  $("#shoes-submit-div").append(newDiv);
  emptyShoesValue();
});

function emptyShirtValue() {
  $("#q1").val("");
  $("#q2").val("");
  $("#q3").val("");
  $("#shirt-price").val("");
  $("#q4").val("");
  $("#q5").val("");
  $("#img-url").val("");
  $("select").formSelect();
}
function emptyDressValue() {
  $("#dq1").val("");
  $("#dq2").val("");
  $("#dq3").val("");
  $("#dress-price").val("");
  $("#dq4").val("");
  $("#dq5").val("");
  $("#dress-img-url").val("");
  $("select").formSelect();
}
function emptyShoesValue() {
  $("#sq1").val("");
  $("#sq2").val("");
  $("#sq3").val("");
  $("#shoes-price").val("");
  $("#sq4").val("");
  $("#sq5").val("");
  $("#shoes-img-url").val("");
  $("select").formSelect();
}
function emptyPantsValue() {
  $("#pq1").val("");
  $("#pq2").val("");
  $("#pq3").val("");
  $("#pants-price").val("");
  $("#pq4").val("");
  $("#pq5").val("");
  $("#pants-img-url").val("");
  $("select").formSelect();
}
