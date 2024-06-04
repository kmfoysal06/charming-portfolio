<?php
/**
 * Main Class
 * @package Simplecharm_Portfolio
 */
namespace SIMPLECHARM_PORTFOLIO_PLUGIN\Inc\Classes;
use SIMPLECHARM_PORTFOLIO_PLUGIN\Inc\Traits\Singleton;
class Simplecharm_Portfolio_Plugin{
    use Singleton;
    
	public function __construct()
	{
        Assets::get_instance();
        Portfolio::get_instance();
	}
}