
//set cells count 2x2 or 4x4
$(".setgame").on("click", function() {
  $("h1").text("Press Start");
  $(".btn").off();
  $("h3").text("");
  $(".btn").removeClass("completed");
  if ( $(this).text() == "to 4x4") {
    $(".game2x2").hide();
    $(".game4x4").show();
    $(this).text("to 2x2");
  return;
  }
  if ( $(this).text() == "to 2x2") {
    $(".game4x4").hide();
    $(".game2x2").show();
    $(this).text("to 4x4");
  return;
  }
});

//generation cell numbers
$(".start-button").on("click", function() {
  //clear previous results for buttons
  $("h1").text("Gemini Pairs Game");
  $(".btn").removeClass("completed");
  firstNumber = 0;
  secondNumber = 0;
  wincount = 0;
  // giving rendom values to buttons
  if ( $(".setgame").text() == "to 4x4" ) {
  var numbers = [1, 1, 2, 2];
  $("h3").hide();
  $(".btn").hover(function() { $(this).addClass("btn-hover"); }, function() { $(this).removeClass("btn-hover"); });

  for (i=(numbers.length-1); i>=0; i--) {
    current = Math.round(Math.random()*i);
    $(".a" + i).text(numbers[current]);
    numbers.splice(current, 1);
    }
  }
  if ( $(".setgame").text() == "to 2x2" ) {
    var numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
    $("h3").hide();
    $(".btn").hover(function() { $(this).addClass("btn-hover"); }, function() { $(this).removeClass("btn-hover"); });

    for (i=(numbers.length-1); i>=0; i--) {
      current = Math.round(Math.random()*i);
      $(".a" + i).text(numbers[current]);
      numbers.splice(current, 1);
    }
  }
//gameplay
var wincount = 0;
var counter = 0;
var ident1 = "";
var ident2 = "";
$(".btn").on("click", function() {

//checking if current button have .completed class
    if ( $(this).hasClass("completed") ) {
      return;
    }

// buttons gameplay logic depends of press event count
    if (counter == 0) {
      $("h3", this).show();
      ident1 = "." + $("h3", this).attr('class').split(' ')[1];
      firstNumber = $("h3", this).text();
      $("h1").text("First number is " + firstNumber + " and: " + ident1);
      counter++;
      return;
    }
    if (counter == 1) {
      $("h3", this).show();
      var secondNumber = $("h3", this).text();
      $("h1").text("Second number is " + secondNumber);
      ident2 = "." + $("h3", this).attr('class').split(' ')[1];

//Checking results
      if (firstNumber == secondNumber) {
        $(".btn").css("pointer-events","none"); //stop button click events
        $("h1").text("Win! " + firstNumber + " equals " + secondNumber);
        wincount++;
        setTimeout(function () {
          $(ident1).parent().addClass("completed");
          $(ident2).parent().addClass("completed");
          $("h3").hide();
          $(".btn").css("pointer-events","auto"); //start button click events
          if ( $(".setgame").text() == "to 4x4" && wincount == 2 ) {
            $("h1").text("Coungratulations! Game completed.");
          }
          if ( $(".setgame").text() == "to 2x2" && wincount == 8 ) {
            $("h1").text("Coungratulations! Game completed.");
          }
          counter = 0;
        }, 700);
          return;

      } else {
        $(".btn").css("pointer-events","none"); //stop button click events
        setTimeout(function () {
          $("h1").text("Fail..." + firstNumber + " doesn't equals " + secondNumber);
          $("h3").hide();
          $(".btn").css("pointer-events","auto"); //start button click events
          counter = 0;
        }, 700);

        return;

      }
    }
});

});
