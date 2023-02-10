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
# For testing the website use email account: koayyt05@gmail.com and password:password123 to log in.

# Facz Bricks Website run-through
## Website Features
### Header
1. Our header consits of our navigation bar as well as the footer containing the reviews link and the payment methods and warnings.
2. The header is constant throughout the website and will always be seen throughout all the different pages.
3. The navigation bar will direct you to the different pages of our website and clicking on the icon will direct you to the homepage of our website.
4. Clicking on the review link will direct you to the reviews page.

### Home Page
1. Go to Homepage and you will see a search bar, product pop-ups.
2. The search bar allows you to find the products our website has listed, redirecting you to the listing item.
3. The product pop-ups are random and will change when the page is refreshed. Clicking on it will bring you to the product and clicking on the heart will make you like the listed item.
### Log In
1. The logging page is a very simple concept where you enter email and password to log in to your account
2. There is validation done for the logging in where email will be invalid unless a valid email is inputted, same goes for the password
3. After logging in you will be redirected to the homepage and you will be able to access the full website.
4. Without logging into the website you will not be able to access the full website and you will always be redirected to the login page.
### Sign Up
1. The Loging page has a register link where if clicked leads you to the signup page
2. In the signup page you will enter your email, username and password and date of birth, also agreeing to the terms and conditions before being able to be registered.
3. Once registered you will be directed to log in to your account which you can then access the website once again.
4. We also added options to log in with facebook instagram and twitter but for now the links do not work.
### Account
1. The account page has a simple layout displaying your account details, has the option to log out also as well as a daily game you can play to earn yourself points to get a discount on the listed items.
2. The log out button once clicked logs you out of your account and brings you back to the homepage where you once again need to log in.

### Game
The game is a simple concept of stacking the blocks by pressing the stop button and you will try to stack the blocks as high as possible. One "Stack" is worth 1 point which will be added to your account when the game ends. The game ends when you miss stacking the block and you can only play again the next day. The game has added sound when you stack a block.
### Community
1. The Community page is a more fun concept to allow our website visitors to really enjoy the lego culture and to also let newcomers understand the fun of lego through different pictures and the inclusion of lego memes.
2. The Community page can be filtered by the different categories and also the all category. 
   
### Likes
1. The likes page shows the listings that you have liked when you clicked the heart on the listings.
2. By unclicking the heart the listings will disappear from the likes page if you refresh the page. 
3. The likes page makes it convenient for you to find and add items to your cart if u want to revisit them or buy them for later.

### Cart
1. The cart is where you have added your listings and want to checkout to buy your items.
2. The items can add quantity at the cart page and the prices will be totalled and calculated for you at the end.
This is where the points you earn from the game come into play.
3. 1 point is 1 cent so it will deduct from your total and you will get a discount depending on your points.
4. Once points are used and you have checked out eveerything will diappear and you points will be set back to 0.
5. You will be directed back to the homepage after checking out.
6. The update cart button updates whatever you have altered in your cart
### Review 
1. The review page shows the reviews left by different users which you can read to see what people think of our website.
2. You can also submit your review by clicking the "here" button and it will direct you to the submit form which you can fill it up and give us a score.
   
### Lottie
We used lottie for our loading animation before going into our website.

### Loading
We also added and extra loading function when entering the homepage



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



Kenan
Update 1.0:
Did styling for the header.js used navbar but not fully produced yet. What i have has alot of bugs still.
Update 1.1:
Touched up the styling for the navbar in header.css have not done mobile view yet and tried doing a dropdown bar but might change or swap out the idea later.
Update 1.2:
Did abit more to the NavBar for styling and added classes and other divs and containers into the html so that the styling works better.

Update 2.0:
Did the styling for Log In page Looks ok for now but will definitely add more to it and change up the coloring and background later in.
Update 2.1:
Done up styling for the Sign Up page also this one giving alot more problems with the whole background becoming excess or overflowing will have to debug later on.
Update 2.2:
Touched up both the log in page and sign up page cause i realised the css inteferred with the javascript causing some errors making the whole program not able to log in so i fixed that in this patch.

Update 3.0
Did some styling to the footer below in every page not sure the format i want yet so just some minor adjustments to make the pictures look symmetrical and also give some order to the lines and reviews.

Update 4.0
Did the styling for the reviews page not sure about the background first and have yet to style the review form.

Update 4.1:
Styled the review form will add background soon but just making sure the format and the whole bone structure looks ok first.

Update 4.2:
Added the color and background to the reviews page made the height of the box automatic so it can change as more reviews are being added.

Update 5.0:
Started styling the listings made a box but it looks quite ugly will try to change it and make it look slightly better although its not coming out how i want it to especially with the mobile view problem.

Update 5.1:
Continued styling the listings the border box animation works might change it abit more in the future not sure yet.

Update 6.0:
Started styling the likes page followed the review method to make the height automatic and the like are centered to make it look neater.

Update 6.1
Tweaked some designs for the likes page as well as added color and background

Update 7.0:
Done up a community page created the html bone structure 

Update 7.1
Done up the styling for the community page as well as the javascript works well decided to remove video as filtering the videos dont really work and cause alot of problems so sticking to pictures only

Update 8.0
Styled the homepage search bar and background and most of the stuff but after styling the search is causing problem so yet to fix that.

Update 8.1
Decided to add to the css and javascript and add html to the homepage to make a loading animation for the page

Update 8.2:
did up loding with lottie but idk where to put so leave it for now

Update 9.0
Did cart styling with mobile view this is one of the last pushes and touched up listing style












