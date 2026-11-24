# R3MI Grid Masonry Gallery Block

A WordPress Gutenberg plugin containing three blocks:

- **Grid Gallery** (`r3mi/grid-gallery`) — parent layout block with column and gap controls.
- **Masonry Gallery** (`r3mi/masonry-gallery`) — parent layout block with column and gap controls.
- **Gallery Image** (`r3mi/image`) — child image block with its own media selection, replacement, removal, and alt text.

The Gallery Image block is designed as a child-only block and is inserted inside Grid Gallery or Masonry Gallery using `InnerBlocks`.

## Requirements

- WordPress 6.8+
- PHP 8.0+
- Node.js and npm (required for building from source).

## Build

Open a terminal in this plugin directory and run:

```bash
npm install
npm run build
```

For development with automatic rebuilding:

```bash
npm start
```

The build command creates the `build/` directory, including `index.js`, `view.asset.php`, `view.js`, `style-index.css` and `index.css`.

## Install

1. Build the plugin.
2. Upload the complete `r3mi-grid-masonry-gallery-blocks` folder to `wp-content/plugins/`, or zip the folder and upload it through **Plugins → Add New → Upload Plugin**.
3. Activate **R3MI Grid Masonry Gallery Blocks** through the WordPress Plugins screen.
4. In the block editor, insert **Grid Gallery** or **Masonry Gallery**.
5. Add or select images using the nested **Gallery Image** blocks.


## Development Notes

- Grid Gallery and Masonry Gallery are compiled into a shared editor JavaScript bundle and registered separately using their respective `block.json` metadata.
- Gallery Image blocks are stored as nested Gutenberg blocks rather than as an array attribute on the parent gallery block.
- The Gallery Image block is intended for use inside Grid Gallery and Masonry Gallery.
- Each block type should be registered only once. Avoid duplicate registration elsewhere in the plugin.
- The plugin includes lightbox functionality. Additional lightbox features can be implemented at the gallery-parent level in future updates.