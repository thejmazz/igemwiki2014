<?php
include ('header.php');
?>

<canvas id="canvas"></canvas>

<div id="splash-wrapper">
	<section id="splash" style="position:absolute;">
		<div class="container">
			<h1><span>Biocontainment: a novel approach</span></h1>
			<p class="lead">
				Conventional genetic safeguards for the biocontainment of synthetic organisms often rely on various suicide mechanisms. However, these “kill-switches” suffer from a fundamental flaw since they impose selective pressure on organisms to evolve inactivation of the genetic safeguard. Activation of a kill-switch removes all individuals containing intact kill-switches from the population, leaving behind only individuals with defective kill-switches to found a new population. This project proposes an inducible plasmid-loss system to remove genetically engineered traits from a population without imposing selective pressure against the safeguard itself. The inducible plasmid-loss system is implemented by creating a plasmid containing CRISPR/Cas9, an RNA-guided nuclease system which targets and cleaves itself. A population containing this plasmid is expected to revert to wild-type upon activation. In addition to encouraging the application of evolutionary approaches to the field of synthetic biology, this project also contributes to making synthetic organisms safe for routine use outside the lab.
			</p>
		</div>
	</section>
	<nav>
		<div class="container">
			<ul id="navbar">
				<li id="home">
					<a href='#/home' scroll-on-click><i class="fa fa-home"></i>Home</a>
				</li>
				<li id="team">
					<a href='#/team' scroll-on-click><i class="fa fa-users"></i> Team</a>
				</li>
				<li id="project">
					<a href='#/project' scroll-on-click><i class="fa fa-gears"></i> Project</a>
				</li>
				<li id="parts">
					<a href='#/parts' scroll-on-click><i class="fa fa-wrench"></i> Parts</a>
				</li>
				<li id="modeling">
					<a href='#/modeling' scroll-on-click><i class="fa fa-line-chart"></i> Modeling</a>
				</li>
				<li id="notebook">
					<a href='#/notebook' scroll-on-click><i class="fa fa-book"></i> Notebook</a>
				</li>
				<li id="safety">
					<a href='#/safety' scroll-on-click><i class="fa fa-exclamation-triangle"></i> Safety</a>
				</li>
				<li id="attributions">
					<a href='#/attributions' scroll-on-click><i class="fa fa-asterisk"></i> Attributions</a>
				</li>
			</ul>
		</div>
	</nav>
</div>

<section id="main">
	<div id="main-inner">
		<div id="view" ng-view data-autoscroll="true"></div>
	<!--</div>--> 

<!--</section>-->

<?php
include ('footer.php');
?>