
# Silverwing Solace Guild

---

## Aim of the site.

Silverwing Solace is a guild in the MMORPG World of Warcraft, based on a fatasy world where millions of people play together every week, compiting between each other or in group contents.

The guild has an active base of around 40 members playing at diffenrent times and days, getting together on specific day to either organised social events or groups events against NPC (Non-Player-Character, computer control characters).

The guild requested to have a website created where they can show their progression within the game, and a place where new recruit can look for information and ranks.

---

## UX

* The visitors can read about what is the guild about and where to find them.
* The visitors can see Discord (voice communitation) and even join throught the link.
* The visitors can see the past events and the photos from them.
* The visitors see a gallery of members / evens pictures.
* Throught the video link the visitors and see the youtube video of specific bosses/events the guild will try in a near future.
* Role page where visitors can read about different roles and a google map where they can see the location in the World of those members.


In order to achieve this, the client wanted a website which meets the following criteria:

1. A main page where the recruitment / mantra of the guild with side panels with Discord / recent videos to watch.
2. A snipet with Discord windows, showing a live update of the guild channels and members on it.
3. A page dedicated for social upcoming events and past events, where a flyier style drop down menu would revial the either the flyier for the upcoming and the photo for the past events.
4. Apage where pictures taken by members can be seen by the visitors.
5. A page where there are the 3 different class roles and a list with the member in the guild and their location in the World.

---

## Client Stories

"Silverwing Solace is a guild in the realm of Silvermoon at World of Warcraft online game. They would like a website where they can forward intersted people in order to join and find out more about the guild, their social events, their prograsion and even see pictures of past events."

---

## Features

### - Guild Mantra / main page

### - Social events

### - Gallery

### - Roles / Contact Details

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

Initially i was using the evelopers tools from Google Chrome to make sure the colors and the code was the correct one, making sure the project look good on mobile devices first and build up from there.

I also used the tools below:

* [Unicorn Revealer](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln?hl=en-GB) to help to locate the overflow and position of the diferent containers.

* [W3C Markup Validation Service](https://validator.w3.org/) to check the markup validity of the HTML.

* [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) to validate CSS file.

Finally i tested in different browser:
* Google Chrome Version 81.0.4044.122 (Official Build) (64-bit)
* Firefox Version 75.0 (64-bit)
* Microsoft Edge Version 44.18362.449.0
* Opera Version 68.0.3618.46

### Issues and resolutions

* when running some of the jquery scripts where giving me errors like the "getJSON" command would come back as not a command. 
I fixed the problem by loading the google full script instead of https://cdnjs.cloudflare.com scripts.

* when i created the list of members, there are 50 members so the list was too long. I had to create a pagination system, which in itself create a second problem as the list won't load-up with the page until the page 1 button is clicked. At the end I created the page 1 to load with the document.

* On creating the events pagefrom the template, the background images will only cover the middle. 
I found 2 solutions as the image is big enough i could place it on the first div at the edge and it will cover the whole page. Second option which i went for, i place the same image in the 3 column and kept the opacity on the sides one so give a 3D sensation of the page.

---

## Deployment

In order to deploy the project I did these steps:

1. I went to the repositories [silverwing-solace](https://github.com/Dhracko/silverwing-solace).
2. on the top right click at Settings.
3. Scroll down until the section GitHub Pages.
4. Within that section there is a scrolldown option in "Source" and select "master branch".
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
All the images have been obtained from different royalty free images:

* [flickr](https://www.flickr.com/)

* [freeimages](https://www.freeimages.com/photo/15-vespas-1422685)

* [pixabay](https://pixabay.com/photos/motorcycles-wasp-lambretta-san-leo-775453/), (https://pixabay.com/photos/lambretta-wasp-moto-2003276/)

* [Pexels](https://www.pexels.com/photo/architecture-automotive-building-cafe-221299/)


### Acknowledgements

* I would like to thank Rohit Sharma (my mentor) for his invaluable feed back, help and advice.

* [Simen Daehlin](https://github.com/Eventyret) for the fatastic Unicorn Chrome add-on.

* Lexi, guild Leader of Silverwing Solace, who facilitated all the backgrounds and photos.



## Disclaimer
Please note the content and images on this website are for educational purposes only.
