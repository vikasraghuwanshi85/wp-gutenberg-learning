<?php
/**
 * Plugin Name: My Gutenberg Blocks - Learning
 * Description: Dummy plugin to learn Gutenberg block.json + GHA
 * Version: 0.1.0
 * Author: Vikas Raghuwanshi
 */

if (!defined('ABSPATH')) exit;

function mygb_register_blocks() {
    // Auto-register all blocks in /blocks/*
    $blocks = glob(__DIR__ . '/blocks/*', GLOB_ONLYDIR);
    foreach ($blocks as $block) {
        register_block_type($block);
    }
}
add_action('init', 'mygb_register_blocks');
