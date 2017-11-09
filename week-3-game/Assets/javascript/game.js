<script type="text/javascript">
//Letter choices available
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//Setting all to zero
var wins = 0;
var losses = 0;
var guesses = 0;
//When key is released it becomes the users guess
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
//Lets the computer select a random letter from the available choices
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//Allows the user 9 guesses
    guesses = guesses || 9
    // Repeat the following logic whenever the user guesses incorrectly.
    while (userGuess !== computerGuess.toString())
    {
        --guesses;
        if (guesses === 0)
        {
            {break}
            alert("The Letter was: " + computerGuess);
            
        }
      //  userGuess = guesses -;
    }
    console.log("You must be Psychic");
            if (userGuess == computerGuess){
            wins++;
        }else if (userGuess !== computerGuess){
            losses++;
        }
        
        // Taking the tallies and displaying them in HTML
        var html = "" +
        "<p>Wins: " + 
        wins + 
        "</p>" +
        "<p>Losses: " + 
        losses + 
        "</p>" +
        "<p>Guesses Left: " + (9 - guesses) 
        +
        "<p>Your Guesses so far: " + userGuess
        guesses +
        "</p>";
        // Placing the html into the game ID
        document.querySelector('#game').innerHTML = html;
        
}    
</script>
