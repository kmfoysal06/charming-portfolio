<?php
/**
 * Class File Autoloader
 * @package Charming Portfolio
 */
if ( ! defined( 'ABSPATH' ) ) exit;
spl_autoload_register('CHARMING_PORTFOLIO_autoloader');
function CHARMING_PORTFOLIO_autoloader($class) {
	$namespace = 'CHARMING_PORTFOLIO';
 
	if (strpos($class, $namespace) !== 0) {
		return;
	}
 
	$class = str_replace($namespace, '', $class);
	$class = str_replace('\\', DIRECTORY_SEPARATOR, $class) . '.php';
 
	$directory = CHARMING_PORTFOLIO_DIR_PATH;
	$path = strtolower($directory . $class);

 
	if (file_exists($path)) {
		require_once($path);
	}
}