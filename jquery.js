var playing = false;
var heart = 3;
var score = 0;
var run;
$(function () {
    console.log("Hello");
    $("#startGame").click(function () {
        if (playing === true) {
            location.reload();
        } else {
            playing = true;
            $("#startGame").text("Reset Game");
            $(".hearts").css("display", "block");
            $("#score").text(score);
            hearts();
            startGame();
        }
    });
});

sliceFruit();

//start game action
function startGame() {
    $("#fruit").show();
    $("#fruit").css("top", -100);
    $("#fruit").attr("src", "./images/" + (1 + Math.floor(7 * Math.random())) + ".png");
    $("#fruit").css("left", Math.round($(".fruits").width() * Math.random()));


    run = setInterval(function () {
        $("#fruit").css("top", $("#fruit").position().top + 3);


        if ($("#fruit").position().top > $(".fruits").height()) {
            if (heart > 1) {
                //                $("#fruit").show();

                $("#fruit").attr("src", "./images/" + (1 + Math.floor(7 * Math.random())) + ".png");
                $("#fruit").css("top", -100);
                $("#fruit").css("left", Math.round($(".fruits").width() * Math.random()));
                heart--;
                $(".hearts").empty();
                hearts();
            } else {
                $("#gameOver").addClass("gameOver");
                $("#gameOver").html("<p>Game Over</p>");
                stop(run);
            }


        }

    }, 10);
}

//create heart

function hearts() {
    for (i = 0; i < heart; i++) {
        $(".hearts").append('<img class="img"></img>');
        $(".img").attr("src", "./icons/heart.png");
    }
}


//clearing interval
function stop(game) {
    clearInterval(game);
}

//slice fruit
function sliceFruit() {
    $("#fruit").mouseover(function () {
        score++;
        $("#score").text(score);
        $("#fruit").hide("explode", 300);
        stop(run);

        setTimeout(startGame, 400);
    });

}
