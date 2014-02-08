/*!
 * Main Parse JS code goes here
 */
//

// Init Parse
Parse.initialize("gRgG6rXH59W6J19MrqWtiAWAdEGqjoZjEs0GsH6H", "viwxKM3bX10rDDpGpdc3U0kDCr9eJm4WDhhrlPR3");

var logIn = function(event){
	event.preventDefault();
	SignIn();
};

$("#signInBtn").click(function(event){
            event.preventDefault();
            signIn();
        });
   
        
        function signIn(){
            
            var username = document.getElementById("usrID").value;
            var password = document.getElementById("pass").value;

           Parse.User.logIn(username, password, {
          success: function(user) {
            alert("Your'e signed in now.");
            goHome();
          },

          error: function(error) {
            function error() {
            console.log(error.message);
            };
          }
            });   
        };
       // End function to sign in
       //Function to go to home page
       
       function goHome (){
        $('body').fadeOut( 1000, homeRedir());
       };
       function homeRedir (){
        window.location.replace("#Home")
       };
       //End function 

