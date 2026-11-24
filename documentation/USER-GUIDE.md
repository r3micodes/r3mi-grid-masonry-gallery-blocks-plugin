# R3MI Gallery Blocks – Grid & Masonry
## Buyer Guide and User Manual

**Version:** 1.0.0  
**Publisher:** R3MI Codes  
**Requirements:** WordPress 6.8 or later; PHP 8.0 or later.

Thank you for choosing R3MI Gallery Blocks. This manual explains installation, creating Grid and Masonry galleries, managing images, configuring the available options, using the lightbox, and troubleshooting common issues.

---

## 1. Product overview

R3MI Gallery Blocks adds two gallery layout blocks to the WordPress Block Editor (Gutenberg):

- **Grid Gallery** arranges images in a regular grid and applies a shared image aspect ratio.
- **Masonry Gallery** arranges images in masonry-style columns. Individual images can use different aspect ratios.
- **Image** is the child block placed inside either gallery. It stores the selected image, caption text, alternative text, and (inside Masonry Gallery) an individual aspect ratio.

No separate page builder or third-party gallery service is required.

## 2. Installation and activation

1. Sign in to your WordPress administration dashboard.
2. Go to **Plugins → Add New Plugin**.
3. Select **Upload Plugin** and choose the supplied R3MI Gallery Blocks ZIP package.
4. Select **Install Now**, then select **Activate Plugin**.
5. Open an existing page or post, or create a new one, using the WordPress Block Editor.

Alternatively, extract the plugin folder into `wp-content/plugins/` and activate it from **Plugins → Installed Plugins**.

After activation, search for **Grid Gallery** or **Masonry Gallery** in the block inserter.

## 3. Create a Grid Gallery

1. Edit the page or post where the gallery should appear.
2. Select the **+** block inserter and search for **Grid Gallery**.
3. Insert the block. In its empty placeholder, choose images from the Media Library or upload image files.
4. Select multiple images to create the gallery in one step.
5. Select the parent Grid Gallery block to open its settings in the right-hand Block Settings sidebar.
6. Adjust Gallery Settings, Caption Settings, and Lightbox settings.
7. Preview the page, then select **Update** or **Publish**.

### Grid Gallery settings

Open **Gallery Settings** in the parent block's sidebar.

| Setting | Description |
|---|---|
| Aspect Ratio | Applies a shared ratio: Square (1:1), Landscape (4:3), Wide (16:9), Portrait (3:4), Tall (2:3), Cinema (21:9), or Classic (5:4). |
| Columns (Desktop) | Choose 2, 3, 4, 5, or 6 columns for desktop screens wider than 1024px. |
| Image Gap | Sets spacing between images, from 0 to 50 pixels. |
| Image Radius | Sets image corner rounding, from 0 to 25 pixels. |
| Enable Hover Effect | Enables a subtle image zoom when a visitor hovers over an image. |

At screen widths up to 600px, Grid Gallery automatically displays two columns.

## 4. Create a Masonry Gallery

1. Edit the page or post where the gallery should appear.
2. Select the **+** block inserter and search for **Masonry Gallery**.
3. Insert the block and use its empty placeholder to upload images or select multiple images from the Media Library.
4. Select the parent Masonry Gallery block to open its settings in the right-hand sidebar.
5. Adjust columns, spacing, corner radius, hover behavior, captions, and lightbox.
6. To customize one image, select its nested **Image** block and use the Image block settings.
7. Preview the page, then select **Update** or **Publish**.

### Masonry Gallery settings

| Setting | Description |
|---|---|
| Columns (Desktop) | Choose 2, 3, 4, 5, or 6 columns for desktop screens wider than 1024px. |
| Image Gap | Sets spacing between images, from 0 to 50 pixels. |
| Image Radius | Sets image corner rounding, from 0 to 25 pixels. |
| Enable Hover Effect | Enables a subtle image zoom when a visitor hovers over an image. |

At screen widths up to 600px, Masonry Gallery automatically displays two columns.

### Set an individual Masonry image ratio

1. Select an Image block inside Masonry Gallery.
2. Open the Image block's **Settings** panel.
3. Find **Aspect Ratio**.
4. Choose **Original** to retain the image's natural proportions, or choose Square (1:1), Landscape (4:3), Wide (16:9), Portrait (3:4), Tall (2:3), Cinema (21:9), or Classic (5:4).

The per-image aspect-ratio selector is available inside Masonry Gallery.

## 5. Configure captions and presentation

Select the parent gallery block and expand **Caption Settings**.

### Show Captions
Turn on **Show Captions** to display captions. Caption text is edited on each individual Image block.

### Caption Type
- **Below Image:** displays the caption below the image.
- **Full Overlay:** places the caption over the image with a dark gradient overlay.
- **Bar Overlay:** places the caption in a bar-style overlay at the bottom of the image.

### Caption Visibility
- **Always Visible:** keeps captions displayed.
- **Show On Hover:** reveals captions when the visitor hovers over the image.
- **Hide On Hover:** hides captions while the visitor hovers over the image.

For hover-based caption visibility, also enable **Enable Hover Effect** in Gallery Settings. Hover interactions are intended for pointer devices; touch devices may not have a hover interaction.

### Caption Alignment
Choose **Left**, **Center**, or **Right**.

### Edit an individual caption
1. Select the relevant Image block.
2. In its **Settings** panel, find **Caption text**.
3. Enter or edit the caption.
4. The parent gallery's **Show Captions** option controls whether captions appear on the frontend.

When an image is selected from the Media Library, the plugin initially uses its media caption, or its title if a caption is not available. You can edit this text in the Image block.

## 6. Manage gallery images

### Add images when creating a gallery
Use the initial gallery placeholder to upload files or select multiple existing images from the Media Library.

### Add images later
1. Select the parent Grid Gallery or Masonry Gallery block.
2. Use **Add Images** in the block toolbar.
3. Choose **Upload** to select files from your computer, or **Media Library** to choose existing WordPress images.
4. Select the images and confirm.

The add-images control avoids adding image IDs that are already present in that gallery.

### Replace an image
1. Select the Image child block.
2. Choose **Replace** in the block toolbar.
3. Select a replacement image from the Media Library.

### Reorder images
Use the WordPress Block Editor's normal block mover controls or drag-and-drop interaction to move Image blocks within the parent gallery. The order of child blocks determines the displayed image order.

### Remove an image
1. Select the Image block.
2. Open its options menu (three dots).
3. Choose **Remove** or **Delete**, depending on your WordPress editor version.

Removing an Image block from a page does not delete the original media attachment from the WordPress Media Library.

## 7. Configure the lightbox

The lightbox opens an enlarged view of an image on the frontend.

1. Select the parent Grid Gallery or Masonry Gallery block.
2. Expand the **Lightbox** panel in the Block Settings sidebar.
3. Turn on **Enable Lightbox**.
4. Update or publish the page.
5. Visit the published page and select an image in that gallery.

### Lightbox controls
- **Close button:** closes the enlarged image.
- **Previous and Next buttons:** move between images in the gallery that was opened.
- **Image counter:** displays the current position, such as `2 / 5`.
- **Escape key:** closes the lightbox.
- **Left and Right arrow keys:** navigate to the previous or next image.

Lightbox is off by default and must be enabled separately for each gallery. Navigation is limited to the gallery that was opened.

## 8. Image block settings

Select an individual **Image** child block to access its settings.

| Setting | Description |
|---|---|
| Caption text | Text displayed as the image caption when captions are enabled on the parent gallery. |
| Alternative text | Describes the image for screen readers and situations where the image cannot be displayed. |
| Aspect Ratio | Available inside Masonry Gallery. Choose Original or one of the preset ratios. |

Write concise, meaningful alternative text that describes the important content of the image. Avoid using filenames or keyword lists as alternative text.

## 9. Design and customization tips

- Use **Grid Gallery** for a regular, consistent image presentation.
- Use **Masonry Gallery** when images should retain varied proportions.
- Adjust **Image Gap** to increase or reduce space between images.
- Adjust **Image Radius** to coordinate image corners with your website design.
- Use a consistent ratio for a uniform grid, or Original/mixed ratios for a varied masonry layout.
- Keep captions short, especially when using overlay styles.
- Preview the published page on a phone-sized screen. Both layouts switch to two columns at widths up to 600px.
- Resize and compress large images before uploading to improve page performance.

The available visual customization is provided through the block settings described in this guide. The plugin does not include a separate theme-wide styling panel.

## 10. Troubleshooting

### The gallery blocks do not appear
1. Confirm that **R3MI Gallery Blocks – Grid & Masonry** is installed and activated.
2. Reload the Block Editor.
3. Search for **Grid Gallery** or **Masonry Gallery**.
4. Confirm the site meets the minimum WordPress and PHP requirements.

### The gallery is empty
1. Select the parent gallery block.
2. Use the image placeholder or **Add Images** toolbar control.
3. Confirm the images are available in the WordPress Media Library.
4. Save the page and reload the editor if selected images do not appear.

### An image is missing or broken
1. Open **Media → Library** and check that the original image is available.
2. If the image was moved or deleted outside WordPress, upload it again.
3. Select the affected Image block and use **Replace**.
4. Check for browser, security, or hotlinking rules that may block the image.

### The lightbox does not open
1. Select the parent gallery block.
2. Open **Lightbox** and enable **Enable Lightbox**.
3. Update the page and test the published page.
4. Clear page cache or optimization cache and test again.

### Captions are not visible
1. Select the parent gallery.
2. Open **Caption Settings** and enable **Show Captions**.
3. Select the Image block and make sure **Caption text** is not empty.
4. If using **Show On Hover** or **Hide On Hover**, also enable **Enable Hover Effect**.

### The gallery has fewer columns on a phone
This is expected. Both layouts automatically use two columns at screen widths up to 600px. The desktop column selector applies to screens wider than 1024px.

### Changes are not visible on the public page
1. Select **Update** or **Publish** in the editor.
2. Clear your WordPress cache plugin and any server/CDN cache.
3. Refresh the page in a private browser window.
4. If an optimization plugin changes frontend CSS or JavaScript, temporarily test with optimization disabled.

### The editor or frontend displays an error
1. Update WordPress to a supported version.
2. Confirm PHP is version 8.0 or later.
3. Temporarily disable other plugins to check for a conflict.
4. Temporarily switch to a standard WordPress theme to check for a theme conflict.
5. Re-enable plugins one at a time to identify a conflict.

## 11. Frequently asked questions

**Can I use both gallery layouts on the same page?**  
Yes. Insert Grid Gallery and Masonry Gallery blocks wherever needed. Configure each block independently.

**Can I add different images to each gallery?**  
Yes. Each gallery maintains its own nested Image blocks.

**Can I edit a caption after adding an image?**  
Yes. Select the Image block and edit its Caption text setting.

**Does the lightbox show images from every gallery on the page?**  
No. Navigation is limited to the images in the gallery that was opened.

**Does removing an image from a gallery delete it from the Media Library?**  
No. Removing an Image block removes it from that gallery only. The media attachment remains in the Media Library.

**Can I change the number of columns on mobile?**  
The current responsive layout automatically uses two columns at screen widths up to 600px. The desktop column selector controls desktop screens wider than 1024px.

## 12. Support

When contacting the author for product support, include your WordPress version, PHP version, the gallery block you are using, the steps that reproduce the issue, and screenshots or a screen recording if available.

**Product:** R3MI Gallery Blocks – Grid & Masonry  
**Author:** R3MI Codes  
**Website:** https://github.com/r3micodes

© R3MI Codes.
