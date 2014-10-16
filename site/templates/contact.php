<?php snippet('header', array('css' => 'assets/min/contact.min.css')) ?>
<main class="main" role="main" id="main">
	<div class="container-fluid menu-offset">
		<div class="col-md-12">
			<section class="waypoint about-height" id="contact">
				<div class="col-md-12">
					<div class="form-wrapper">
						<svg version="1.1" id="loader-shape" width="100px" height="100px" viewBox="0 0 100 100">
							<g>
								<path fill="#747582" d="M50,0C22.385,0,0,22.385,0,50c0,27.615,22.385,50,50,50c27.615,0,50-22.386,50-50C100,22.385,77.614,0,50,0
								z M50,97.874C23.559,97.874,2.125,76.44,2.125,50C2.125,23.559,23.559,2.125,50,2.125c26.44,0,47.875,21.434,47.875,47.874
								C97.874,76.44,76.439,97.874,50,97.874z"/>
							</g>
							<g id="progressor">
								<path fill="#FFFFFF" d="M2.125,50C2.125,23.559,23.559,2.125,50,2.125h0V0h0C22.385,0,0,22.385,0,50v0L2.125,50L2.125,50z"/>
							</g>
						</svg>
						<form id="contact-form" method="post" action="http://localhost/hassan/process.php">
							<div class="form-inner">
								<div class="row">
									<div class="col-md-12">
										<h1 class="up lite">Give me a shout if you would like to find out more</h1>
										<p class="largeFont">Don't worry I won't share your email address with anyone, and I clean my contact list periodically. I won’t fill your inbox with newsletters about my new pencils or whatever either  : )</p>
									</div>
									<div class="col-md-6">
										<label>Name</label>
										<input type="text" name="name" placeholder="Type Here">

										<label>Email*</label>
										<input name="email" type="email" placeholder="Type Here">
									</div>
									<div class="col-md-6">
										<label>Message</label>
										<textarea name="message" placeholder="Type Here"></textarea>
									</div>
									<div class="col-md-12 centered">
										<label>2+2?*</label>
										<input type="text" name="human" placeholder="Type Here">
										<input id="submit" name="submit" type="submit" value="Submit">
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</section>
		</div>
	</div>
</main>

<?php snippet('footer', array('js' => '/assets/min/contact.min.js')) ?>
<!-- 
<?php echo $page->text()->kirbytext() ?> -->