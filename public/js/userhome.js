$(document).ready(function() {
  $.ajax({ url: "/api/allitems", method: "GET" }).then(function(res) {
    console.log(res);
    var shirtArr = res.shirts;
    var shoesArr = res.shoes;
    var dressesArr = res.dresses;
    var pantsArr = res.pants;

    var shirtColors = $("<div>")
    for (let i = 0; i < shirtArr.length; i++) {
        var shirtCard = $(`
          <div class="card">
            <div class="card-image">
            <img class="activator" src="https://placekitten.com/200/300">
              
            <a class="btn-floating halfway-fab waves-effect waves-light yellow darken-2"><i class="fas fa-shopping-cart"></i></a>
            </div>
            <div class="card-content">
            <span class="card-title activator">Shirt</span>
            <p>Price: ${shirtArr[i].price}</p>
            <p>Condition: ${shirtArr[i].condition}</p>
            <p>Size: ${shirtArr[i].size}</p>
            </div>

            <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">More Info<i class="material-icons right">close</i></span>
            <p>Suited For: ${shirtArr[i].suitedFor}</p>
            <p>Type: ${shirtArr[i].type}</p>
            </div>
      </div>`)
        console.log(shirtArr[i].color)
        shirtColors.append(shirtCard)
    }
    $("#search-result").html(shirtColors);
  });
});
