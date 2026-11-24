import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
  const {
    columns,
    gap,
    corners,
    imageSize,
    captionType,
    captionVisibility,
    captionAlignment,
    hoverEffect,
    lightbox,
    lightboxThumbnail,
    lightboxImageMode,
  } = attributes;

  return (
    <div
      {...useBlockProps.save({
        className: "r3mi-masonry-gallery",
        style: {
          "--masonry-gap": `${gap}px`,
          "--masonry-columns": columns,
          "--masonry-image-corners": `${corners}px`,
          "--masonry-aspect-ratio": imageSize,
          //"--masonry-caption-type": captionType,
          //"--masonry-caption-visibilty": captionVisibility,
          "--masonry-caption-alignment": captionAlignment,
        },
        "data-caption-type": captionType,
        "data-caption-visibilty": captionVisibility,
        "data-caption-alignment": captionAlignment,
        "data-hover-effect": hoverEffect ? "on" : "off",
        "data-lightbox-mode": lightbox ? "on" : "off",
        "data-lightbox-thumbnail": lightboxThumbnail ? "on" : "off",
        "data-lightbox-image-mode": lightboxImageMode || "slide",
      })}
    >
      <div className="r3mi-masonry-gallery-item">
        <InnerBlocks.Content />
      </div>
    </div>
  );
}
