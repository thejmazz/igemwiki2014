UofTigemwiki2014
============

Repo for iGEM wiki development <br>
http://igemwiki2014.herokuapp.com

### ToDos ###
* responsive tabs (switch to smaller font, or just icons only for smaller width devices)
* add iGEM logo to right side of navbar
* image styles - full width; inside container; within text
* angularjs tabs - SPA!
* set up angularjs views so team can edit content directly and see changes
* scroll on tab click if splash page showing
* notebook styles - expandable list of dates, list of items, expand all/contract all
* get notebook entries - need login info to team wiki!
* content for project, parts, modeling, safety, attributions page (hopefully h2-h6 + image styles sufficent for this)
* team page styles - will use generic icons for now (photo on corner of blurb box)
* team photos and blurbs - prefereably photos with same background

### Simulation background animation ###
* draw little E. colis (small rectangles with rounded border?)
* E. coli movement ("jiggle" along?)
* figure out a way to duplicate E. colis nicely
* prevent overlap of E. colis (push away surrounding E. coli on replication; bump into each other and move opposite direction)
* button to hide everything and show simulation
* button to make static
* button to reset
* button to trigger bottleneck
* settings box to change replication time, max. pop. den., bottleneck at x pop. den,bottleneck survivial rate, colours.
* three types: kill-switch (red), wild-type (blue), ours (green)
* bottleneck event on high pop. density (number of ecoli per screen space)
* simulate "kill switch ecoli" on bottleneck, simulate "our ecoli" on bottleneck, simulate "wild type" ecoli on bottleneck, simulate multiple at once
* port MATlab code to javascript
* store population numbers in arrays, draw E. colis in arrays