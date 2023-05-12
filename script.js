$(document).ready(function() {
    $("#hidden").hover(function() {
        $(this).css("color", "black");
    },
    function() {
        $(this).css("color", "white");
    });

    $("#alert").click(function() {
        alert("I'm alerting you.");
    })
});

function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
}

function countdown() {
    var currentVal = document.getElementById("countdownButton").innerHTML;
    var newVal = 0;

    if(currentVal > 0) {
        newVal = currentVal - 1;
    }

    document.getElementById("countdownButton").innerHTML = newVal;
}