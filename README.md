 
# Silverwing Solace Guild
 
---
 
## Aim of the site.
 
Silverwing Solace is a guild in the MMORPG World of Warcraft, based on a fantasy world where millions of people play together every week, competing between each other or in group contents.
 
The guild has an active base of around 40 members playing at different times and days, getting together on specific days to either organise social events or groups events against NPC (Non-Player-Character, computer control characters).
 
The guild requested to have a website created where they can show their progression within the game, and a place where new recruits can look for information and ranks.
 
---
 
## UX
 
* The visitors can read about what the guild is about and where to find them.
* The visitors can see the past events and the photos from them.
* The visitors see a gallery of members / evans pictures.
* Role page where visitors can read about different roles and a google map where they can see the location in the World of those members.
 
 
In order to achieve this, the client wanted a website which meets the following criteria:
 
1. A main page where the recruitment / mantra of the guild with side panels with Discord / recent videos to watch.
2. A page dedicated for social upcoming events and past events, where a flyer style drop down menu would reveal either the flyer for the upcoming and the photo for the past events.
3. Apage where pictures taken by members can be seen by the visitors.
4. A page where there are the 3 different class roles and a list with the members in the guild and their location in the World.
 
---
 
## Client Stories
 
"Silverwing Solace is a guild in the realm of Silvermoon at World of Warcraft online game. They would like a website where they can forward interested people in order to join and find out more about the guild, their social events, their progression and even see pictures of past events."
 
---
 
## Features
 
### - Guild Mantra / main page
![](https://raw.githubusercontent.com/Dhracko/silverwing-solace/master/assets/images/wireframes/Home.png)
 
### - Social events
![](https://raw.githubusercontent.com/Dhracko/silverwing-solace/master/assets/images/wireframes/Events.png) 
### - Gallery
![](https://raw.githubusercontent.com/Dhracko/silverwing-solace/master/assets/images/wireframes/Gallery.png)
### - Roles / Contact Details
![]
## Wireframes Mockups:
 
### Desktop:
 
<br>
 
### Tablet
 
 
<br>
 
### Mobile
 
 
 
---
 
## Future Goals
 
*
 
---
 
## Technology Used
 
* HTML & CSS programming languages
* [Bootstrap](https://getbootstrap.com/) - to easily adapt the website to be responsive for all users. Version 4.4.1
* [Google Fonts](https://fonts.google.com/) - Chango and Mukta Styles
* [Font Awesome](https://fontawesome.com/) - Social Media Logos version 5.0.0
* [GIT](https://git-scm.com/) - Version Control
* [GitHub](https://github.com/) - to host the repositories for this project and the live website preview
* [Balsamiq Wireframe](https://balsamiq.com/) - to create the Wireframes Mockups
---
 
## Testing
 
Initially I was using the developers tools from Google Chrome to make sure the colors and the code was the correct one, making sure the project looked good on mobile devices first and built up from there.
 
I also used the tools below:
 
* [Unicorn Revealer](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln?hl=en-GB) to help to locate the overflow and position of the different containers.
 
* [W3C Markup Validation Service](https://validator.w3.org/) to check the markup validity of the HTML.
 
* [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) to validate CSS file.
 
* [JShint Javascript validator](https://jshint.com/) to validate Javascript files.
 
* [JSONLint JSON validator](https://jsonlint.com/) to validate the JSON variable within the javascript file.
 
To test the different web pages:
 
* The Header (Home Page) :
Step 1: I clicked on the home button.
Step 2 : I mouse over the header buttons and check they change the color.
Step 3: I clicked on the Facebook icon.
Step 4: i clicked on the twitter icon
Step 5: i clicked on the instagram icon.
 
* The Role page
Step 1: I clicked on the Role button.
Step 2 : I mouse over the header buttons and check they change the color.
Step 3: I clicked on the Facebook icon.
Step 4: I clicked on the twitter icon
Step 5: I clicked on the instagram icon.
Step 6: I clicked on the “click here for locations” on top of Tank members  to show the markers at the map.
Step 7: I clicked on the “click here for locations” on top of Healers members  to show the markers at the map.
Step 8: I clicked on the “click here for locations” on top of DPS members  to show the markers at the map
 
* The Events page:
Step 1: I clicked on the Event button.
Step 2 : I mouse over the header buttons and check they change the color.
Step 3: I clicked on the Facebook icon.
Step 4: I clicked on the twitter icon
Step 5: I clicked on the instagram icon.
Step 6: I clicked on the "First Year Anniversary" bar to slide down the picture and clicked again the bar to slide the picture up.
Step 7: I clicked on the "Let's Make Lovecraft" bar to slide down the picture and clicked again on the bar to slide the picture up.
Step 8: I clicked on the "Around the World in 80 Minutes" bar to slide down the picture and clicked again on the bar to slide the picture up.
Step 9: I clicked on "A Murdr Mystery Evening" bar to slide down the picture and clicked again on the bar to slide the picture up.
Step 10: I clicked on the "Foodie Festival" bar to slide down the picture and clicked again on the bar to slide the picture up.
Step 11: I clicked on "Help Me - Halloween" bar to slide down the picture and clicked again the bar to slide the picture up.
Step 12: I clicked on "Paintball War" bar to slide down the picture and clicked again the bar to slide the picture up.
Step 13: I clicked on "Merry Christmas HO HO HO" bar to slide down the picture and clicked again the bar to slide the picture up.

I tested the different pages in 
 
Finally i tested in different browser:
* Google Chrome Version 81.0.4044.122 (Official Build) (64-bit)
* Firefox Version 75.0 (64-bit)
* Microsoft Edge Version 44.18362.449.0
* Opera Version 68.0.3618.46
 
### Issues and resolutions
 
* when running some of the jquery scripts where giving me errors like the "getJSON" command would come back as not a command.
I fixed the problem by loading the google full script instead of https://cdnjs.cloudflare.com scripts.
 
* When I created the list of members, there were 50 members so the list was too long. I had to create a pagination system, which in itself creates a second problem as the list won't load-up with the page until the page 1 button is clicked. At the end I created page 1 to load with the document.
 
* On creating the events page from the template, the background images will only cover the middle.
I found 2 solutions as the image is big enough I could place it on the first div at the edge and it will cover the whole page. Second option which i went for, i place the same image in the 3 column and kept the opacity on the sides one so give a 3D sensation of the page.
 
---
 
## Deployment
 
In order to deploy the project I did these steps:
 
1. I went to the repositories [silverwing-solace](https://github.com/Dhracko/silverwing-solace).
2. on the top right click at Settings.
3. Scroll down until the section GitHub Pages.
4. Within that section there is a scroll down option in "Source" and select "master branch".
5. Once the page has refreshed, scroll down again to GitHub Pages and a new link should have appeared with the link: https://dhracko.github.io/silverwing-solace/.
 
To run the project locally:
 
1. Go to the repositories [silverwing-solace](https://github.com/Dhracko/silverwing-solace).
2. Click on the green button that says "Clone or download".
 
3. To clone the repository using HTTPS, under "Clone with HTTPS", click . To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click Use SSH, then click .
4. Open Git Bash.
5. Change the current working directory to the location where you want the cloned directory to be made.
 
6. Type git clone, and then paste the URL you copied in Step 2.
 
> $ git clone https://github.com/Dhracko/silverwing-solace
 
7. Press Enter. Your local clone will be created.
 
Further information on how to clone a repository can be found [here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).
 
## Credits
 
### Content
All the images have been obtained from royalty free images made by the client (Ally Britz).
 
 
### Acknowledgements
 
* I would like to thank Rohit Sharma (my mentor) for his invaluable feedback, help and advice.
 
* [Simen Daehlin](https://github.com/Eventyret) for the fantastic Unicorn Chrome add-on.
 
* Ally Britz (Lexari), guild Leader of Silverwing Solace, who facilitated all the backgrounds and photos.
 
* Xavier tutor from Code Institute , because he helped with the google map api.
 
 
 
## Disclaimer
Please note the content and images on this website are for educational purposes only.
 

