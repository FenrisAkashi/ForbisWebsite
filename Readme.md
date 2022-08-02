//Readme file


His Facebook page: https://www.facebook.com/ForbiisAutoDetail

Resize images at: https://resizeimage.net/
	update: this site not working today 8/1/22. Switched to adobe free img resizer: https://www.adobe.com/express/feature/image/resize

reviews.html: Google reviews embeded using elfsight. 

Hosting through github or hostinger free account disables the formsubmit (getting emails from customers).
Currently being hosted through Hostinger

The backup folder contains a version of the contact page with his address and a button that takes the user to google maps for directions. He doesn't want to use this feature until he is operating in a place that is not an apartment complex.

Changed index.html to home.html and rerouted default page in htaccess file to home.html. I was able to make urls not display .html at the end.



Reviews page info:
Google ID: ChIJQYVoDrqllVQRhWQ3AqC7j-8

Elfsight - $60/year (was able to get a coupon for first payment, set on auto renewal w/his card)
username: forbistemp
password: yrjC(Nh&&WlzL&#5 

Gave me this code to embed in my html:
<script src="https://apps.elfsight.com/p/platform.js" defer></script>
<div class="elfsight-app-f30df8fd-17bb-469e-a5db-54690b159745"></div>

If he ever wants to switch to having a button linked to google reviews for free, the direct url to the google reviews wanted:
https://search.google.com/local/reviews?placeid=ChIJQYVoDrqllVQRhWQ3AqC7j-8



Separate JS file issues:
Didn't try to do this...

Wanted to make a separate app.js file for the script but it would no longer work.
Feeling like this may only work once the website is up and running, and for now need to have the script on each page it's needed.

Once it's online, try adding this line to the head section of the page:
<!--script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script-->

Then add this at the end of (inside of) the body section:
<!--script type="text/javascript" src="app.js"></script-->



Browser Checklist:
on laptop - 
google chrome
firefox
waterfox
opera - worked after he activated it
edge

on phone - 
chrome
safari - worked after activation