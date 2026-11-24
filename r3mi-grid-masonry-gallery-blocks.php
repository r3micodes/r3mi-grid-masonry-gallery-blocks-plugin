<?php

/**
 * Plugin Name: R3MI Grid Masonry Gallery Blocks
 * Description: Create stunning WordPress websites with powerful, flexible, and customizable Gutenberg gallery blocks, featuring Grid and Masonry layouts.
 * Version: 1.0.0
 * Requires at least: 6.8
 * Requires PHP: 8.0
 * Author: R3MI Codes
 * Author URI: https://github.com/r3micodes
 * Plugin URI: https://profiles.wordpress.org/r3micodes
 * License: GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: r3mi-grid-masonry-gallery-blocks
 */

if (! defined('ABSPATH')) {
	exit;
}


if (!class_exists('R3MI_grid_masonry_gallery_blocks')) {

	class R3MI_grid_masonry_gallery_blocks
	{
		public function __construct()
		{
			add_action('init',  array($this, 'register_gallery_block_func'));
			add_action('admin_enqueue_scripts',  array($this, 'admin_enqueue_styles_func'));
			add_action('wp_enqueue_scripts',  array($this, 'front_end_styles_func'));
			add_action('enqueue_block_assets', array($this, 'import_dashicons_func'));
			add_filter(
				'block_categories_all',
				array($this, 'register_block_category_func'),
				10,
				2
			);
		}

		public function import_dashicons_func()
		{
			wp_enqueue_style('dashicons');
		}


		public function admin_enqueue_styles_func($hook)
		{
			wp_enqueue_style(
				'r3mi-admin-block-style',
				plugin_dir_url(__FILE__) . 'assets/css/editor.min.css',
				[],
				filemtime(plugin_dir_path(__FILE__) . 'assets/css/editor.min.css') // Version number
			);
		}

		function front_end_styles_func()
		{
			wp_enqueue_style(
				'r3mi-block-style', // Unique handle
				plugin_dir_url(__FILE__)  . 'assets/css/style.min.css', // Path to stylesheet
				array(), // Dependencies
				filemtime(plugin_dir_path(__FILE__) . 'assets/css/style.min.css'), // Version number
				'all' // Media type
			);
		}

		public function register_block_category_func($categories, $editor_context)
		{
			array_unshift(
				$categories,
				array(
					'slug'  => "r3mi-grid-masonry-gallery-blocks",
					'title' => __('R3MI Gallery', "r3mi-grid-masonry-gallery-blocks"),
					//'icon'  => 'info-outline',
				)
			);

			return $categories;
		}

		public function register_gallery_block_func()
		{
			$blocks_dir = plugin_dir_path(__FILE__) . 'build/blocks/';
			if (! is_dir($blocks_dir)) {
				return;
			}

			$block_json_files = glob($blocks_dir . '*/block.json');
			if (empty($block_json_files)) {
				return;
			}

			foreach ($block_json_files as $block_json) {
				$block_dir = dirname($block_json);
				$registered = register_block_type($block_dir);
			}
		}
	}

	new R3MI_grid_masonry_gallery_blocks;
}
