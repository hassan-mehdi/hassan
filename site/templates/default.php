<?php snippet('header', array('css' => '/assets/min/standard.min.css')) ?>

<main class="main" role="main">
	<div class="container-fluid menu-offset">
		<div class="col-md-12 standard">
			<?php echo $page->text()->kirbytext() ?>
		</div>
	</div>
</main>

<?php snippet('footer', array('js' => '/assets/min/standard.min.js')) ?>