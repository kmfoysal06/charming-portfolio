<?php
/**
 * Class File Autoloader
 * @package Aquila
 */
spl_autoload_register('simplecharm_portfolio_plugin_autoloader');
function simplecharm_portfolio_plugin_autoloader($class) {
	$namespace = 'SIMPLECHARM_PORTFOLIO_PLUGIN';
 
	if (strpos($class, $namespace) !== 0) {
		return;
	}
 
	$class = str_replace($namespace, '', $class);
	$class = str_replace('\\', DIRECTORY_SEPARATOR, $class) . '.php';
 
	$directory = SIMPLECHARM_PORTFOLIO_PLUGIN_DIR_PATH;
	$path = strtolower($directory . $class);

 
	if (file_exists($path)) {
		require_once($path);
	}
}