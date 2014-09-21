<?php
include ('header.php');
?>
<canvas id="canvas"></canvas>

<div id="splash-wrapper">
	<section id="splash" style="position:absolute;">
		<div class="container">
			<div class="page-header">
				<h1>2014 iGEM U of T: Biocontainment</h1>
			</div>
			<p class="lead">
				Conventional genetic safeguards for the biocontainment of synthetic organisms often rely on various suicide mechanisms. However, these “kill-switches” suffer from a fundamental flaw since they impose selective pressure on organisms to evolve inactivation of the genetic safeguard. Activation of a kill-switch removes all individuals containing intact kill-switches from the population, leaving behind only individuals with defective kill-switches to found a new population. This project proposes an inducible plasmid-loss system to remove genetically engineered traits from a population without imposing selective pressure against the safeguard itself. The inducible plasmid-loss system is implemented by creating a plasmid containing CRISPR/Cas9, an RNA-guided nuclease system which targets and cleaves itself. A population containing this plasmid is expected to revert to wild-type upon activation. In addition to encouraging the application of evolutionary approaches to the field of synthetic biology, this project also contributes to making synthetic organisms safe for routine use outside the lab.
			</p>
		</div>
	</section>
	<nav>
		<div class="container">
			<p class="text-muted">
				HOME / TEAM / PROJECT / PARTS / MODELING / NOTEBOOK / SAFETY / ATTRIBUTIONS
			</p>
		</div>
	</nav>
</div>

<section id="main">
	<div class="container-wrapper">
		<div class="container">
			<?php
			include ('lorem.php');
			?>
			<?php
				include ('lorem.php');
			?>
		</div>
	</div>
	<div style="height:100px; opacity:0.5;"></div>
	<div class="container-wrapper">
		<div class="container">
			
			<?php
				include ('lorem.php');
			?>
			<?php
				include ('lorem.php');
			?>
		</div>
	</div>

<!--</section>-->

<?php
include ('footer.php');
?>