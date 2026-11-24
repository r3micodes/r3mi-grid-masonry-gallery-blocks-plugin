import { __ } from "@wordpress/i18n";

export const R3MI_ADVANCED_BLOCKS = "r3mi-grid-masonry-gallery-blocks";
export const R3MI_UPLOADING = "Uploading...";
export const R3MI_IMAGES_UPLOADED_SUCCESS = "Images uploaded successfully!";
export const R3MI_IMAGES_UPLOADED_FAILED = "Image upload failed!";

export const R3MI_IMAGE_RESOLUTION = [
  { label: __("Square - 1:1", R3MI_ADVANCED_BLOCKS), value: "1 / 1" },
  { label: __("Landscape - 4:3", R3MI_ADVANCED_BLOCKS), value: "4 / 3" },
  { label: __("Wide - 16:9", R3MI_ADVANCED_BLOCKS), value: "16 / 9" },
  { label: __("Portrait - 3:4", R3MI_ADVANCED_BLOCKS), value: "3 / 4" },
  { label: __("Tall - 2:3", R3MI_ADVANCED_BLOCKS), value: "2 / 3" },
  { label: __("Cinema - 21:9", R3MI_ADVANCED_BLOCKS), value: "21 / 9" },
  { label: __("Classic - 5:4", R3MI_ADVANCED_BLOCKS), value: "5 / 4" },
];

export const R3MI_GALLERY_CAPTION_TYPE = [
  { label: __("Below Image", R3MI_ADVANCED_BLOCKS), value: "below-image" },
  { label: __("Full Overlay", R3MI_ADVANCED_BLOCKS), value: "full-overlay" },
  { label: __("Bar Overlay", R3MI_ADVANCED_BLOCKS), value: "bar-overlay" },
];

export const R3MI_GALLERY_CAPTION_VISIBILTY = [
  {
    label: __("Always Visible", R3MI_ADVANCED_BLOCKS),
    value: "always-visible",
  },
  { label: __("Show On Hover", R3MI_ADVANCED_BLOCKS), value: "show-hover" },
  { label: __("Hide On Hover", R3MI_ADVANCED_BLOCKS), value: "hide-hover" },
];

export const R3MI_LIGHTBOX_IMAGE_MODE = [
  { label: __("Slide", R3MI_ADVANCED_BLOCKS), value: "slide" },
  { label: __("Fade", R3MI_ADVANCED_BLOCKS), value: "fade" },
  { label: __("Zoom", R3MI_ADVANCED_BLOCKS), value: "zoom" },
  { label: __("None", R3MI_ADVANCED_BLOCKS), value: "none" },
];

export const R3MI_TEXT_ALIGNMENT = [
  {
    label: __("Left", R3MI_ADVANCED_BLOCKS),
    value: "left",
  },
  { label: __("Center", R3MI_ADVANCED_BLOCKS), value: "center" },
  { label: __("Right", R3MI_ADVANCED_BLOCKS), value: "right" },
];
