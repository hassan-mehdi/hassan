<?php snippet('header', array('css' => '/assets/min/work-detail.min.css')) ?>

  <main class="main" role="main">
    <div class="container-fluid menu-offset">
      <div class="row">
        <div class="col-md-4" id="work-sidebar">
          <div id="info-wrap">
            <div class="col-md-12" id="page-title">
              <h1 class="up"><?php echo $page->title()->html() ?></h1>
              <h3 class="up"><?php echo $page->disciplines() ?></h3>
            </div>
            <div class="col-md-12" id="work-desc">
              <?php echo $page->text()->kirbytext() ?>
            </div>
            <div class="work-nav-wrap">
              <h6 class="up">Browse Projects</h6>
              <nav class="work-nav">
                <?php if($page->hasPrev()): ?>
                  <a class="<?php if($page->hasNext() == 0) echo 'no-next'; ?> work-nav-prev" href="<?php echo $page->prev()->url() ?>">
                    <img class="work-nav-prev-icon" src="/assets/img/svg/prev-arrow-icon.svg">
                    <h5 class="work-nav-label-prev up">Prev</h5>
                  </a>
                <?php endif ?>
                <?php if($page->hasNext()): ?>
                  <a class="<?php if($page->hasPrev() == 0) echo 'no-prev'; ?> work-nav-next" href="<?php echo $page->next()->url() ?>">
                     <img class="work-nav-next-icon" src="/assets/img/svg/next-arrow-icon.svg">
                     <h5 class="work-nav-label-next up">Next</h5>
                  </a>
                <?php endif ?>
              </nav>
              <div class="page-tools">
                <a href="#" class="up voidFade backtoTop">Back to the top</a>
                <div class="share-tools">
                  <a href="https://api.addthis.com/oexchange/0.8/forward/facebook/offer?url=http%3A%2F%2Fwww.addthis.com&pubid=ra-54328e2453ff9738&ct=1&title=AddThis%20-%20Get%20likes%2C%20get%20shares%2C%20get%20followers&pco=tbxnj-1.0" target="_blank"><img src="/assets/img/facebook.png" border="0" alt="Facebook"/></a>
                  <a href="https://api.addthis.com/oexchange/0.8/forward/twitter/offer?url=http%3A%2F%2Fwww.addthis.com&pubid=ra-54328e2453ff9738&ct=1&title=AddThis%20-%20Get%20likes%2C%20get%20shares%2C%20get%20followers&pco=tbxnj-1.0" target="_blank"><img src="/assets/img/twitter.png" border="0" alt="Twitter"/></a>
                  <a href="https://api.addthis.com/oexchange/0.8/forward/linkedin/offer?url=http%3A%2F%2Fwww.addthis.com&pubid=ra-54328e2453ff9738&ct=1&title=AddThis%20-%20Get%20likes%2C%20get%20shares%2C%20get%20followers&pco=tbxnj-1.0" target="_blank"><img src="/assets/img/linkedin.png" border="0" alt="LinkedIn"/></a>
                  <a href="https://api.addthis.com/oexchange/0.8/forward/google_plusone_share/offer?url=http%3A%2F%2Fwww.addthis.com&pubid=ra-54328e2453ff9738&ct=1&title=AddThis%20-%20Get%20likes%2C%20get%20shares%2C%20get%20followers&pco=tbxnj-1.0" target="_blank"><img src="/assets/img/google+.png" border="0" alt="Google+"/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8" id="work-detail">
          <div class="col-md-12" id="logo"><img src="<?php echo $page->logo() ?>"></div>
            <div class="col-md-12" id="stats">
              <div class="col-md-4" id="canvas-holder2">
                <canvas id="chart2" width="300px" height="280px"></canvas>
                <h4 class="up">Discipline Involvement<br>Map</h4>
              </div>

              <div class="col-md-4" id="canvas-holder">
                <canvas id="chart1" width="200px" height="280px"></canvas>
                <h4 class="up"><em>Design</em>Front-End<br>Ratio</h4>
              </div>

              <div class="col-md-4" id="canvas-holder3">
                <canvas id="chart3" width="200px" height="280px"></canvas>
                <h4 class="up">Overall Project<br>Ownership</h4>
              </div>
            </div>
          <?php echo $page->work() ?>
        </div>
      </div>
    </div>
  </main>

<?php snippet('footer', array('js' => '/assets/min/work-detail.min.js')) ?>
<script type="text/javascript">
$(document).ready(function(){
  var stat1 = {
    labels: ["Design", "HTML", "CSS", "JS", "Responsive", "QA/Testing"],
    datasets: [
    {
      label: "My First dataset",
      fillColor: "#d9d9d9",
      strokeColor: "#d9d9d9",
      pointColor: "#0b0c1c",
      data: [<?php echo $page->involvement() ?>]
    }
    ]
  };

  var stat2 = [
  {
    value: <?php echo $page->ratio1() ?>,
    color:"#0b0c1c"
  },
  {
    value: <?php echo $page->ratio2() ?>,
    color:"#d9d9d9"
  }
  ];

  var stat3 = [
  {
    value: <?php echo $page->ownership1() ?>,
    color:"#0b0c1c"
  },
  {
    value: <?php echo $page->ownership2() ?>,
    color:"#d9d9d9"
  }
  ];

  window.onload = function(){
    window.myRadar = new Chart(document.getElementById("chart2").getContext("2d")).Radar(stat1, {responsive: false, pointLabelFontFamily : "'Oswald','sans-serif'", pointLabelFontSize : 14, showTooltips: false, pointLabelFontStyle : "300"});

    var ctx1 = document.getElementById("chart1").getContext("2d");
    window.myPolarArea = new Chart(ctx1).PolarArea(stat2, {responsive:false, scaleShowLabelBackdrop : false, showScale: false, showTooltips: false});

    var ctx3 = document.getElementById("chart3").getContext("2d");
    window.myDoughnut = new Chart(ctx3).Doughnut(stat3, {responsive : false, showTooltips: false});
  };
});
</script>