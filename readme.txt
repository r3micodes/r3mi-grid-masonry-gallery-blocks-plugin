=== R3MI Grid Masonry Gallery Blocks ===
Contributors: r3micodes
Tags: gutenberg, blocks, photo gallery, masonry gallery, grid gallery
Requires at least: 6.8
Tested up to: 7.1
Requires PHP: 8.0
Stable tag: 1.0.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

A collection of customizable Gutenberg blocks, including responsive image gallery layouts.


== Description ==

R3MI Grid Masonry Gallery Blocks extends the Gutenberg editor with powerful and easy-to-use gallery blocks, allowing you to create beautiful and responsive image galleries.

**Features include:**

- **Grid Gallery**: Create customizable image grid layouts.
- **Masonry Gallery**: Arrange images in flexible masonry layouts.
- **Responsive Layouts**: Display galleries across different screen sizes.
- **Lightbox**: Preview images with lightbox navigation.
- **Easy Image Management**: Manage gallery images directly through the WordPress Block Editor.


== Demo ==

Explore the live demo:
https://r3micodes.free.nf/


== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/r3mi-grid-masonry-gallery-blocks` directory, or install the plugin directly through the WordPress Plugins screen.
2. Activate the plugin through the Plugins screen in WordPress.
3. Open the Gutenberg editor and add the Grid Gallery or Masonry Gallery block.
4. Add images and customize your gallery settings.


== Frequently Asked Questions ==

= Does this plugin work with Gutenberg? =
Yes. The plugin uses the native WordPress Block Editor.

= What gallery layouts are available? =
The plugin provides Grid Gallery and Masonry Gallery layouts.

= How do I add images to a gallery? =
Insert a Grid Gallery or Masonry Gallery block and add images using its nested Gallery Image blocks.

= Does the plugin support lightbox previews? =
Yes. You can enable the lightbox feature to preview gallery images.

= Is the gallery responsive? =
Yes. Both gallery layouts are designed to work across different screen sizes.


== Development ==

This plugin uses Node.js, npm, and @wordpress/scripts to compile its Gutenberg blocks.

**Source Code:**
Original JavaScript and SCSS source files are located in the src/ directory. Compiled production files are located in the build/ directory.

**Requirements:**
- Node.js
- npm
- @wordpress/scripts

**Build Instructions:**
1. Open a terminal in the plugin directory.
2. Install the development dependencies:
`npm install`
3. Compile the plugin:
`npm run build`

**Development Mode:**
Run the following command to watch for changes and automatically rebuild:
`npm start`

**Block Architecture:**
- **Grid Gallery** `(r3mi/grid-gallery)` is a parent gallery block.
- **Masonry Gallery** `(r3mi/masonry-gallery)` is a parent gallery block.
- **Gallery Image** `(r3mi/image)` is a child image block.
- Gallery Image blocks are stored as nested Gutenberg blocks using InnerBlocks.
- Each block is registered separately using its own block.json metadata.
- Each block has its own compiled editor bundle.
- Block types must not be registered more than once.


== Changelog ==

= 1.0.0 =
* Initial release.
