    $(document).ready(function() {
    	var randomNumber = Math.round(Math.random()*101)+19;
    	var crystalOne = Math.round(Math.random()*11)+1;
    	var crystalTwo = Math.round(Math.random()*11)+1;
    	var crystalThree = Math.round(Math.random()*11)+1;
    	var crystalFour = Math.round(Math.random()*11)+1;
        var crystalFive = Math.round(Math.random()*11)+1;
    	var totalScore = 0;
    	var wins = 0;
    	var losses = 0;

    	var reset = function() {
    	  randomNumber = Math.round(Math.random()*101)+19;
    	  $('#randomNumber').html(randomNumber);
    	  crystalOne = Math.round(Math.random()*11)+1;
    	  crystalTwo = Math.round(Math.random()*11)+1;
    	  crystalThree = Math.round(Math.random()*11)+1;
    	  crystalFour = Math.round(Math.random()*11)+1;
          crystalFive = Math.round(Math.random()*11)+1;
    	  totalScore = 0;
    	  $('#totalScore').html(totalScore);
    	}

    	var winLoss = function() {
    	  if (totalScore === randomNumber) {
    	      wins++;
    	      $('#wins').html('Wins: ' + wins + '<br>Losses: ' + losses);
    		  reset();
    	  }
    	  if (totalScore > randomNumber) {
    	  	  losses++;
              $('#wins').html('Wins: ' + wins + '<br>Losses: ' + losses);
    		  reset();
    	  } else return;
    	}

    	$('#randomNumber').html(randomNumber);

    	$('#crystalOne').on('click', function() {
    		totalScore += crystalOne;
    		$('#totalScore').html(totalScore);
    		winLoss();
    		console.log(totalScore);
    	});

    	$('#crystalTwo').on('click', function() {
    		totalScore += crystalTwo;
    		$('#totalScore').html(totalScore);
    		winLoss();
    		console.log(totalScore);
    	});

    	$('#crystalThree').on('click', function() {
    		totalScore += crystalThree;
    		$('#totalScore').html(totalScore);
    		winLoss();
    		console.log(totalScore);
    	});

    	$('#crystalFour').on('click', function() {
    		totalScore += crystalFour;
    		$('#totalScore').html(totalScore);
    		winLoss();
    		console.log(totalScore);
    	});

        $('#crystalFive').on('click', function() {
            totalScore += crystalFive;
            $('#totalScore').html(totalScore);
            winLoss();
            console.log(totalScore);
        });

    });