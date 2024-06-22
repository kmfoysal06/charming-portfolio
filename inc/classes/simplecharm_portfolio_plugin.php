<?php
/**
 * Main Class
 * @package Simplecharm Portfolio Plugin
 */
namespace CHARMING_PORTFOLIO\Inc\Classes;
use CHARMING_PORTFOLIO\Inc\Traits\Singleton;
class CHARMING_PORTFOLIO{
    use Singleton;
    
	public function __construct()
	{
        Assets::get_instance();
        Portfolio::get_instance();
	}
}