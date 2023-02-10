# ASG2
make a short game (progression = add on discount amount to coupon)
everyday claim some coin for spin (get discount on certain item)
golden ticket for a chance to win something big
make sellers possible (fake test case) store in database
review of product and selers, how many items sold, from where, shipping?
cart function no chat, straight order and send (idw do Mokesell)
display best deals on the home page (flash deals, highest popularity,highest discount, lowest price)
possibility of liking system
function where if we spend a certain amount, free delivery.
search bar 

user account-login info (username,password,confirm password,email,agree to terms and conditions)
class parent buyer, child seller
seller listings based on carousell.

GAME 1 (ACCURACY): - Yeow Teik
A TIMER 
USER START THE STOPWATCH AND WATCH STARTS
USER STOP AT EXACTLY 1 MIN FOR A PRIZE
GAME 2 IDEA - Kenan
Fruit Ninja(Lego Brick Version)
Cut as many Bricks as possible to earn prizes





##YEOW TEIK
Update 1.0
Creation of JS code for header and footer where one Javascript code is able to display all that data at every page, usage of pure Javascript
Patch 1.1
Idea of creating a search bar
Patch 1.2 
Creation of data in the RestDB database and wrote GET data from the RestDB for listing data.
Creation of a simple search function to loop through the entire listing data to match the listing name of what i am looking for.
Patch 1.3 --> Update 5.0
Idea searching for category?
Patch 1.3
Completed randomly generated listings where for you page just shows random listings that the user may like
Update 1.4
Created a like system where user can like listings and click like or unlike(Likes will be saved to the DB so in future the user reloads the page the likes listings are still there)
Patch 1.5 
Fixed an issue where clicking on nav bar icons will call upon the like system functions which causes directory and code error in the "click" to "on("click") by changing the range of the function being activated by the div
Patch 1.6
Fixed an issue where the JS code for the like system for generating previous like conflicted with the Login where users not logged in cannot generate the for you page because it toook data from the local storage which does not exist if login is not done
Added a conditional statement to the page where it now detects if  user is logged in to generate the listings with previous likes.





Update 2.0 (SIGN UP page)
Sign up page: Create the html for the sign up page with simple input text
Patch 2.1
Creating validation for input email, password , username and DOB where the page will not proceed unless the data inputted is correct format as the required inputted data
Patch 2.2 
Created the ability for POSTING for data to the RestDB database, uploading the relevant data and some JSON data for further usage
Patch 2.3
Validated the inputted data into the RestDB database where no account can have the same information for Login purposes
Patch 2.4
Completion of the Signup.html and js scripts where if the sign up is successful, the user will proceed to the login page for confirmation, waiting for partner to do the CSS
Patch 2.5
Kenan, enter what u did for the CSS here

Update 3.0 (Login page)
Login page: Created the html for the login page with simple input text and some href links for future use
Patch 3.1
Created the JS file for inputting email and password with some simple validation for inputted code with onkeypress/down
Patch 3.2
Usage of the RestDB from Patch 2.0-2.4 to GET the userdata and compare with the login details and see if the login details are valid,
if login details match any of the objects, the user's local storage data will be updated to its specifications and the user will be directed to the homepage with login details (further information can be seen in the Patch 1 details)
 
Update 4.0(Review page)
Review page: Created simple html for displaying of review data for each object in the JSON (max of only 10 can be seen)
Patch 4.1
Added css for the review fa-fa star for easy visualisation of the review star
Patch 4.2
Added js code to retrieve the data from another server called user data from another DB as RestDB only allow one API key for one account(free version)
Wrote js code to display each review information and the ability to leave a review yourself
Patch 4.3
Added POST to the DB code to upload to the DB (validation only includes not posting blank info)
Patch 4.4(CSS waiting for parnter)

Kenan
Patch 4.5 Updated CSS and HTML for login page but the button is bugged
Patch 4.6 Finalised CSS and HTML for the login page and fixed the button issue login works fine now




Update 5.0
Creation of the listing.html page where every listing data is displayed from the data from session storage which is set from the listing clicked from search bar or the listing results
did the simple html
changed the quantity function where a user can only change quantity to >0 and less than the total quantity of the listing from the database
added a add to cart function where when added to cart, the user buy_listing key value pair value will change to add the listing object (RestDB Buy_listing data will also be updated)
Listing.html and js finished -- awaiting partner for css

Update 6.0
Account html and js creation - added simple buttons to what an account page typically has
6.1:
Starting to implement the game page where account page divs will all disappear except the header and the game div will load
6.2:
Game completed with the css and the js left validation
will do the validation for one game per day if got time
will try to fix a sound problem in the game where sound cannot overlap








