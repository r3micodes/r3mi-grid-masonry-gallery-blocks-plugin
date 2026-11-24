import { BLOCK_TITLE } from "@blocks/grid-gallery";
import InputFileUpload from "@components/input-fileupload";
import { RangeControlWidget } from "@components/ui-components";
import {
  AddImageIcon,
  ExpandIcon,
  GridGalleryIcon,
} from "@components/ui-icons";
import {
  R3MI_ADVANCED_BLOCKS,
  R3MI_GALLERY_CAPTION_TYPE,
  R3MI_GALLERY_CAPTION_VISIBILTY,
  R3MI_IMAGE_RESOLUTION,
  R3MI_TEXT_ALIGNMENT
} from "@utils/const";
import {
  BlockControls,
  InnerBlocks,
  InspectorControls,
  MediaPlaceholder,
  MediaUpload,
  MediaUploadCheck,
  useBlockProps,
} from "@wordpress/block-editor";
import { createBlock } from "@wordpress/blocks";
import {
  PanelBody,
  SelectControl,
  ToggleControl,
  __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption,
  ToolbarDropdownMenu,
  ToolbarGroup
} from "@wordpress/components";
import { useDispatch, useSelect } from "@wordpress/data";
import { useEffect, useRef, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

export default function Edit({ attributes, setAttributes, clientId }) {
  const {
    columns = 3,
    gap = 12,
    corners = 0,
    imageSize = "1 / 1",
    lightbox = false,
    lightboxThumbnail = false,
    lightboxImageMode = "slide",
    showCaptions = false,
    hoverEffect = false,
    lazyLoading = false,
    captionType = "below-image",
    captionVisibility = "always-visible",
    captionAlignment = "center",
  } = attributes;

  const inputUploadFileId = "remi-input-file";
  const imageRef = useRef([]);
  const { insertBlocks } = useDispatch("core/block-editor");
  const { replaceInnerBlocks } = useDispatch("core/block-editor");
  const [images, setImages] = useState([]);

  const innerBlockCount = useSelect(
    (select) => select("core/block-editor").getBlockCount(clientId),
    [clientId],
  );

  const innerBlocks = useSelect(
    (select) => select("core/block-editor").getBlocks(clientId),
    [clientId],
  );

  // Automatically get current image IDs
  const currentImages = innerBlocks
    .filter((block) => block.name === "r3mi/image")
    .map((block) => block.attributes.imageId)
    .filter(Boolean);

  const previousImages = useRef(currentImages);

  const initImages = () => {
    const currentImagesAttr = [];
    innerBlocks.forEach((element) => {
      currentImagesAttr.push({
        id: element.attributes.imageId,
        url: element.attributes.imageUrl,
        alt: element.attributes.imageAlt,
        title: element.attributes.imageCaption || "",
        showCaptions: element.attributes.imageCaption || false,
        lightbox: element.attributes.lightbox || false,
      });
    });

    imageRef.current = currentImagesAttr;
  };

  const handleMediaOnSelect = (
    selectedImages,
    position = innerBlockCount,
    mode = "add",
  ) => {
    const images = Array.isArray(selectedImages)
      ? selectedImages
      : [selectedImages];

    const newImages = images.filter(
      (image) =>
        image?.id &&
        !imageRef.current.some((existing) => existing.id === image.id),
    );

    if (!newImages.length) return;

    imageRef.current = [...imageRef.current, ...newImages];
    setImages(imageRef.current.map((item) => item.id));

    const blocks = imageRef.current.map((image) =>
      createBlock("r3mi/image", {
        imageId: image.id,
        imageUrl: image.url,
        imageAlt: image.alt || "",
        imageCaption: image.caption || image.title || "",
        showCaptions: image.imageCaption || showCaptions,
        lightbox: image.lightbox || lightbox,
        //showCaptions: showCaptions,
        //lightbox: lightbox,
      }),
    );

    replaceInnerBlocks(clientId, blocks, false);
  };

  const uploadCallBack = (media) => {
    handleMediaOnSelect(media, innerBlockCount, "replace");
  };

  useEffect(() => {
    const previousIds = previousImages.current;
    const currentIds = currentImages;

    // Detect deleted images only
    const deletedImages = previousIds.filter((id) => !currentIds.includes(id));

    if (deletedImages.length > 0) {
      //console.log("Deleted image IDs:", deletedImages);
      setImages(currentIds);
      initImages();
    }
    setImages(currentIds);
    previousImages.current = currentIds;
  }, [currentImages.join(",")]);

  useEffect(() => {
    initImages();
  }, []);

  const blockProps = useBlockProps({
    className: "r3mi-grid-gallery",
    style: {
      "--grid-gap": `${gap}px`,
      "--grid-columns": columns,
      "--grid-image-corners": `${corners}px`,
      "--grid-aspect-ratio": imageSize,
      //"--grid-caption-type": captionType,
      //"--grid-caption-visibilty": captionVisibility,
      "--grid-caption-alignment": captionAlignment,
    },
    "data-caption-type": captionType,
    "data-caption-visibilty": captionVisibility,
    "data-caption-alignment": captionAlignment,
    "data-hover-effect": hoverEffect ? "on" : "off",
    //"data-lightbox-mode": lightbox ? "on" : "off",
    //"data-lightbox-thumbnail": lightboxThumbnail ? "on" : "off",
  });

  return (
    <>
      <BlockControls>
        {innerBlockCount > 0 && (
          <ToolbarGroup>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={(media) => {
                  handleMediaOnSelect(media, innerBlockCount, "replace");
                }}
                allowedTypes={["image"]}
                multiple
                gallery
                value={images}
                render={({ open }) => (
                  <ToolbarDropdownMenu
                    icon={AddImageIcon}
                    label={__("Add Images", R3MI_ADVANCED_BLOCKS)}
                    text={__("Add Images", R3MI_ADVANCED_BLOCKS)}
                    controls={[
                      {
                        title: __("Upload", R3MI_ADVANCED_BLOCKS),
                        // icon: "upload",
                        onClick: () => {
                          document
                            .querySelector(`#${inputUploadFileId}`)
                            ?.click();
                        },
                      },
                      {
                        title: __("Media Library", R3MI_ADVANCED_BLOCKS),
                        // icon: "images-alt",
                        onClick: open,
                      },
                    ]}
                  />
                )}
              />
              <InputFileUpload callback={uploadCallBack} />
            </MediaUploadCheck>
          </ToolbarGroup>
        )}
      </BlockControls>

      <InspectorControls>
        <PanelBody
          title={__("Gallery Settings", R3MI_ADVANCED_BLOCKS)}
          initialOpen={true}
        >
          <div className="r3mi-panel-content">
            <SelectControl
              label={__("Aspect Ratio", R3MI_ADVANCED_BLOCKS)}
              value={imageSize}
              options={R3MI_IMAGE_RESOLUTION}
              onChange={(value) => setAttributes({ imageSize: value })}
            />

            <ToggleGroupControl
              label={__("COLUMNS (Desktop)", R3MI_ADVANCED_BLOCKS)}
              value={String(columns)}
              onChange={(value) => setAttributes({ columns: Number(value) })}
              isBlock
              help={__(
                "Columns for desktop screens (>1024px)",
                R3MI_ADVANCED_BLOCKS,
              )}
            >
              {Array.from({ length: 5 }, (_, index) => index + 2).map(
                (value) => (
                  <ToggleGroupControlOption
                    key={value}
                    value={String(value)}
                    label={String(value)}
                  />
                ),
              )}
            </ToggleGroupControl>

            <RangeControlWidget
              label="IMAGE GAP"
              value={gap}
              onChange={(value) => setAttributes({ gap: value })}
              icon={GridGalleryIcon}
              max={50}
            />

            <RangeControlWidget
              label="IMAGE RADIUS"
              value={corners}
              onChange={(value) => setAttributes({ corners: value })}
              icon={ExpandIcon}
            />

            <ToggleControl
              label={__("Enable Hover Effect", R3MI_ADVANCED_BLOCKS)}
              checked={hoverEffect}
              onChange={(value) => setAttributes({ hoverEffect: value })}
            />
          </div>
        </PanelBody>

        <PanelBody
          title={__("Caption Settings", R3MI_ADVANCED_BLOCKS)}
          initialOpen={false}
        >
          <div className="r3mi-panel-content">
            <ToggleControl
              label={__("Show Captions", R3MI_ADVANCED_BLOCKS)}
              checked={showCaptions}
              onChange={(value) => setAttributes({ showCaptions: value })}
              help={__(
                "Enable captions for all images in the gallery.",
                R3MI_ADVANCED_BLOCKS,
              )}
            />

            <SelectControl
              label={__("CAPTION TYPE", R3MI_ADVANCED_BLOCKS)}
              value={captionType}
              options={R3MI_GALLERY_CAPTION_TYPE}
              onChange={(value) => setAttributes({ captionType: value })}
              help={__(
                "Apply caption type to all images in the gallery",
                R3MI_ADVANCED_BLOCKS,
              )}
            />

            <SelectControl
              label={__("CAPTION VISIBILITY", R3MI_ADVANCED_BLOCKS)}
              value={captionVisibility}
              options={R3MI_GALLERY_CAPTION_VISIBILTY}
              onChange={(value) => setAttributes({ captionVisibility: value })}
              help={__(
                "Apply caption visibility to all images in the gallery",
                R3MI_ADVANCED_BLOCKS,
              )}
            />

            <ToggleGroupControl
              label={__("Caption Alignment", R3MI_ADVANCED_BLOCKS)}
              value={captionAlignment}
              onChange={(value) => setAttributes({ captionAlignment: value })}
              isBlock
            >
              {R3MI_TEXT_ALIGNMENT.map((element) => (
                <ToggleGroupControlOption
                  label={element.label}
                  value={element.value}
                />
              ))}
            </ToggleGroupControl>
          </div>
        </PanelBody>

        <PanelBody
          title={__("Ligthbox", R3MI_ADVANCED_BLOCKS)}
          initialOpen={false}
        >
          <div className="r3mi-panel-content">
            <ToggleControl
              label={__("Enable Lightbox", R3MI_ADVANCED_BLOCKS)}
              checked={lightbox}
              onChange={(value) => setAttributes({ lightbox: value })}
            />
          </div>
        </PanelBody>

        {/* <NoticeUpgrade /> */}
      </InspectorControls>

      <div {...blockProps}>
        <div className="r3mi-gallery-grid-editor">
          {parseInt(innerBlockCount, 0) === 0 && (
            <MediaPlaceholder
              icon={GridGalleryIcon}
              labels={{
                title: __(BLOCK_TITLE, R3MI_ADVANCED_BLOCKS),
                instructions: __(
                  "Select or upload multiple images to build your gallery.",
                  R3MI_ADVANCED_BLOCKS,
                ),
              }}
              allowedTypes={["image"]}
              accept="image/*"
              multiple="add"
              gallery={true}
              onSelect={handleMediaOnSelect}
              onFilesPreUpload={(files) => {
                //console.log("Files selected for upload:", files);
              }}
              onError={(error) => console.error("Media upload error:", error)}
            />
          )}

          <div
            style={{
              display: parseInt(innerBlockCount, 0) === 0 ? "none" : "block",
            }}
          >
            <InnerBlocks
              allowedBlocks={["r3mi/image"]}
              orientation="horizontal"
              templateLock={false}
              renderAppender={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}
