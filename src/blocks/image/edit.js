import { BLOCK_TITLE } from "@blocks/image";
import { ImageIcon, ScreenIcon } from "@components/ui-icons";
import { R3MI_ADVANCED_BLOCKS, R3MI_IMAGE_RESOLUTION } from "@utils/const";
import {
  BlockControls,
  InspectorControls,
  MediaPlaceholder,
  MediaUpload,
  MediaUploadCheck,
  useBlockProps,
} from "@wordpress/block-editor";
import {
  PanelBody,
  SelectControl,
  TextControl,
  ToolbarButton,
  ToolbarDropdownMenu,
  ToolbarGroup,
} from "@wordpress/components";
import { useEffect } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

export default function Edit({
  attributes,
  context,
  setAttributes,
  isSelected,
}) {
  const contextGalleryType = context["context/galleryType"] ?? "";
  const contextShowCaptions = context["context/showCaptions"] ?? false;
  const contextLightbox = context["context/lightbox"] ?? false;

  const R3MI_IMAGE_RESOLUTION_OPTION = [
    { label: __("Original", R3MI_ADVANCED_BLOCKS), value: "auto" },
    ...R3MI_IMAGE_RESOLUTION,
  ];

  const { imageId, imageUrl, imageAlt, imageCaption, showCaptions, imageSize } =
    attributes;

  const blockProps = useBlockProps({
    className: "r3mi-gallery-image",
    style: {
      "--image-aspect-ratio": imageSize || "auto",
    },
  });

  const handleMediaOnSelect = (media) => {
    setAttributes({
      imageId: media.id,
      imageUrl: media.url,
      imageAlt: media.alt || "",
      imageCaption: media.caption || media.title || "",
      imageSize: imageSize || "auto",
      showCaptions: contextShowCaptions,
      lightbox: contextLightbox,
    });
  };

  useEffect(() => {
    if (attributes.showCaptions !== contextShowCaptions) {
      setAttributes({ showCaptions: contextShowCaptions });
    }
  }, [contextShowCaptions, attributes.showCaptions]);

  useEffect(() => {
    if (attributes.lightbox !== contextLightbox) {
      setAttributes({ lightbox: contextLightbox });
    }
  }, [contextLightbox, attributes.showCaptions]);

  return (
    <>
      {imageUrl && (
        <BlockControls>
          <ToolbarGroup>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={handleMediaOnSelect}
                allowedTypes={["image"]}
                value={imageId}
                render={({ open }) => (
                  <ToolbarButton onClick={open}>
                    <span>{__("Replace", R3MI_ADVANCED_BLOCKS)}</span>
                  </ToolbarButton>
                )}
              />
            </MediaUploadCheck>
          </ToolbarGroup>
          {contextGalleryType === "masonry" && (
            <ToolbarGroup>
              <ToolbarDropdownMenu
                icon={ScreenIcon}
                text={__("Aspect Ratio", R3MI_ADVANCED_BLOCKS)}
                label={__("Aspect Ratio", R3MI_ADVANCED_BLOCKS)}
                controls={R3MI_IMAGE_RESOLUTION_OPTION.map((option) => ({
                  title: option.label,
                  isActive: String(imageSize) === String(option.value),
                  onClick: () => setAttributes({ imageSize: option.value }),
                }))}
              />
            </ToolbarGroup>
          )}
        </BlockControls>
      )}

      <InspectorControls>
        <PanelBody title={__("Settings", R3MI_ADVANCED_BLOCKS)}>
          {contextGalleryType === "masonry" && (
            <SelectControl
              label={__("Aspect Ratio", R3MI_ADVANCED_BLOCKS)}
              value={imageSize}
              options={R3MI_IMAGE_RESOLUTION_OPTION}
              onChange={(value) => setAttributes({ imageSize: value })}
            />
          )}

          <TextControl
            label={__("Caption text", R3MI_ADVANCED_BLOCKS)}
            value={imageCaption}
            onChange={(value) => setAttributes({ imageCaption: value })}
            help={__(
              "Captions shown on each gallery image.",
              R3MI_ADVANCED_BLOCKS,
            )}
          />

          <TextControl
            label={__("Alternative text", R3MI_ADVANCED_BLOCKS)}
            value={imageAlt}
            onChange={(value) => setAttributes({ imageAlt: value })}
            help={__(
              "Describe the image for accessibility.",
              R3MI_ADVANCED_BLOCKS,
            )}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        {imageUrl ? (
          <figure>
            <img src={imageUrl} alt={imageAlt} />
            {showCaptions && imageCaption && (
              <figcaption>
                <span>{imageCaption}</span>
              </figcaption>
            )}
          </figure>
        ) : isSelected ? (
          <div className="media-upload-placeholder">
            <MediaPlaceholder
              icon={ImageIcon}
              labels={{
                title: __(BLOCK_TITLE, R3MI_ADVANCED_BLOCKS),
                instructions: __(
                  "Select or upload multiple images to build your gallery.",
                  R3MI_ADVANCED_BLOCKS,
                ),
              }}
              allowedTypes={["image"]}
              accept="image/*"
              multiple={false}
              gallery={true}
              onSelect={handleMediaOnSelect}
              onFilesPreUpload={(files) => {
                //console.log("Files selected for upload:", files);
              }}
              onError={(error) => console.error("Media upload error:", error)}
            />
          </div>
        ) : (
          <div className="media-image-empty"></div>
        )}
      </div>
    </>
  );
}
