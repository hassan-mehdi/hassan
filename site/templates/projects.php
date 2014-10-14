<?php snippet('header', array('css' => '/assets/min/work.min.css')) ?>

  <main class="main" role="main">

    <div class="text">
      <?php echo $page->text()->kirbytext() ?>
    </div>
    
  </main>

<?php snippet('footer', array('js' => '/assets/min/work.min.js')) ?>