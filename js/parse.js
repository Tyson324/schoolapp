/*!
 * Main Parse JS code goes here
 */
//

// Init Parse
Parse.initialize("gRgG6rXH59W6J19MrqWtiAWAdEGqjoZjEs0GsH6H", "viwxKM3bX10rDDpGpdc3U0kDCr9eJm4WDhhrlPR3");




	
	

	



	// Log In

	var logIn = function () {
		
		// Get values
		var $username = $("#userID"),
		    $password = $("#pass");

		    
		var username = $username.val(),
		    password = $password.val();
			


		// Validate
		
		if (username.length == 0) {

			alert("You havent entered a username!");			

			return false;
		}

		else if (password.length == 0) {
			alert("you havent entered a password!");			

			return false;
		}



		Parse.User.logIn(username, password, {
			success: function(user) {

				$.mobile.changePage('#home');

				if (buildIt()) {
					console.log("loaded build from success!");
				}

					
			},

			error: function(user, error) {
				if (error.code == 101) {

					
					alert("Check your username and password and try again!");
					
					return false;
					
				}

				else {
					alert("Error: " + error.code + " " + error.message);
					return false;
				}
			}
		});
	}


	


	function logOut() {
		Parse.User.logOut();
		window.location.href = 'index.html#login';

		alert("You have been logged out")
		buildMenu();
	}


	function checkloggedin (){
		currentUser = Parse.User.current();
		if (currentUser == null) {

			alert("You must be logged in to continue.");
			return false;
		}
	}
