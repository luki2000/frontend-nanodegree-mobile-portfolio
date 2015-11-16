## Website Performance Optimization portfolio project

How To use the Portfolio Page and the online Pizzeria!

Our homepage details ongoing projects currently running or complete. To view it simply visit:

	http://luki2000.github.io/frontend-nanodegree-mobile-portfolio

The main attraction of the site is our (extremely) colorful pizzeria web page which is mobile and tablet friendly! We worked hard to make the experience speedy and jank free. I know you are impatient so please click on the last project link or visit the site at: 

	http://luki2000.github.io/frontend-nanodegree-mobile-portfolio/views/pizza.html


Straight away as the page loads you will see a picture of our local pizzeria restaurant with some juicy information about the great range of foods. If you are in a rush and would like to see specific information about our site you are in luck, follow these instructions:

1. Go to the top left of the page where you can see four grey tabs.
2. To see the menu, click menu which will take you to the 'Menu' list.
3. Interested in the ingredients? Click ingredients which is the second tab.
4. Want to know where we are? Click on the third tab called 'Locations'.
5. If you are just interested in contacing us, Click the last tab 'Contact Us'.


Our menu is changing everyday so be sure to check our menu list frequently, we offer 3 ifferent sizes which you can visually see for yourself, to do that simply:

1. Scroll down to 'Our Pizzas!' title. 
2. You will see a slider towards the left that is already set on medium (middle).
3. Slide to the right to see bigger pizzas.
4. Slide to the left to see smaller pizzas.

That is all! Thank you for your time! 



Web Sites Optimised with Grunt!

To ensure good optmisation I have used 'Grunt' the The JavaScript Task Runner. It is a very useful too to optimise
the components that make up the web sites. The Plugins I used are:

uncss - to remove unecessary (unused) CSS styles particularly within bootsrap which had a lot of CSS styles

cssmin - to minify css

uglify - to minify js

imagemin - to compress image file once size has been reduced to the desired dimensions

Please see the package.json to see the installed plug-ins


Now to actually use Grunt, Node.js had to first be installed, then Grunt had to be installed. Finally we had to install each individual plugins on the command line which you load up by right clicking on your project folder and selecting Git Bash (on Windows). 
A typical line for installing would look like this.

'npm install grunt-contrib-imagemin --save-dev'

You then have to create a Gruntfile within your project. Please view my GruntFile to see the javascript that you would need to code.
Once everything is nice and dandy you will need to run your gruntfile by simply typing grunt followed by the name you gave for your function.
In my case to compress my image I kept it simple and gave the name of the function imagemin (same as the plugin name) in the gruntfile, within the function are the instructions to specify what I want to do with the image,
like the level of compression I want, where I would like the images to be taken from and taken to after compression.The other plugins are not so different to execute.    



The files and images that went through optimisation:

Part 1 index.html

CSS
minified with cssmin - css/print.css

JS
minified with uglify - js/analytics.js
minified with uglify - js/performatters.js

Image
compressed with imagemin - img/profilepic.jpg



Part 2 pizza.html

CSS
minified with cssmin - views/css/boostrap-grid.css
minified with cssmin - views/css/style.css

JS
minified with uglify - views/js/main.js

images
compressed with imagemin - views/images/backgroundPizza.png
compressed with imagemin - views/images/frontpagePizzeria.jpg
compressed with imagemin - views/images/pizza.png
compressed with imagemin - views/images/pizzeria.jpg

