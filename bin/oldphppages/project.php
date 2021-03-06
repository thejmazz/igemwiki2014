<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<title>Team:Toronto - 2014.igem.org</title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
	</head>
	<body>
		<!--main content -->
		<table width="70%" align="center">

			<!--welcome box -->
			<tr>
				<td style="border:1px solid black;" colspan="3" align="center" height="150px" bgColor=#FF404B><h1 >WELCOME TO iGEM 2014! </h1>
				<p>
					Your team has been approved and you are ready to start the iGEM season!
					<br>
					On this page you can document your project, introduce your team members, document your progress
					<br>
					and share your iGEM experience with the rest of the world!
				</p>
				<br>
				<p style="color:#E7E7E7">
					<a href="http://2014.igem.org/wiki/index.php?title=Team:Toronto/Project&action=edit"style="color:#FFFFFF"> Click here  to edit this page!</a>
				</p></td>
			</tr>

			<tr>
				<td colspan="3"  height="5px"></td>
			</tr>
			<!-- end welcome box -->
			<tr>
				<?php include 'navmenulocal.php'; ?>
			</tr>
			</tr>
			</td>

			<tr>
				<td colspan="3"  height="15px"></td>
			</tr>
			<tr>
				<td bgColor="#e7e7e7" colspan="3" height="1px">
			</tr>
			<tr>
				<td colspan="3"  height="5px"></td>
			</tr>

			<!--Project content  -->
			<tr>
				<td ><h3> Project Description </h3></td>
				<td ></td >
				<td ><h3> Content</h3></td>
			</tr>

			<tr>
				<td width="45%"  valign="top">
				<p>
					Tell us more about your project.  Give us background.  Use this as the abstract of your project.  Be descriptive but concise (1-2 paragraphs)
				<p>

				<p>
					Currently, many applications for synthetic biology are being developed that involve synthetic organisms being used outside the lab (eg bioremediation). However, a major constraint on these ideas is the concern that synthetic organisms could have because unintended ecological damage once released into the environment. Because of this, it is necessary to develop methods for containing synthetic organisms before they can be considered safe for routine use.
					Conventional genetic safeguards for the biocontainment of synthetic organisms often rely on various suicide mechanisms. However, these “kill-switches” suffer from a fundamental flaw, in that they impose selective pressure on synthetic organisms to evolve inactivation of the genetic safeguard. This is because the activation of a kill-switch removes all individuals containing intact kill-switches from the population, leaving behind only mutant individuals with defective kill-switches to found a new population.
					This project proposes a new approach: removing genetically engineered traits from a population of synthetic organisms without trying to kill the organisms themselves. Instead of using kill-switches, we will be creating a plasmid-loss system, which will allow plasmids to delete themselves (along with the synthetic genes on them) from a population of bacterial cells. A population of genetically-engineered bacterial cells containing such plasmids is expected to revert to wild-type upon activation of the plasmid-loss system. Unlike in the kill-switch scenario, the post-plasmid-loss population will not be dominated by mutant individuals. Even though a small proportion of individuals with defective plasmid-loss systems may remain in the population, their numbers are expected to decrease over time due to the effects of genetic drift.
					We will be using the CRISPR/Cas9 RNA-guided nuclease system to implement a plasmid-loss genetic safeguard. The basic idea is to A) put Cas9 under inducible control and B) make Cas9 target its own plasmid.
					The natural CRISPR/Cas9 locus from Streptococcus pyogenes is already available in the registry as BBa_K1218011 (pCas9). However, it is not suitable for inducible control since the Cas9 gene is in the middle of a region containing uncharacterised constitutive promoters (included from the S. pyogenes locus). Because of this we be creating and characterizing our own inducible CRISPR/Cas9 plasmid-loss device.
					We will be starting from the BBa_K1218011, and rearranging its internal components so that the Cas9 gene is at the front (5’) end of the part, allowing to be regulated by inducible promoters. We will testing pBad, pLac, pRha, and possibly tet-off as inducible promoters for Cas9. In addition, to characterise the effect of Cas9 expression levels on its ability to cleave plasmids, we will also be using three Anderson promoters of varying strengths to drive our plasmid-loss system
					We have also designed two spacers to insert into the CRISPR array and their corresponding protospacers as biobricks to be inserted into target plasmids. One of these protospacers is actually a sequence within the RFP reporter BBa_J04450, while the other is a random sequence that does not match anywhere in the E. coli MG1655 genome.
				</p>
				<br>
				<h3>References </h3>
				<p>
					iGEM teams are encouraged to record references you use during the course of your research. They should be posted somewhere on your wiki so that judges and other visitors can see how you though about your project and what works inspired you.
				</p></td>

				<td></td>
				<td  width="45%"  valign="top">
				<p>
					You can use these subtopics to further explain your project
				</p>
				<ol>
					<li>
						Overall project summary
					</li>
					<li>
						Project Details
					</li>
					<li>
						Materials and Methods
					</li>
					<li>
						The Experiments
					</li>
					<li>
						Results
					</li>
					<li>
						Data analysis
					</li>
					<li>
						Conclusions
					</li>
				</ol>
				<p>
					It's important for teams to describe all the creativity that goes into an iGEM project, along with all the great ideas your team will come up with over the course of your work.
				</p>
				<p>
					It's also important to clearly describe your achievements so that judges will know what you tried to do and where you succeeded. Please write your project page such that what you achieved is easy to distinguish from what you attempted.
				</p></td>

			</tr>

		</table>
	</body>
</html>