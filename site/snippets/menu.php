<nav role="navigation" id="menu">
  <a href="<?php echo url() ?>"><img id="hassan-logo" alt="logo" src="assets/img/svg/logo.svg" width="40" height="62"></a>
  <div id="menu-inner">
    <div id="menuIcon-wrap">
      <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" id="menuIcon">
        <g>
          <path id="line1" fill="none" stroke="#fff" stroke-width="5" stroke-linejoin="bevel" d="m 0,12 50,0"/>
          <path id="line2" fill="none" stroke="#fff" stroke-width="5" stroke-linejoin="bevel" d="m 0,24 50,0"/>
          <path id="line3" fill="none" stroke="#fff" stroke-width="5" stroke-linejoin="bevel" d="m 0,36 50,0"/>
        </g>
      </svg>
    </div>

    <ul class="menu-list cf">
      <?php foreach($pages->visible() as $p): ?>
      <li>
        <a <?php e($p->isOpen(), ' class="active"') ?> href="<?php echo $p->url() ?>"><?php echo html($p->title()) ?></a>

        <?php if($p->hasVisibleChildren()): ?>
        <ul class="submenu">
          <?php foreach($p->children()->visible() as $p): ?>
          <li>
            <a href="<?php echo $p->url() ?>"><?php echo html($p->title()) ?></a>
          </li>
          <?php endforeach ?>
        </ul>
        <?php endif ?>

      </li>
      <?php endforeach ?>
    </ul>
  </div>
</nav>