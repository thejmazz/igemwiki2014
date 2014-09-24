UofTigemwiki2014
============

Repo for iGEM wiki development <br>
http://igemwiki2014.herokuapp.com

### ToDos ###
* responsive tabs (switch to smaller font, or just icons only for smaller width devices)
* add iGEM logo to right side of navbar
* image styles - full width; inside container; within text
* ~~angularjs tabs - SPA!~~
* ~~set up angularjs views so team can edit content directly and see changes~~
* fix bug where footer doesn't fully show on pages where content starts with a heading
* ~~change active tab when changing pages~~
* change active tab when clicking back button
* scroll on tab click if splash page showing
* notebook styles - expandable list of dates, list of items, expand all/contract all
* team page styles - will use generic icons for now (photo on corner of blurb box)
* team photos and blurbs - prefereably photos with same background

### Simulation background animation ###
* draw little E. colis (small rectangles with rounded border? - for now will use small circles (much simpler collision detection than compared with rounded rectangles - will get to that later)
* E. coli movement ("jiggle" along?)
* figure out a way to duplicate E. colis nicely
* prevent overlap of E. colis (push away surrounding E. coli on replication; bump into each other and move opposite direction)
* button to hide everything and show simulation
* button to make static
* button to reset
* button to trigger bottleneck
* draw graph of S curve
* settings box to change replication time, max. pop. den., bottleneck at x pop. den,bottleneck survivial rate, colours.
* three types: kill-switch (red), wild-type (blue), ours (green)
* bottleneck event on high pop. density (number of ecoli per screen space)
* simulate "kill switch ecoli" on bottleneck, simulate "our ecoli" on bottleneck, simulate "wild type" ecoli on bottleneck, simulate multiple at once
* port python code to javascript
* store population numbers in arrays, draw E. colis in arrays


### Content ###
If you want to edit page content, make an account on github and send the me email you used to make an account. 
Then I can add you as a colloborator to this repo and also add you to the heroku repo, where you can see changes live. <br>
Pages that still need content: 
* Home
* Team
* Project
* Parts
* Modeling
* Notebook - need login info to biochemistry/iGEM wiki!
* Safety
* Attributions

How to edit content:<br>
First, make a github account, and send me your email. Then install git on your computer. Open up a terminal.
Go to a folder where you want to clone the repo, make a new folder there or just clone into there.

     git clone https://github.com/thejmazz/igemwiki2014.git

So then that will make a folder called igemwiki2014 in whatever folder you just cloned into. In there is a folder called templates. You can edit those templates as plain html. Ill get to making a style guide, but check out home.htm now to get an idea. Then push back to the github repo.

    git push -u origin master
    
Then, to see live changes, push to the heroku repo. First you need to add it as a remote.

    git remote add git@heroku.com:igemwiki2014.git

Then you can list your remotes with

    git remote -v
    
and push to heroku with

    git push -u heroku master
    
Actually, it might be better to make a bunch of edits, push them to heroku, and then when your done push it to the github repo.
