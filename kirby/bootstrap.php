<?php

if(!defined('KIRBY'))  define('KIRBY', true);
if(!defined('DS'))     define('DS', DIRECTORY_SEPARATOR);
if(!defined('TERROR')) define('TERROR', true);

// load the kirby toolkit
include(__DIR__ . DS . 'toolkit' . DS . 'bootstrap.php');

// load the custom error handler
if(TERROR) {
  include(__DIR__ . DS . 'terror' . DS . 'terror.php');
  terror::init();
}

// start a session
s::start();

// load all core classes
load(array(

  // kirby class and subclasses
  'kirby'                  => __DIR__ . DS . 'kirby.php',
  'kirby\\roots'           => __DIR__ . DS . 'kirby' . DS . 'roots.php',
  'kirby\\urls'            => __DIR__ . DS . 'kirby' . DS . 'urls.php',
  'kirby\\request'         => __DIR__ . DS . 'kirby' . DS . 'request.php',
  'kirby\\request\\params' => __DIR__ . DS . 'kirby' . DS . 'request' . DS . 'params.php',
  'kirby\\request\\query'  => __DIR__ . DS . 'kirby' . DS . 'request' . DS . 'query.php',
  'kirby\\request\\path'   => __DIR__ . DS . 'kirby' . DS . 'request' . DS . 'path.php',

  // all core abstracts
  'pagesabstract'          => __DIR__ . DS . 'core' . DS . 'pages.php',
  'childrenabstract'       => __DIR__ . DS . 'core' . DS . 'children.php',
  'contentabstract'        => __DIR__ . DS . 'core' . DS . 'content.php',
  'fieldabstract'          => __DIR__ . DS . 'core' . DS . 'field.php',
  'fileabstract'           => __DIR__ . DS . 'core' . DS . 'file.php',
  'filesabstract'          => __DIR__ . DS . 'core' . DS . 'files.php',
  'kirbytextabstract'      => __DIR__ . DS . 'core' . DS . 'kirbytext.php',
  'kirbytagabstract'       => __DIR__ . DS . 'core' . DS . 'kirbytag.php',
  'pageabstract'           => __DIR__ . DS . 'core' . DS . 'page.php',
  'roleabstract'           => __DIR__ . DS . 'core' . DS . 'role.php',
  'rolesabstract'          => __DIR__ . DS . 'core' . DS . 'roles.php',
  'siteabstract'           => __DIR__ . DS . 'core' . DS . 'site.php',
  'usersabstract'          => __DIR__ . DS . 'core' . DS . 'users.php',
  'userabstract'           => __DIR__ . DS . 'core' . DS . 'user.php',

  // lib
  'pageextension'          => __DIR__ . DS . 'lib' . DS . 'pageextension.php',

  // vendors
  'parsedown'              => __DIR__ . DS . 'vendors' . DS . 'parsedown.php',
  'parsedownextra'         => __DIR__ . DS . 'vendors' . DS . 'parsedownextra.php'

));

// load all helper functions
include(__DIR__ . DS . 'helpers.php');