<?php
/**
 * Main Class
 * @package Charming Portfolio
 */
namespace CHARMING_PORTFOLIO\Inc\Classes;
use CHARMING_PORTFOLIO\Inc\Traits\Singleton;
class PORTFOLIO_PLUGIN{
    use Singleton;
    
	public function __construct()
	{
        Assets::get_instance();
        Portfolio::get_instance();
	}
}