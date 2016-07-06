$(document).ready(function(){
  
  bankroll = parseInt($("div.bank").html())
  
  $('.bank').html(bankroll)
  $('.game').click(function(e){
    e.preventDefault();

    var userBet = parseInt($("input[name='bet']").val());
    var userChoice = parseInt($("input[name='choice']").val());
    var compChoice = Math.floor(Math.random() * 10) + 1

    const results = document.querySelector('.results')
    if (userBet > bankroll) {
      results.innerHTML = "You can't bet more than you have!"
    } else {
      if (userChoice == compChoice) {
        bankroll += userBet;
        results.innerHTML = "Correct! Your bankroll is now at " + bankroll;
      } else if (Math.abs(userChoice - compChoice) < 2 ) {
        results.innerHTML = "Close! Your bankroll has not changed and is currently at " + bankroll;
      } else { 
          if ((bankroll - userBet) < 0) {
            bankroll = 0
            results.innerHTML = "You lose! Now go get a bank loan so you can try again!"
          } else {
          bankroll -= userBet 
          results.innerHTML = "Wrong! You're terrible at this game! Yay! You're bankroll is currenlty at " + bankroll;
          }; 
      };
    };

    document.querySelector('.bank').innerHTML = bankroll;
    hideform(bankroll);
  });

  $('.restart').click(function() {
    location.reload();
  });

  function hideform (bankroll){
    if (bankroll == 0) {
      $(".textform").hide();
    }
  };
});