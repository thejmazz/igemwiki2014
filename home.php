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
			<ul>
				<li class="active">
					<a href=#><i class="fa fa-home"></i>Home</a>
				</li>
				<li>
					<a href=#><i class="fa fa-users"></i> Team</a>
				</li>
				<li>
					<a href=#><i class="fa fa-gears"></i> Project</a>
				</li>
				<li>
					<a href=#><i class="fa fa-wrench"></i> Parts</a>
				</li>
				<li>
					<a href=#><i class="fa fa-line-chart"></i> Modeling</a>
				</li>
				<li>
					<a href=#><i class="fa fa-book"></i> Notebook</a>
				</li>
				<li>
					<a href=#><i class="fa fa-exclamation-triangle"></i> Safety</a>
				</li>
				<li>
					<a href=#><i class="fa fa-asterisk"></i> Attributions</a>
				</li>
			</ul>
		</div>
	</nav>
</div>

<section id="main">
	<div id="main-inner">
		<div class="first container-wrapper">
			<div class="container">
				<?php include ('lorem.php'); ?>
				<?php include ('lorem.php'); ?>
			</div>
		</div>
		<h1><span>Heading 1</span></h1>
		<div class="container-wrapper">
			<div class="container">
				<?php include ('lorem.php'); ?>
				<?php include ('lorem.php'); ?>
			</div>
		</div>
		<h2><span>Heading 2</span></h2>
		<div class="container-wrapper">
			<div class="container">
				<?php include ('lorem.php'); ?>
				<?php include ('lorem.php'); ?>
			</div>
		</div>
		<h3><span>Heading 3</span></h3>
		<div class="container-wrapper">
			<div class="container">
				<?php include ('lorem.php'); ?>
				<h4><span>Heading 4</span></h4>
				<?php include ('lorem.php'); ?>
				<?php include ('lorem.php'); ?>
				<h5><span>Heading 5</span></h5>
				<?php include ('lorem.php'); ?>
				<h6><span>Heading 6</span></h6>
				<?php include ('lorem.php'); ?>
			</div>
		</div>
	<!--</div>--> 

<!--</section>-->

<?php
include ('footer.php');
?>