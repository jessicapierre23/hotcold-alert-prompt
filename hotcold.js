/*startover function needs to be outside of hotcold because if it's inside, it's not visible to outside of hotcold, like to button attribute*/
	    function startOver() {
			      /*input = "";
				  ans = Math.floor((Math.random()*50)+1);*/
				  return hotCold();
			  }//close startOver function
	    function hotCold() {
          var ans = Math.floor((Math.random()*50)+1);
		  var input;
		  while( input != ans) {
		      function test(guess) {
			     if (guess == ans)
			      alert("Correct");
			     else if (guess >= ans + 10 || guess <= ans - 10)
			      alert("Cold");
			     else if (guess >= ans + 5 || guess <= ans - 5)
                  alert("Warm");
                 else alert("Hot");				  
			  }//close test function
			  
		   input = prompt("Enter a number between 1 and 50 inclusive:","");
		   if(isNaN(input))
		      alert("Please enter a number");
		   else if (input == " ")
		       alert("Plese enter a number");
		   else if (/\s+/.test(input))
		      alert("Don't include any spaces");
		   else if (input < 1 || input > 50)
		      alert("Please enter a number between 1 and 50");
			else test(input);
			/*once input is tested for validity, then the test function is called to determine how hot/cold/warm the guess is*/
			
		  }//close while loop
		  }//close hotCold function