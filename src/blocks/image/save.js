import { ExpandIcon } from "@components/ui-icons";
import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
  const {
    imageUrl,
    imageAlt,
    showCaptions,
    imageCaption,
    lightbox,
    imageSize,
  } = attributes;

  if (!imageUrl) {
    return null;
  }

  return (
    <div
      {...useBlockProps.save({
        className: "r3mi-gallery-image",
        style: {
          "--image-aspect-ratio": imageSize || "auto",
        },
      })}
    >
      <figure>
        <img
          src={imageUrl}
          alt={imageAlt || ""}
          data-full-url={imageUrl}
          loading="lazy"
          decoding="async"
        />
        {showCaptions && imageCaption && (
          <figcaption>
            <span>{imageCaption}</span>
          </figcaption>
        )}
        {lightbox && <span className="image-expand">{ExpandIcon}</span>}
      </figure>
    </div>
  );
}
