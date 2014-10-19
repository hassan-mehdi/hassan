</div> <!-- page-wrapper end -->
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <?php echo js('assets/min/core.min.js') ?>
        <?php if(isset($js)) echo js($js) ?>
         <!--[if IE 9]>
	        <?php echo js('assets/min/ie/ie9.min.js') ?>
        <![endif]-->
    </body>
</html>