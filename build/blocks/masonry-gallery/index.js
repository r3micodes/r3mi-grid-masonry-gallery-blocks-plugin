/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/masonry-gallery/edit.js"
/*!********************************************!*\
  !*** ./src/blocks/masonry-gallery/edit.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./src/blocks/masonry-gallery/index.js");
/* harmony import */ var _components_input_fileupload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/input-fileupload */ "./src/components/input-fileupload.js");
/* harmony import */ var _components_ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ui-components */ "./src/components/ui-components.js");
/* harmony import */ var _components_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ui-icons */ "./src/components/ui-icons.js");
/* harmony import */ var _utils_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/const */ "./src/utils/const.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);












function Edit({
  attributes,
  setAttributes,
  clientId
}) {
  const {
    columns = 3,
    gap = 12,
    corners = 0,
    lightbox = false,
    lightboxThumbnail = false,
    lightboxImageMode = "slide",
    showCaptions = false,
    hoverEffect = false,
    lazyLoading = false,
    captionType = "below-image",
    captionVisibility = "always-visible",
    captionAlignment = "center"
  } = attributes;
  const inputUploadFileId = "remi-input-file";
  const imageRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_9__.useRef)([]);
  const {
    insertBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_8__.useDispatch)("core/block-editor");
  const {
    replaceInnerBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_8__.useDispatch)("core/block-editor");
  const [images, setImages] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_9__.useState)([]);
  const innerBlockCount = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_8__.useSelect)(select => select("core/block-editor").getBlockCount(clientId), [clientId]);
  const innerBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_8__.useSelect)(select => select("core/block-editor").getBlocks(clientId), [clientId]);
  const innerBlocksUpdated = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_8__.useSelect)(select => {
    const blocks = select("core/block-editor").getBlocks(clientId);
    const currentImagesAttr = [];
    blocks.forEach(element => {
      currentImagesAttr.push({
        id: element.attributes.imageId,
        url: element.attributes.imageUrl,
        alt: element.attributes.imageAlt,
        title: element.attributes.imageCaption || "",
        imageSize: element.attributes.imageSize || "auto",
        showCaptions: element.attributes.imageCaption || false,
        lightbox: element.attributes.lightbox || false
      });
    });
    imageRef.current = currentImagesAttr;
  }, [clientId]);

  // Automatically get current image IDs
  const currentImages = innerBlocks.filter(block => block.name === "r3mi/image").map(block => block.attributes.imageId).filter(Boolean);
  const previousImages = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_9__.useRef)(currentImages);
  const handleMediaOnSelect = (selectedImages, position = innerBlockCount, mode = "add") => {
    const images = Array.isArray(selectedImages) ? selectedImages : [selectedImages];
    const newImages = images.filter(image => image?.id && !imageRef.current.some(existing => existing.id === image.id));
    if (!newImages.length) return;

    //Your current code already appends without rearranging existing items:
    imageRef.current = [...imageRef.current, ...newImages];
    setImages(imageRef.current.map(item => item.id));
    const blocks = imageRef.current.map(image => (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__.createBlock)("r3mi/image", {
      imageId: image.id,
      imageUrl: image.url,
      imageAlt: image.alt || "",
      imageCaption: image.caption || image.title || "",
      imageSize: image.imageSize || "auto",
      showCaptions: image.showCaptions || showCaptions,
      lightbox: image.lightbox || lightbox
    }));
    replaceInnerBlocks(clientId, blocks, false);
  };
  const uploadCallBack = media => {
    handleMediaOnSelect(media, innerBlockCount, "replace");
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_9__.useEffect)(() => {
    const previousIds = previousImages.current;
    const currentIds = currentImages;

    // Detect deleted images only
    const deletedImages = previousIds.filter(id => !currentIds.includes(id));
    if (deletedImages.length > 0) {
      //console.log("Deleted image IDs:", deletedImages);
      setImages(currentIds);
      //initImages();
    }
    setImages(currentIds);
    previousImages.current = currentIds;
  }, [currentImages.join(",")]);

  /* useEffect(() => {
    initImages();
  }, []); */

  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)({
    className: "r3mi-masonry-gallery",
    style: {
      "--masonry-gap": `${gap}px`,
      "--masonry-columns": columns,
      "--masonry-image-corners": `${corners}px`,
      //"--masonry-caption-type": captionType,
      //"--masonry-caption-visibilty": captionVisibility,
      "--masonry-caption-alignment": captionAlignment
    },
    "data-caption-type": captionType,
    "data-caption-visibilty": captionVisibility,
    "data-caption-alignment": captionAlignment,
    "data-hover-effect": hoverEffect ? "on" : "off",
    "data-inner-images-blocks": innerBlockCount
    //"data-lightbox-mode": lightbox ? "on" : "off",
    //"data-lightbox-thumbnail": lightboxThumbnail ? "on" : "off",
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.BlockControls, {
      children: innerBlockCount > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.ToolbarGroup, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.MediaUploadCheck, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.MediaUpload, {
            onSelect: media => {
              handleMediaOnSelect(media, innerBlockCount, "replace");
            },
            allowedTypes: ["image"],
            multiple: true,
            gallery: true,
            value: images,
            render: ({
              open
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.ToolbarDropdownMenu, {
              icon: _components_ui_icons__WEBPACK_IMPORTED_MODULE_3__.AddImageIcon,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)("Add Images", _utils_const__WEBPACK_IMPORTED_MODULE_4__.R3MI_ADVANCED_BLOCKS),
              text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)("Add Images", _utils_const__WEBPACK_IMPORTED_MODULE_4__.R3MI_ADVANCED_BLOCKS),
              controls: [{
                title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)("Upload", _utils_const__WEBPACK_IMPORTED_MODULE_4__.R3MI_ADVANCED_BLOCKS),
                onClick: () => {
                  document.querySelector(`#${inputUploadFileId}`)?.click();
                }
              }, {
                title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)("Media Library", _utils_const__WEBPACK_IMPORTED_MODULE_4__.R3MI_ADVANCED_BLOCKS),
                onClick: open
              }]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_input_fileupload__WEBPACK_IMPORTED_MODULE_1__["default"], {
            callback: uploadCallBack
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)("Gallery Settings", _utils_const__WEBPACK_IMPORTED_MODULE_4__.R3MI_ADVANCED_BLOCKS),
        initialOpen: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "r3mi-panel-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.__experimentalToggleGroupControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)("COLUMNS (Desktop)", _utils_const__WEBPACK_IMPORTED_MODULE_4__.R3MI_ADVANCED_BLOCKS),
            value: String(columns),
            onChange: value => setAttributes({
              columns: Number(value)
            }),
            isBlock: true,
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)("Columns for desktop screens (>1024px)", _utils_const__WEBPACK_IMPORTED_MODULE_4__.R3MI_ADVANCED_BLOCKS),
            children: Array.from({
              length: 5
            }, (_, index) => index + 2).map(value => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.__experimentalToggleGroupControlOption, {
              value: String(value),
              label: String(value)
            }, value))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_ui_components__WEBPACK_IMPORTED_MODULE_2__.RangeControlWidget, {
            label: "IMAGE GAP",
            value: gap,
            onChange: value => setAttributes({
              gap: value
            }),
            icon: _components_ui_icons__WEBPACK_IMPORTED_MODULE_3__.GridGalleryIcon,
            max: 50
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_ui_components__WEBPACK_IMPORTED_MODULE_2__.RangeControlWidget, {
            label: "IMAGE RADIUS",
            value: corners,
            onChange: value => setAttributes({
              corners: value
            }),
            icon: _components_ui_icons__WEBPACK_IMPORTED_MODULE_3__.ExpandIcon
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)("Enable Hover Effect", _utils_const__WEBPACK_IMPORTED_MODULE_4__.R3MI_ADVANCED_BLOCKS),
            checked: hoverEffect,
            onChange: value => setAttributes({
              hoverEffect: value
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)("Caption Settings", _utils_const__WEBPACK_IMPORTED_MODULE_4__.R3MI_ADVANCED_BLOCKS),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "r3mi-panel-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)("Show Captions", _utils_const__WEBPACK_IMPORTED_MODULE_4__.R3MI_ADVANCED_BLOCKS),
            checked: showCaptions,
            onChange: value => setAttributes({
              showCaptions: value
            }),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)("Enable captions for all images in the gallery.", _utils_const__WEBPACK_IMPORTED_MODULE_4__.R3MI_ADVANCED_BLOCKS)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)("CAPTION TYPE", _utils_const__WEBPACK_IMPORTED_MODULE_4__.R3MI_ADVANCED_BLOCKS),
            value: captionType,
            options: _utils_const__WEBPACK_IMPORTED_MODULE_4__.R3MI_GALLERY_CAPTION_TYPE,
            onChange: value => setAttributes({
              captionType: value
            }),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)("Apply caption type to all images in the gallery", _utils_const__WEBPACK_IMPORTED_MODULE_4__.R3MI_ADVANCED_BLOCKS)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)("CAPTION VISIBILITY", _utils_const__WEBPACK_IMPORTED_MODULE_4__.R3MI_ADVANCED_BLOCKS),
            value: captionVisibility,
            options: _utils_const__WEBPACK_IMPORTED_MODULE_4__.R3MI_GALLERY_CAPTION_VISIBILTY,
            onChange: value => setAttributes({
              captionVisibility: value
            }),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)("Apply caption visibility to all images in the gallery", _utils_const__WEBPACK_IMPORTED_MODULE_4__.R3MI_ADVANCED_BLOCKS)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.__experimentalToggleGroupControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)("Caption Alignment", _utils_const__WEBPACK_IMPORTED_MODULE_4__.R3MI_ADVANCED_BLOCKS),
            value: captionAlignment,
            onChange: value => setAttributes({
              captionAlignment: value
            }),
            isBlock: true,
            children: _utils_const__WEBPACK_IMPORTED_MODULE_4__.R3MI_TEXT_ALIGNMENT.map(element => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.__experimentalToggleGroupControlOption, {
              label: element.label,
              value: element.value
            }))
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)("Ligthbox", _utils_const__WEBPACK_IMPORTED_MODULE_4__.R3MI_ADVANCED_BLOCKS),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: "r3mi-panel-content",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)("Enable Lightbox", _utils_const__WEBPACK_IMPORTED_MODULE_4__.R3MI_ADVANCED_BLOCKS),
            checked: lightbox,
            onChange: value => setAttributes({
              lightbox: value
            })
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "r3mi-gallery-masonry-editor",
        children: [parseInt(innerBlockCount, 0) === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.MediaPlaceholder, {
          icon: _components_ui_icons__WEBPACK_IMPORTED_MODULE_3__.WidgetIcon,
          labels: {
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)(___WEBPACK_IMPORTED_MODULE_0__.BLOCK_TITLE, _utils_const__WEBPACK_IMPORTED_MODULE_4__.R3MI_ADVANCED_BLOCKS),
            instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)("Select or upload multiple images to build your gallery.", _utils_const__WEBPACK_IMPORTED_MODULE_4__.R3MI_ADVANCED_BLOCKS)
          },
          allowedTypes: ["image"],
          accept: "image/*",
          multiple: "add",
          gallery: true,
          onSelect: handleMediaOnSelect,
          onFilesPreUpload: files => {
            //console.log("Files selected for upload:", files);
          },
          onError: error => console.error("Media upload error:", error)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          style: {
            display: parseInt(innerBlockCount, 0) === 0 ? "none" : "block"
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks, {
            allowedBlocks: ["r3mi/image"],
            orientation: "horizontal",
            templateLock: false,
            renderAppender: false
          })
        })]
      })
    })]
  });
}

/***/ },

/***/ "./src/blocks/masonry-gallery/index.js"
/*!*********************************************!*\
  !*** ./src/blocks/masonry-gallery/index.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BLOCK_TITLE: () => (/* binding */ BLOCK_TITLE)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/masonry-gallery/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/masonry-gallery/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/masonry-gallery/save.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/masonry-gallery/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/masonry-gallery/style.scss");
/* harmony import */ var _components_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ui-icons */ "./src/components/ui-icons.js");
// console.count("R3MI MASONRY GALLERY LOADED");
// console.log("Masonry Gallery:", import.meta.url);








const BLOCK_TITLE = "Masonry Gallery";
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_1__,
  icon: _components_ui_icons__WEBPACK_IMPORTED_MODULE_6__.WidgetIcon,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ },

/***/ "./src/blocks/masonry-gallery/save.js"
/*!********************************************!*\
  !*** ./src/blocks/masonry-gallery/save.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Save({
  attributes
}) {
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
    lightboxImageMode
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
      className: "r3mi-masonry-gallery",
      style: {
        "--masonry-gap": `${gap}px`,
        "--masonry-columns": columns,
        "--masonry-image-corners": `${corners}px`,
        "--masonry-aspect-ratio": imageSize,
        //"--masonry-caption-type": captionType,
        //"--masonry-caption-visibilty": captionVisibility,
        "--masonry-caption-alignment": captionAlignment
      },
      "data-caption-type": captionType,
      "data-caption-visibilty": captionVisibility,
      "data-caption-alignment": captionAlignment,
      "data-hover-effect": hoverEffect ? "on" : "off",
      "data-lightbox-mode": lightbox ? "on" : "off",
      "data-lightbox-thumbnail": lightboxThumbnail ? "on" : "off",
      "data-lightbox-image-mode": lightboxImageMode || "slide"
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "r3mi-masonry-gallery-item",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {})
    })
  });
}

/***/ },

/***/ "./src/components/input-fileupload.js"
/*!********************************************!*\
  !*** ./src/components/input-fileupload.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InputFileUpload)
/* harmony export */ });
/* harmony import */ var _utils_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/const */ "./src/utils/const.js");
/* harmony import */ var _utils_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/media */ "./src/utils/media.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function InputFileUpload({
  inputFileId,
  callback
}) {
  const {
    createSuccessNotice,
    createErrorNotice,
    removeNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_4__.store);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
      id: inputFileId ?? "remi-input-file",
      type: "file",
      accept: "image/*",
      multiple: true,
      className: "r3mi-input-file",
      style: {
        display: "none"
      },
      onChange: async event => {
        const files = Array.from(event.target.files || []);
        if (files.length) {
          createSuccessNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(_utils_const__WEBPACK_IMPORTED_MODULE_0__.R3MI_UPLOADING, _utils_const__WEBPACK_IMPORTED_MODULE_0__.R3MI_ADVANCED_BLOCKS), {
            id: "r3mi-uploading",
            type: "snackbar"
          });
          const data = await _utils_media__WEBPACK_IMPORTED_MODULE_1__["default"].multipleUpload(event.target.files);
          removeNotice("r3mi-uploading");
          if (data !== null) {
            callback(data);
            createSuccessNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(_utils_const__WEBPACK_IMPORTED_MODULE_0__.R3MI_IMAGES_UPLOADED_SUCCESS, _utils_const__WEBPACK_IMPORTED_MODULE_0__.R3MI_ADVANCED_BLOCKS), {
              type: "snackbar"
            });
          } else {
            createErrorNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(_utils_const__WEBPACK_IMPORTED_MODULE_0__.R3MI_IMAGES_UPLOADED_FAILED, _utils_const__WEBPACK_IMPORTED_MODULE_0__.R3MI_ADVANCED_BLOCKS), {
              type: "snackbar"
            });
          }
        }
        event.target.value = "";
      }
    })
  });
}

/***/ },

/***/ "./src/components/ui-components.js"
/*!*****************************************!*\
  !*** ./src/components/ui-components.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalWidget: () => (/* binding */ ModalWidget),
/* harmony export */   RangeControlWidget: () => (/* binding */ RangeControlWidget)
/* harmony export */ });
/* harmony import */ var _utils_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/const */ "./src/utils/const.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const RangeControlWidget = ({
  label = "",
  value = "",
  icon = "",
  onChange = () => {},
  max = 25,
  min = 0
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    align: "flex-end",
    className: "r3mi-flex-spacing",
    gap: 2,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, {
      className: "r3mi-flex-control",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(label, _utils_const__WEBPACK_IMPORTED_MODULE_0__.R3MI_ADVANCED_BLOCKS),
        value: value,
        onChange: onChange,
        min: min,
        max: max
        //__nextHasNoMarginBottom
      })
    }), icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, {
      className: "r3mi-flex-icon",
      children: icon
    })]
  });
};
const ModalWidget = ({
  handleClose = () => {},
  isOpen = false
}) => {
  return isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    title: "Gallery Settings",
    size: "medium",
    onRequestClose: handleClose,
    children: "sadasdasd"
  });
};

/***/ },

/***/ "./src/components/ui-icons.js"
/*!************************************!*\
  !*** ./src/components/ui-icons.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddImageIcon: () => (/* binding */ AddImageIcon),
/* harmony export */   ExpandIcon: () => (/* binding */ ExpandIcon),
/* harmony export */   GalleryIcon: () => (/* binding */ GalleryIcon),
/* harmony export */   GridGalleryIcon: () => (/* binding */ GridGalleryIcon),
/* harmony export */   ImageIcon: () => (/* binding */ ImageIcon),
/* harmony export */   MediaLibraryIcon: () => (/* binding */ MediaLibraryIcon),
/* harmony export */   ScreenIcon: () => (/* binding */ ScreenIcon),
/* harmony export */   WidgetIcon: () => (/* binding */ WidgetIcon)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


// import { cloneElement } from "@wordpress/element";

// {cloneElement(AddImageIcon, {
//   width: 32,
//   height: 32,
// })}

const ImageIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Icon, {
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M11.9426 1.25H12.0574C14.3658 1.24999 16.1748 1.24998 17.5863 1.43975C19.031 1.63399 20.1711 2.03933 21.0659 2.93414C21.9607 3.82895 22.366 4.96897 22.5603 6.41371C22.75 7.82519 22.75 9.63423 22.75 11.9426V12.0574C22.75 14.3658 22.75 16.1748 22.5603 17.5863C22.366 19.031 21.9607 20.1711 21.0659 21.0659C20.1711 21.9607 19.031 22.366 17.5863 22.5603C16.1748 22.75 14.3658 22.75 12.0574 22.75H11.9426C9.63423 22.75 7.82519 22.75 6.41371 22.5603C4.96897 22.366 3.82895 21.9607 2.93414 21.0659C2.03933 20.1711 1.63399 19.031 1.43975 17.5863C1.24998 16.1748 1.24999 14.3658 1.25 12.0574V11.9426C1.24999 9.63423 1.24998 7.82519 1.43975 6.41371C1.63399 4.96897 2.03933 3.82895 2.93414 2.93414C3.82895 2.03933 4.96897 1.63399 6.41371 1.43975C7.82519 1.24998 9.63423 1.24999 11.9426 1.25ZM6.61358 2.92637C5.33517 3.09825 4.56445 3.42514 3.9948 3.9948C3.42514 4.56445 3.09825 5.33517 2.92637 6.61358C2.75159 7.91356 2.75 9.62178 2.75 12C2.75 14.3782 2.75159 16.0864 2.92637 17.3864C3.09825 18.6648 3.42514 19.4355 3.9948 20.0052C4.56445 20.5749 5.33517 20.9018 6.61358 21.0736C7.91356 21.2484 9.62178 21.25 12 21.25C14.3782 21.25 16.0864 21.2484 17.3864 21.0736C18.6648 20.9018 19.4355 20.5749 20.0052 20.0052C20.5749 19.4355 20.9018 18.6648 21.0736 17.3864C21.2484 16.0864 21.25 14.3782 21.25 12C21.25 9.62178 21.2484 7.91356 21.0736 6.61358C20.9018 5.33517 20.5749 4.56445 20.0052 3.9948C19.4355 3.42514 18.6648 3.09825 17.3864 2.92637C16.0864 2.75159 14.3782 2.75 12 2.75C9.62178 2.75 7.91356 2.75159 6.61358 2.92637ZM16 6.75C15.3096 6.75 14.75 7.30964 14.75 8C14.75 8.69036 15.3096 9.25 16 9.25C16.6904 9.25 17.25 8.69036 17.25 8C17.25 7.30964 16.6904 6.75 16 6.75ZM13.25 8C13.25 6.48122 14.4812 5.25 16 5.25C17.5188 5.25 18.75 6.48122 18.75 8C18.75 9.51878 17.5188 10.75 16 10.75C14.4812 10.75 13.25 9.51878 13.25 8ZM8.50397 13.1766C7.91991 12.5566 6.94501 12.5241 6.32092 13.1038L5.51041 13.8566C5.20691 14.1385 4.73236 14.1209 4.45047 13.8174C4.16858 13.5139 4.1861 13.0394 4.48959 12.7575L5.3001 12.0047C6.52816 10.8641 8.44651 10.9281 9.59579 12.1481L12.2433 14.9584C12.5202 15.2523 12.9735 15.2919 13.2972 15.0504C14.4971 14.1553 16.1679 14.257 17.2503 15.2911L19.5181 17.4577C19.8176 17.7438 19.8284 18.2186 19.5423 18.5181C19.2562 18.8176 18.7814 18.8284 18.4819 18.5423L16.2141 16.3757C15.661 15.8473 14.8073 15.7953 14.1941 16.2527C13.2596 16.9499 11.9509 16.8356 11.1515 15.9869L8.50397 13.1766Z"
    })
  })
});
const GalleryIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Icon, {
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M17.1413 2.3738C16.217 2.24997 15.0402 2.24998 13.5732 2.25H10.2518C8.7848 2.24998 7.60801 2.24997 6.68371 2.3738C5.72656 2.50204 4.92853 2.77526 4.29558 3.406C3.63535 4.06393 3.36504 4.90117 3.2432 5.91009L3.23724 5.95944L3.23963 6.1548C3.02743 6.29351 2.82808 6.4544 2.64124 6.64124C1.89288 7.38961 1.56076 8.33856 1.40314 9.51098C1.24997 10.6502 1.24998 12.1058 1.25 13.9436V14.0564L1.25007 14.4892C1.25106 16.1137 1.26287 17.4457 1.40314 18.489C1.56076 19.6614 1.89288 20.6104 2.64124 21.3588C3.38961 22.1071 4.33856 22.4392 5.51098 22.5969C6.65019 22.75 8.10583 22.75 9.94359 22.75H14.0564C15.8942 22.75 17.3498 22.75 18.489 22.5969C19.6614 22.4392 20.6104 22.1071 21.3588 21.3588C22.1071 20.6104 22.4392 19.6614 22.5969 18.489C22.75 17.3498 22.75 15.8942 22.75 14.0564V13.9436C22.75 12.1058 22.75 10.6502 22.5969 9.51098C22.4392 8.33856 22.1071 7.38961 21.3588 6.64124C21.1219 6.4044 20.865 6.20924 20.5872 6.04812V5.95488L20.5818 5.91009C20.46 4.90117 20.1897 4.06393 19.5294 3.406C18.8965 2.77526 18.0985 2.50204 17.1413 2.3738ZM2.7506 14.8399C2.75371 16.315 2.7728 17.4192 2.88976 18.2892C3.02502 19.2952 3.27869 19.8749 3.7019 20.2981C4.12511 20.7213 4.70476 20.975 5.71085 21.1102C6.73851 21.2484 8.09318 21.25 10 21.25H14C15.9068 21.25 17.2615 21.2484 18.2892 21.1102C19.0532 21.0075 19.5714 20.8365 19.9618 20.5748L17.2747 18.1564C16.4951 17.4547 15.334 17.3849 14.4758 17.988L14.1776 18.1975C13.0843 18.9659 11.5968 18.8371 10.6519 17.8922L6.36216 13.6024C5.78515 13.0254 4.85958 12.9946 4.24546 13.5319L2.7506 14.8399ZM18.2782 17.0415L20.8664 19.3709C20.9722 19.0747 21.0521 18.7213 21.1102 18.2892C21.2484 17.2615 21.25 15.9068 21.25 14C21.25 12.0932 21.2484 10.7385 21.1102 9.71085C20.975 8.70476 20.7213 8.12511 20.2981 7.7019C19.8749 7.27869 19.2952 7.02502 18.2892 6.88976C17.2615 6.75159 15.9068 6.75 14 6.75H10C8.09318 6.75 6.73851 6.75159 5.71085 6.88976C4.70476 7.02502 4.12511 7.27869 3.7019 7.7019C3.27869 8.12511 3.02502 8.70476 2.88976 9.71085C2.78126 10.5179 2.75698 11.5266 2.75156 12.846L3.25771 12.4031C4.46613 11.3457 6.28741 11.4064 7.42282 12.5418L11.7125 16.8315C12.1421 17.261 12.8182 17.3196 13.3152 16.9703L13.6134 16.7607C15.0437 15.7555 16.9788 15.872 18.2782 17.0415ZM5.35438 4.46852C5.11442 4.70764 4.94241 5.02039 4.82795 5.52195C5.04664 5.4739 5.27425 5.43496 5.51098 5.40314C6.65019 5.24997 8.10582 5.24998 9.94358 5.25H14.0564C15.8942 5.24998 17.3498 5.24997 18.489 5.40314C18.6602 5.42614 18.8265 5.45287 18.9882 5.48407C18.8738 5.00454 18.7045 4.70156 18.4706 4.46852C18.163 4.162 17.7339 3.9666 16.9421 3.86052C16.129 3.75158 15.053 3.75 13.5181 3.75H10.3069C8.77197 3.75 7.69597 3.75158 6.88289 3.86052C6.09112 3.9666 5.66198 4.162 5.35438 4.46852Z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M17.5 8.25C16.2574 8.25 15.25 9.25736 15.25 10.5C15.25 11.7426 16.2574 12.75 17.5 12.75C18.7426 12.75 19.75 11.7426 19.75 10.5C19.75 9.25736 18.7426 8.25 17.5 8.25ZM17.5 9.75C17.0858 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 17.0858 11.25 17.5 11.25C17.9142 11.25 18.25 10.9142 18.25 10.5C18.25 10.0858 17.9142 9.75 17.5 9.75Z"
    })]
  })
});
const GridGalleryIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Icon, {
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M6.448 1.75C5.54954 1.74997 4.8003 1.74995 4.20552 1.82991C3.57773 1.91432 3.01093 2.09999 2.55546 2.55546C2.09999 3.01093 1.91432 3.57773 1.82991 4.20552C1.74995 4.8003 1.74997 5.54951 1.75 6.44798V6.552C1.74997 7.45047 1.74995 8.19971 1.82991 8.79448C1.91432 9.42228 2.09999 9.98908 2.55546 10.4445C3.01093 10.9 3.57773 11.0857 4.20552 11.1701C4.8003 11.2501 5.54951 11.25 6.44798 11.25H6.552C7.45047 11.25 8.19971 11.2501 8.79448 11.1701C9.42228 11.0857 9.98908 10.9 10.4445 10.4445C10.9 9.98908 11.0857 9.42228 11.1701 8.79448C11.2501 8.19971 11.25 7.4505 11.25 6.55203V6.44801C11.25 5.54954 11.2501 4.8003 11.1701 4.20552C11.0857 3.57773 10.9 3.01093 10.4445 2.55546C9.98908 2.09999 9.42228 1.91432 8.79448 1.82991C8.19971 1.74995 7.4505 1.74997 6.55203 1.75H6.448ZM3.61612 3.61612C3.74644 3.4858 3.94393 3.37858 4.4054 3.31654C4.88843 3.2516 5.53599 3.25 6.5 3.25C7.46401 3.25 8.11157 3.2516 8.59461 3.31654C9.05607 3.37858 9.25357 3.4858 9.38389 3.61612C9.5142 3.74644 9.62143 3.94393 9.68347 4.4054C9.74841 4.88843 9.75 5.53599 9.75 6.5C9.75 7.46401 9.74841 8.11157 9.68347 8.59461C9.62143 9.05607 9.5142 9.25357 9.38389 9.38389C9.25357 9.5142 9.05607 9.62143 8.59461 9.68347C8.11157 9.74841 7.46401 9.75 6.5 9.75C5.53599 9.75 4.88843 9.74841 4.4054 9.68347C3.94393 9.62143 3.74644 9.5142 3.61612 9.38389C3.4858 9.25357 3.37858 9.05607 3.31654 8.59461C3.2516 8.11157 3.25 7.46401 3.25 6.5C3.25 5.53599 3.2516 4.88843 3.31654 4.4054C3.37858 3.94393 3.4858 3.74644 3.61612 3.61612Z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M17.448 12.75C16.5495 12.75 15.8003 12.7499 15.2055 12.8299C14.5777 12.9143 14.0109 13.1 13.5555 13.5555C13.1 14.0109 12.9143 14.5777 12.8299 15.2055C12.7499 15.8003 12.75 16.5495 12.75 17.448V17.552C12.75 18.4505 12.7499 19.1997 12.8299 19.7945C12.9143 20.4223 13.1 20.9891 13.5555 21.4445C14.0109 21.9 14.5777 22.0857 15.2055 22.1701C15.8003 22.2501 16.5495 22.25 17.4479 22.25H17.552C18.4504 22.25 19.1997 22.2501 19.7945 22.1701C20.4223 22.0857 20.9891 21.9 21.4445 21.4445C21.9 20.9891 22.0857 20.4223 22.1701 19.7945C22.2501 19.1997 22.25 18.4505 22.25 17.5521V17.448C22.25 16.5496 22.2501 15.8003 22.1701 15.2055C22.0857 14.5777 21.9 14.0109 21.4445 13.5555C20.9891 13.1 20.4223 12.9143 19.7945 12.8299C19.1997 12.7499 18.4505 12.75 17.552 12.75H17.448ZM14.6161 14.6161C14.7464 14.4858 14.9439 14.3786 15.4054 14.3165C15.8884 14.2516 16.536 14.25 17.5 14.25C18.464 14.25 19.1116 14.2516 19.5946 14.3165C20.0561 14.3786 20.2536 14.4858 20.3839 14.6161C20.5142 14.7464 20.6214 14.9439 20.6835 15.4054C20.7484 15.8884 20.75 16.536 20.75 17.5C20.75 18.464 20.7484 19.1116 20.6835 19.5946C20.6214 20.0561 20.5142 20.2536 20.3839 20.3839C20.2536 20.5142 20.0561 20.6214 19.5946 20.6835C19.1116 20.7484 18.464 20.75 17.5 20.75C16.536 20.75 15.8884 20.7484 15.4054 20.6835C14.9439 20.6214 14.7464 20.5142 14.6161 20.3839C14.4858 20.2536 14.3786 20.0561 14.3165 19.5946C14.2516 19.1116 14.25 18.464 14.25 17.5C14.25 16.536 14.2516 15.8884 14.3165 15.4054C14.3786 14.9439 14.4858 14.7464 14.6161 14.6161Z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M6.448 12.75H6.552C7.45048 12.75 8.1997 12.7499 8.79448 12.8299C9.42228 12.9143 9.98908 13.1 10.4445 13.5555C10.9 14.0109 11.0857 14.5777 11.1701 15.2055C11.2501 15.8003 11.25 16.5495 11.25 17.448V17.552C11.25 18.4505 11.2501 19.1997 11.1701 19.7945C11.0857 20.4223 10.9 20.9891 10.4445 21.4445C9.98908 21.9 9.42228 22.0857 8.79448 22.1701C8.19971 22.2501 7.45051 22.25 6.55206 22.25H6.44801C5.54955 22.25 4.80029 22.2501 4.20552 22.1701C3.57773 22.0857 3.01093 21.9 2.55546 21.4445C2.09999 20.9891 1.91432 20.4223 1.82991 19.7945C1.74995 19.1997 1.74997 18.4505 1.75 17.552V17.448C1.74997 16.5495 1.74995 15.8003 1.82991 15.2055C1.91432 14.5777 2.09999 14.0109 2.55546 13.5555C3.01093 13.1 3.57773 12.9143 4.20552 12.8299C4.8003 12.7499 5.54952 12.75 6.448 12.75ZM4.4054 14.3165C3.94393 14.3786 3.74644 14.4858 3.61612 14.6161C3.4858 14.7464 3.37858 14.9439 3.31654 15.4054C3.2516 15.8884 3.25 16.536 3.25 17.5C3.25 18.464 3.2516 19.1116 3.31654 19.5946C3.37858 20.0561 3.4858 20.2536 3.61612 20.3839C3.74644 20.5142 3.94393 20.6214 4.4054 20.6835C4.88843 20.7484 5.53599 20.75 6.5 20.75C7.46401 20.75 8.11157 20.7484 8.59461 20.6835C9.05607 20.6214 9.25357 20.5142 9.38389 20.3839C9.5142 20.2536 9.62143 20.0561 9.68347 19.5946C9.74841 19.1116 9.75 18.464 9.75 17.5C9.75 16.536 9.74841 15.8884 9.68347 15.4054C9.62143 14.9439 9.5142 14.7464 9.38389 14.6161C9.25357 14.4858 9.05607 14.3786 8.59461 14.3165C8.11157 14.2516 7.46401 14.25 6.5 14.25C5.53599 14.25 4.88843 14.2516 4.4054 14.3165Z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M17.448 1.75C16.5495 1.74997 15.8003 1.74995 15.2055 1.82991C14.5777 1.91432 14.0109 2.09999 13.5555 2.55546C13.1 3.01093 12.9143 3.57773 12.8299 4.20552C12.7499 4.8003 12.75 5.54952 12.75 6.448V6.552C12.75 7.45048 12.7499 8.1997 12.8299 8.79448C12.9143 9.42228 13.1 9.98908 13.5555 10.4445C14.0109 10.9 14.5777 11.0857 15.2055 11.1701C15.8003 11.2501 16.5495 11.25 17.448 11.25H17.552C18.4505 11.25 19.1997 11.2501 19.7945 11.1701C20.4223 11.0857 20.9891 10.9 21.4445 10.4445C21.9 9.98908 22.0857 9.42228 22.1701 8.79448C22.2501 8.19971 22.25 7.4505 22.25 6.55203V6.44801C22.25 5.54954 22.2501 4.8003 22.1701 4.20552C22.0857 3.57773 21.9 3.01093 21.4445 2.55546C20.9891 2.09999 20.4223 1.91432 19.7945 1.82991C19.1997 1.74995 18.4505 1.74997 17.552 1.75H17.448ZM14.6161 3.61612C14.7464 3.4858 14.9439 3.37858 15.4054 3.31654C15.8884 3.2516 16.536 3.25 17.5 3.25C18.464 3.25 19.1116 3.2516 19.5946 3.31654C20.0561 3.37858 20.2536 3.4858 20.3839 3.61612C20.5142 3.74644 20.6214 3.94393 20.6835 4.4054C20.7484 4.88843 20.75 5.53599 20.75 6.5C20.75 7.46401 20.7484 8.11157 20.6835 8.59461C20.6214 9.05607 20.5142 9.25357 20.3839 9.38389C20.2536 9.5142 20.0561 9.62143 19.5946 9.68347C19.1116 9.74841 18.464 9.75 17.5 9.75C16.536 9.75 15.8884 9.74841 15.4054 9.68347C14.9439 9.62143 14.7464 9.5142 14.6161 9.38389C14.4858 9.25357 14.3786 9.05607 14.3165 8.59461C14.2516 8.11157 14.25 7.46401 14.25 6.5C14.25 5.53599 14.2516 4.88843 14.3165 4.4054C14.3786 3.94393 14.4858 3.74644 14.6161 3.61612Z"
    })]
  })
});
const MediaLibraryIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Icon, {
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M8.25 18C8.25 17.5858 8.58579 17.25 9 17.25H15C15.4142 17.25 15.75 17.5858 15.75 18C15.75 18.4142 15.4142 18.75 15 18.75H9C8.58579 18.75 8.25 18.4142 8.25 18Z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M8.69935 1.25001H15.3004C15.5203 1.24995 15.6888 1.2499 15.8362 1.26571C17.1903 1.41104 18.2268 2.52307 18.2897 3.87013C19.4805 4.22571 20.3289 5.3275 20.3443 6.59118C20.9453 6.77151 21.4637 7.05595 21.888 7.51432C22.54 8.21857 22.7421 9.08649 22.7498 10.1003C22.7572 11.075 22.5835 12.3067 22.3678 13.8363L21.9288 16.9499C21.7602 18.146 21.6232 19.1176 21.4101 19.879C21.1871 20.6756 20.8585 21.331 20.25 21.8349C19.6463 22.3347 18.9301 22.5502 18.0835 22.6518C17.265 22.75 16.2353 22.75 14.9532 22.75H9.04687C7.76478 22.75 6.73501 22.75 5.91647 22.6518C5.06993 22.5502 4.35372 22.3347 3.75003 21.8349C3.14152 21.331 2.81286 20.6756 2.58989 19.879C2.37676 19.1176 2.23979 18.146 2.07118 16.9499L1.63219 13.8363C1.41651 12.3067 1.24283 11.075 1.25023 10.1003C1.25792 9.08649 1.45997 8.21857 2.11196 7.51432C2.53621 7.05606 3.05445 6.77164 3.65528 6.5913C3.67058 5.3275 4.51917 4.22559 5.71005 3.87007C5.77295 2.52304 6.80943 1.41104 8.16359 1.26571C8.31094 1.2499 8.4795 1.24995 8.69935 1.25001ZM5.18902 6.32785C6.11481 6.24999 7.24973 6.25 8.61594 6.25001H15.384C16.75 6.25 17.8848 6.24999 18.8105 6.32781C18.6734 5.72018 18.1306 5.25001 17.4617 5.25001H6.53787C5.86896 5.25001 5.32618 5.72019 5.18902 6.32785ZM15.6761 2.75715C16.2263 2.8162 16.6611 3.22633 16.7677 3.75001H7.2321C7.33862 3.22633 7.77344 2.8162 8.32365 2.75715C8.37993 2.75111 8.46013 2.75001 8.74099 2.75001H15.2588C15.5396 2.75001 15.6198 2.75111 15.6761 2.75715ZM3.21267 8.53336C3.51557 8.20618 3.97106 7.98917 4.85612 7.87145C5.75726 7.75159 6.96357 7.75001 8.67239 7.75001H15.3276C17.0364 7.75001 18.2427 7.75159 19.1439 7.87145C20.0289 7.98917 20.4844 8.20618 20.7873 8.53336C21.0832 8.85293 21.2436 9.28782 21.2498 10.1117C21.2563 10.9618 21.1002 12.0828 20.8738 13.6883L20.4509 16.6883C20.2731 17.9491 20.1486 18.821 19.9656 19.4747C19.7894 20.1042 19.582 20.4405 19.2934 20.6795C18.9999 20.9225 18.6058 21.0784 17.9048 21.1625C17.1861 21.2488 16.2465 21.25 14.9046 21.25H9.09536C7.75347 21.25 6.81393 21.2488 6.09519 21.1625C5.39417 21.0784 5.00014 20.9225 4.70664 20.6795C4.41795 20.4405 4.21058 20.1042 4.03437 19.4747C3.8514 18.821 3.7269 17.9491 3.54913 16.6883L3.12616 13.6883C2.89981 12.0828 2.74373 10.9618 2.75018 10.1117C2.75644 9.28782 2.91681 8.85293 3.21267 8.53336Z"
    })]
  })
});
const AddImageIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Icon, {
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M18.5 1.25C18.9142 1.25 19.25 1.58579 19.25 2V4.75H22C22.4142 4.75 22.75 5.08579 22.75 5.5C22.75 5.91421 22.4142 6.25 22 6.25H19.25V9C19.25 9.41421 18.9142 9.75 18.5 9.75C18.0858 9.75 17.75 9.41421 17.75 9V6.25H15C14.5858 6.25 14.25 5.91421 14.25 5.5C14.25 5.08579 14.5858 4.75 15 4.75H17.75V2C17.75 1.58579 18.0858 1.25 18.5 1.25Z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M12 1.25L11.9426 1.25C9.63423 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63423 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V12C22.75 11.5858 22.4142 11.25 22 11.25C21.5858 11.25 21.25 11.5858 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C21.0667 17.4377 21.0596 17.4882 21.0522 17.5378L18.2782 15.0412C16.9788 13.8718 15.0437 13.7553 13.6134 14.7605L13.3152 14.9701C12.8182 15.3193 12.1421 15.2608 11.7125 14.8313L7.42282 10.5415C6.28741 9.40612 4.46613 9.34547 3.25771 10.4028L2.75098 10.8462C2.75552 9.05395 2.78124 7.69302 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62178 2.75 12 2.75C12.4142 2.75 12.75 2.41421 12.75 2C12.75 1.58579 12.4142 1.25 12 1.25ZM2.92637 17.3864C3.09825 18.6648 3.42514 19.4355 3.9948 20.0052C4.56445 20.5749 5.33517 20.9018 6.61358 21.0736C7.91356 21.2484 9.62178 21.25 12 21.25C14.3782 21.25 16.0864 21.2484 17.3864 21.0736C18.6648 20.9018 19.4355 20.5749 20.0052 20.0052C20.2487 19.7617 20.4479 19.4814 20.6096 19.1404C20.5707 19.1166 20.5334 19.089 20.4983 19.0574L17.2747 16.1562C16.4951 15.4545 15.334 15.3846 14.4758 15.9877L14.1776 16.1973C13.0843 16.9657 11.5968 16.8369 10.6519 15.8919L6.36216 11.6022C5.78515 11.0252 4.85958 10.9944 4.24546 11.5317L2.75038 12.8399C2.75296 14.7884 2.77289 16.2448 2.92637 17.3864Z"
    })]
  })
});
const ExpandIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Icon, {
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M9.94358 1.25L10 1.25C10.4142 1.25 10.75 1.58579 10.75 2C10.75 2.41421 10.4142 2.75 10 2.75C8.09318 2.75 6.73851 2.75159 5.71085 2.88976C4.70476 3.02502 4.12511 3.27869 3.7019 3.7019C3.27869 4.12511 3.02502 4.70476 2.88976 5.71085C2.75159 6.73851 2.75 8.09318 2.75 10C2.75 10.4142 2.41421 10.75 2 10.75C1.58579 10.75 1.25 10.4142 1.25 10L1.25 9.94358C1.24998 8.10582 1.24997 6.65019 1.40314 5.51098C1.56076 4.33856 1.89288 3.38961 2.64124 2.64124C3.38961 1.89288 4.33856 1.56076 5.51098 1.40314C6.65019 1.24997 8.10582 1.24998 9.94358 1.25ZM18.2892 2.88976C17.2615 2.75159 15.9068 2.75 14 2.75C13.5858 2.75 13.25 2.41421 13.25 2C13.25 1.58579 13.5858 1.25 14 1.25L14.0564 1.25C15.8942 1.24998 17.3498 1.24997 18.489 1.40314C19.6614 1.56076 20.6104 1.89288 21.3588 2.64124C22.1071 3.38961 22.4392 4.33856 22.5969 5.51098C22.75 6.65019 22.75 8.10583 22.75 9.94359V10C22.75 10.4142 22.4142 10.75 22 10.75C21.5858 10.75 21.25 10.4142 21.25 10C21.25 8.09318 21.2484 6.73851 21.1102 5.71085C20.975 4.70476 20.7213 4.12511 20.2981 3.7019C19.8749 3.27869 19.2952 3.02502 18.2892 2.88976ZM2 13.25C2.41421 13.25 2.75 13.5858 2.75 14C2.75 15.9068 2.75159 17.2615 2.88976 18.2892C3.02502 19.2952 3.27869 19.8749 3.7019 20.2981C4.12511 20.7213 4.70476 20.975 5.71085 21.1102C6.73851 21.2484 8.09318 21.25 10 21.25C10.4142 21.25 10.75 21.5858 10.75 22C10.75 22.4142 10.4142 22.75 10 22.75H9.94359C8.10583 22.75 6.65019 22.75 5.51098 22.5969C4.33856 22.4392 3.38961 22.1071 2.64124 21.3588C1.89288 20.6104 1.56076 19.6614 1.40314 18.489C1.24997 17.3498 1.24998 15.8942 1.25 14.0564L1.25 14C1.25 13.5858 1.58579 13.25 2 13.25ZM22 13.25C22.4142 13.25 22.75 13.5858 22.75 14V14.0564C22.75 15.8942 22.75 17.3498 22.5969 18.489C22.4392 19.6614 22.1071 20.6104 21.3588 21.3588C20.6104 22.1071 19.6614 22.4392 18.489 22.5969C17.3498 22.75 15.8942 22.75 14.0564 22.75H14C13.5858 22.75 13.25 22.4142 13.25 22C13.25 21.5858 13.5858 21.25 14 21.25C15.9068 21.25 17.2615 21.2484 18.2892 21.1102C19.2952 20.975 19.8749 20.7213 20.2981 20.2981C20.7213 19.8749 20.975 19.2952 21.1102 18.2892C21.2484 17.2615 21.25 15.9068 21.25 14C21.25 13.5858 21.5858 13.25 22 13.25Z"
    })
  })
});
const WidgetIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Icon, {
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5.948 1.75C5.04954 1.74997 4.3003 1.74995 3.70552 1.82991C3.07773 1.91432 2.51093 2.09999 2.05546 2.55546C1.59999 3.01093 1.41432 3.57773 1.32991 4.20552C1.24995 4.8003 1.24997 5.54951 1.25 6.44798V8.552C1.24997 9.45047 1.24995 10.1997 1.32991 10.7945C1.41432 11.4223 1.59999 11.9891 2.05546 12.4445C2.51093 12.9 3.07773 13.0857 3.70552 13.1701C4.3003 13.2501 5.04951 13.25 5.94798 13.25H6.052C6.95047 13.25 7.69971 13.2501 8.29448 13.1701C8.92228 13.0857 9.48908 12.9 9.94455 12.4445C10.4 11.9891 10.5857 11.4223 10.6701 10.7945C10.7501 10.1997 10.75 9.4505 10.75 8.55203V6.44801C10.75 5.54954 10.7501 4.8003 10.6701 4.20552C10.5857 3.57773 10.4 3.01093 9.94455 2.55546C9.48908 2.09999 8.92228 1.91432 8.29448 1.82991C7.69971 1.74995 6.9505 1.74997 6.05203 1.75H5.948ZM3.11612 3.61612C3.24644 3.4858 3.44393 3.37858 3.9054 3.31654C4.38843 3.2516 5.03599 3.25 6 3.25C6.96401 3.25 7.61157 3.2516 8.09461 3.31654C8.55607 3.37858 8.75357 3.4858 8.88389 3.61612C9.0142 3.74644 9.12143 3.94393 9.18347 4.4054C9.24841 4.88843 9.25 5.53599 9.25 6.5V8.5C9.25 9.46401 9.24841 10.1116 9.18347 10.5946C9.12143 11.0561 9.0142 11.2536 8.88389 11.3839C8.75357 11.5142 8.55607 11.6214 8.09461 11.6835C7.61157 11.7484 6.96401 11.75 6 11.75C5.03599 11.75 4.38843 11.7484 3.9054 11.6835C3.44393 11.6214 3.24644 11.5142 3.11612 11.3839C2.9858 11.2536 2.87858 11.0561 2.81654 10.5946C2.7516 10.1116 2.75 9.46401 2.75 8.5V6.5C2.75 5.53599 2.7516 4.88843 2.81654 4.4054C2.87858 3.94393 2.9858 3.74644 3.11612 3.61612Z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.448 10.75C16.5495 10.75 15.8003 10.7499 15.2055 10.8299C14.5777 10.9143 14.0109 11.1 13.5555 11.5555C13.1 12.0109 12.9143 12.5777 12.8299 13.2055C12.7499 13.8003 12.75 14.5495 12.75 15.448V17.552C12.75 18.4505 12.7499 19.1997 12.8299 19.7945C12.9143 20.4223 13.1 20.9891 13.5555 21.4445C14.0109 21.9 14.5777 22.0857 15.2055 22.1701C15.8003 22.2501 16.5495 22.25 17.4479 22.25H17.552C18.4504 22.25 19.1997 22.2501 19.7945 22.1701C20.4223 22.0857 20.9891 21.9 21.4445 21.4445C21.9 20.9891 22.0857 20.4223 22.1701 19.7945C22.2501 19.1997 22.25 18.4505 22.25 17.5521V15.448C22.25 14.5496 22.2501 13.8003 22.1701 13.2055C22.0857 12.5777 21.9 12.0109 21.4445 11.5555C20.9891 11.1 20.4223 10.9143 19.7945 10.8299C19.1997 10.7499 18.4505 10.75 17.552 10.75H17.448ZM14.6161 12.6161C14.7464 12.4858 14.9439 12.3786 15.4054 12.3165C15.8884 12.2516 16.536 12.25 17.5 12.25C18.464 12.25 19.1116 12.2516 19.5946 12.3165C20.0561 12.3786 20.2536 12.4858 20.3839 12.6161C20.5142 12.7464 20.6214 12.9439 20.6835 13.4054C20.7484 13.8884 20.75 14.536 20.75 15.5V17.5C20.75 18.464 20.7484 19.1116 20.6835 19.5946C20.6214 20.0561 20.5142 20.2536 20.3839 20.3839C20.2536 20.5142 20.0561 20.6214 19.5946 20.6835C19.1116 20.7484 18.464 20.75 17.5 20.75C16.536 20.75 15.8884 20.7484 15.4054 20.6835C14.9439 20.6214 14.7464 20.5142 14.6161 20.3839C14.4858 20.2536 14.3786 20.0561 14.3165 19.5946C14.2516 19.1116 14.25 18.464 14.25 17.5V15.5C14.25 14.536 14.2516 13.8884 14.3165 13.4054C14.3786 12.9439 14.4858 12.7464 14.6161 12.6161Z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16.4748 1.75H18.5253C18.9697 1.75 19.3408 1.74999 19.6454 1.77077C19.9625 1.79241 20.262 1.83905 20.5524 1.95933C21.2262 2.23844 21.7616 2.7738 22.0407 3.44762C22.161 3.73801 22.2076 4.03754 22.2292 4.35464C22.25 4.65925 22.25 5.03029 22.25 5.47475V5.52526C22.25 5.96972 22.25 6.34076 22.2292 6.64537C22.2076 6.96247 22.161 7.26199 22.0407 7.55238C21.7616 8.22621 21.2262 8.76156 20.5524 9.04067C20.262 9.16095 19.9625 9.2076 19.6454 9.22923C19.3408 9.25002 18.9697 9.25001 18.5253 9.25H16.4747C16.0303 9.25001 15.6592 9.25002 15.3546 9.22923C15.0375 9.2076 14.738 9.16095 14.4476 9.04067C13.7738 8.76156 13.2384 8.22621 12.9593 7.55238C12.8391 7.26199 12.7924 6.96247 12.7708 6.64537C12.75 6.34075 12.75 5.96972 12.75 5.52525V5.47475C12.75 5.03029 12.75 4.65925 12.7708 4.35464C12.7924 4.03754 12.8391 3.73801 12.9593 3.44762C13.2384 2.7738 13.7738 2.23844 14.4476 1.95933C14.738 1.83905 15.0375 1.79241 15.3546 1.77077C15.6592 1.74999 16.0303 1.75 16.4748 1.75ZM15.4567 3.26729C15.216 3.28372 15.0988 3.3132 15.0216 3.34515C14.7154 3.47202 14.472 3.71536 14.3452 4.02165C14.3132 4.0988 14.2837 4.21602 14.2673 4.45675C14.2504 4.70421 14.25 5.0238 14.25 5.5C14.25 5.97621 14.2504 6.2958 14.2673 6.54326C14.2837 6.78399 14.3132 6.9012 14.3452 6.97836C14.472 7.28464 14.7154 7.52799 15.0216 7.65485C15.0988 7.68681 15.216 7.71629 15.4567 7.73271C15.7042 7.7496 16.0238 7.75 16.5 7.75H18.5C18.9762 7.75 19.2958 7.7496 19.5433 7.73271C19.784 7.71629 19.9012 7.68681 19.9784 7.65485C20.2846 7.52799 20.528 7.28464 20.6549 6.97836C20.6868 6.9012 20.7163 6.78399 20.7327 6.54326C20.7496 6.2958 20.75 5.97621 20.75 5.5C20.75 5.0238 20.7496 4.70421 20.7327 4.45674C20.7163 4.21602 20.6868 4.0988 20.6549 4.02165C20.528 3.71536 20.2846 3.47202 19.9784 3.34515C19.9012 3.3132 19.784 3.28372 19.5433 3.26729C19.2958 3.25041 18.9762 3.25 18.5 3.25H16.5C16.0238 3.25 15.7042 3.25041 15.4567 3.26729Z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.97475 14.75C4.53029 14.75 4.15925 14.75 3.85464 14.7708C3.53754 14.7924 3.23801 14.8391 2.94762 14.9593C2.2738 15.2384 1.73844 15.7738 1.45933 16.4476C1.33905 16.738 1.29241 17.0375 1.27077 17.3546C1.24999 17.6592 1.25 18.0302 1.25 18.4747V18.5253C1.25 18.9697 1.24999 19.3408 1.27077 19.6454C1.29241 19.9625 1.33905 20.262 1.45933 20.5524C1.73844 21.2262 2.2738 21.7616 2.94762 22.0407C3.23801 22.161 3.53754 22.2076 3.85464 22.2292C4.15925 22.25 4.53029 22.25 4.97475 22.25H7.02526C7.46972 22.25 7.84076 22.25 8.14537 22.2292C8.46247 22.2076 8.76199 22.161 9.05238 22.0407C9.72621 21.7616 10.2616 21.2262 10.5407 20.5524C10.661 20.262 10.7076 19.9625 10.7292 19.6454C10.75 19.3408 10.75 18.9697 10.75 18.5253V18.4747C10.75 18.0303 10.75 17.6592 10.7292 17.3546C10.7076 17.0375 10.661 16.738 10.5407 16.4476C10.2616 15.7738 9.72621 15.2384 9.05238 14.9593C8.76199 14.8391 8.46247 14.7924 8.14537 14.7708C7.84075 14.75 7.46972 14.75 7.02525 14.75H4.97475ZM3.52165 16.3452C3.5988 16.3132 3.71602 16.2837 3.95675 16.2673C4.20421 16.2504 4.5238 16.25 5 16.25H7C7.47621 16.25 7.7958 16.2504 8.04326 16.2673C8.28399 16.2837 8.4012 16.3132 8.47836 16.3452C8.78464 16.472 9.02799 16.7154 9.15485 17.0216C9.18681 17.0988 9.21629 17.216 9.23271 17.4567C9.2496 17.7042 9.25 18.0238 9.25 18.5C9.25 18.9762 9.2496 19.2958 9.23271 19.5433C9.21629 19.784 9.18681 19.9012 9.15485 19.9784C9.02799 20.2846 8.78464 20.528 8.47836 20.6549C8.4012 20.6868 8.28399 20.7163 8.04326 20.7327C7.7958 20.7496 7.47621 20.75 7 20.75H5C4.5238 20.75 4.20421 20.7496 3.95674 20.7327C3.71602 20.7163 3.5988 20.6868 3.52165 20.6549C3.21536 20.528 2.97202 20.2846 2.84515 19.9784C2.8132 19.9012 2.78372 19.784 2.76729 19.5433C2.75041 19.2958 2.75 18.9762 2.75 18.5C2.75 18.0238 2.75041 17.7042 2.76729 17.4567C2.78372 17.216 2.8132 17.0988 2.84515 17.0216C2.97202 16.7154 3.21536 16.472 3.52165 16.3452Z"
    })]
  })
});
const ScreenIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Icon, {
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    fill: "currentColor",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.94513 2.25H15.0549C16.4225 2.24998 17.5248 2.24996 18.3918 2.36652C19.2919 2.48754 20.0497 2.74643 20.6517 3.34835C21.2536 3.95027 21.5125 4.70814 21.6335 5.60825C21.75 6.47522 21.75 7.57754 21.75 8.94513V14.052C21.75 14.9505 21.7501 15.6997 21.6701 16.2945C21.5857 16.9223 21.4 17.4891 20.9445 17.9445C20.4891 18.4 19.9223 18.5857 19.2945 18.6701C18.6997 18.7501 17.9505 18.75 17.052 18.75H6.94801C6.04952 18.75 5.3003 18.7501 4.70552 18.6701C4.07773 18.5857 3.51093 18.4 3.05546 17.9445C2.59999 17.4891 2.41432 16.9223 2.32991 16.2945C2.24994 15.6997 2.24997 14.9505 2.25 14.052L2.25 8.94513C2.24998 7.57754 2.24996 6.47522 2.36652 5.60825C2.48754 4.70814 2.74643 3.95027 3.34835 3.34835C3.95027 2.74643 4.70814 2.48754 5.60825 2.36652C6.47522 2.24996 7.57754 2.24998 8.94513 2.25ZM5.80812 3.85315C5.07434 3.9518 4.68577 4.13225 4.40901 4.40901C4.13225 4.68577 3.9518 5.07435 3.85315 5.80812C3.75159 6.56347 3.75 7.56458 3.75 9V14C3.75 14.964 3.75159 15.6116 3.81654 16.0946C3.87858 16.5561 3.9858 16.7536 4.11612 16.8839C4.24643 17.0142 4.44393 17.1214 4.90539 17.1835C5.38843 17.2484 6.03599 17.25 7 17.25H17C17.964 17.25 18.6116 17.2484 19.0946 17.1835C19.5561 17.1214 19.7536 17.0142 19.8839 16.8839C20.0142 16.7536 20.1214 16.5561 20.1835 16.0946C20.2484 15.6116 20.25 14.964 20.25 14V9C20.25 7.56459 20.2484 6.56347 20.1469 5.80812C20.0482 5.07435 19.8678 4.68577 19.591 4.40901C19.3142 4.13225 18.9257 3.9518 18.1919 3.85315C17.4365 3.75159 16.4354 3.75 15 3.75H9C7.56458 3.75 6.56347 3.75159 5.80812 3.85315ZM8.25 15C8.25 14.5858 8.58579 14.25 9 14.25H15C15.4142 14.25 15.75 14.5858 15.75 15C15.75 15.4142 15.4142 15.75 15 15.75H9C8.58579 15.75 8.25 15.4142 8.25 15ZM1.25 21C1.25 20.5858 1.58579 20.25 2 20.25H22C22.4142 20.25 22.75 20.5858 22.75 21C22.75 21.4142 22.4142 21.75 22 21.75H2C1.58579 21.75 1.25 21.4142 1.25 21Z"
    })
  })
});

/***/ },

/***/ "./src/utils/const.js"
/*!****************************!*\
  !*** ./src/utils/const.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R3MI_ADVANCED_BLOCKS: () => (/* binding */ R3MI_ADVANCED_BLOCKS),
/* harmony export */   R3MI_GALLERY_CAPTION_TYPE: () => (/* binding */ R3MI_GALLERY_CAPTION_TYPE),
/* harmony export */   R3MI_GALLERY_CAPTION_VISIBILTY: () => (/* binding */ R3MI_GALLERY_CAPTION_VISIBILTY),
/* harmony export */   R3MI_IMAGES_UPLOADED_FAILED: () => (/* binding */ R3MI_IMAGES_UPLOADED_FAILED),
/* harmony export */   R3MI_IMAGES_UPLOADED_SUCCESS: () => (/* binding */ R3MI_IMAGES_UPLOADED_SUCCESS),
/* harmony export */   R3MI_IMAGE_RESOLUTION: () => (/* binding */ R3MI_IMAGE_RESOLUTION),
/* harmony export */   R3MI_LIGHTBOX_IMAGE_MODE: () => (/* binding */ R3MI_LIGHTBOX_IMAGE_MODE),
/* harmony export */   R3MI_TEXT_ALIGNMENT: () => (/* binding */ R3MI_TEXT_ALIGNMENT),
/* harmony export */   R3MI_UPLOADING: () => (/* binding */ R3MI_UPLOADING)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const R3MI_ADVANCED_BLOCKS = "r3mi-grid-masonry-gallery-blocks";
const R3MI_UPLOADING = "Uploading...";
const R3MI_IMAGES_UPLOADED_SUCCESS = "Images uploaded successfully!";
const R3MI_IMAGES_UPLOADED_FAILED = "Image upload failed!";
const R3MI_IMAGE_RESOLUTION = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Square - 1:1", R3MI_ADVANCED_BLOCKS),
  value: "1 / 1"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Landscape - 4:3", R3MI_ADVANCED_BLOCKS),
  value: "4 / 3"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wide - 16:9", R3MI_ADVANCED_BLOCKS),
  value: "16 / 9"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Portrait - 3:4", R3MI_ADVANCED_BLOCKS),
  value: "3 / 4"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tall - 2:3", R3MI_ADVANCED_BLOCKS),
  value: "2 / 3"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cinema - 21:9", R3MI_ADVANCED_BLOCKS),
  value: "21 / 9"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Classic - 5:4", R3MI_ADVANCED_BLOCKS),
  value: "5 / 4"
}];
const R3MI_GALLERY_CAPTION_TYPE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Below Image", R3MI_ADVANCED_BLOCKS),
  value: "below-image"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Full Overlay", R3MI_ADVANCED_BLOCKS),
  value: "full-overlay"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bar Overlay", R3MI_ADVANCED_BLOCKS),
  value: "bar-overlay"
}];
const R3MI_GALLERY_CAPTION_VISIBILTY = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Always Visible", R3MI_ADVANCED_BLOCKS),
  value: "always-visible"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show On Hover", R3MI_ADVANCED_BLOCKS),
  value: "show-hover"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hide On Hover", R3MI_ADVANCED_BLOCKS),
  value: "hide-hover"
}];
const R3MI_LIGHTBOX_IMAGE_MODE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slide", R3MI_ADVANCED_BLOCKS),
  value: "slide"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fade", R3MI_ADVANCED_BLOCKS),
  value: "fade"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom", R3MI_ADVANCED_BLOCKS),
  value: "zoom"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", R3MI_ADVANCED_BLOCKS),
  value: "none"
}];
const R3MI_TEXT_ALIGNMENT = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", R3MI_ADVANCED_BLOCKS),
  value: "left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Center", R3MI_ADVANCED_BLOCKS),
  value: "center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", R3MI_ADVANCED_BLOCKS),
  value: "right"
}];

/***/ },

/***/ "./src/utils/media.js"
/*!****************************!*\
  !*** ./src/utils/media.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const MediaProvider = new class MediaProvider {
  singleUpload = async event => {
    const file = event.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await fetch(`${wpApiSettings.root}wp/v2/media`, {
        method: "POST",
        headers: {
          "X-WP-Nonce": wpApiSettings.nonce
        },
        body: formData
      });
      if (!response.ok) {
        throw new Error("Image upload failed");
      }
      const media = await response.json();
      return media;
    } catch (error) {
      console.error(error);
      return null;
    } finally {
      event.target.value = "";
    }
  };
  multipleUpload = async files => {
    const imageFiles = Array.from(files).filter(file => file.type.startsWith("image/"));
    try {
      const uploadedImages = await Promise.all(imageFiles.map(file => {
        return new Promise(async (resolve, reject) => {
          try {
            const formData = new FormData();
            formData.append("file", file);
            const response = await fetch(`${wpApiSettings.root}wp/v2/media`, {
              method: "POST",
              headers: {
                "X-WP-Nonce": wpApiSettings.nonce
              },
              body: formData
            });
            if (!response.ok) {
              reject(new Error(`Upload failed: ${file.name}`));
              return;
            }
            const media = await response.json();
            resolve({
              id: media.id,
              url: media.source_url,
              alt: media.alt_text || ""
            });
          } catch (error) {
            reject(error);
          }
        });
      }));
      return uploadedImages;
    } catch (error) {
      console.error("Multiple upload error:", error);
      return null;
    }
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MediaProvider);

/***/ },

/***/ "./src/blocks/masonry-gallery/editor.scss"
/*!************************************************!*\
  !*** ./src/blocks/masonry-gallery/editor.scss ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/blocks/masonry-gallery/style.scss"
/*!***********************************************!*\
  !*** ./src/blocks/masonry-gallery/style.scss ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/data"
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["data"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "@wordpress/notices"
/*!*********************************!*\
  !*** external ["wp","notices"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["notices"];

/***/ },

/***/ "./src/blocks/masonry-gallery/block.json"
/*!***********************************************!*\
  !*** ./src/blocks/masonry-gallery/block.json ***!
  \***********************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"r3mi/masonry-gallery","version":"1.0.0","title":"Masonry Gallery","category":"r3mi-grid-masonry-gallery-blocks","icon":"format-gallery","description":"Create a responsive image masonry gallery with adjustable columns and spacing, featuring an image enlargement (lightbox) option.","textdomain":"r3mi-grid-masonry-gallery-blocks","attributes":{"columns":{"type":"number","default":3},"gap":{"type":"number","default":12},"corners":{"type":"number","default":0},"lightbox":{"type":"boolean","default":false},"lightboxThumbnail":{"type":"boolean","default":false},"lightboxImageMode":{"type":"string","default":"slide"},"showCaptions":{"type":"boolean","default":false},"hoverEffect":{"type":"boolean","default":false},"lazyLoading":{"type":"boolean","default":false},"captionType":{"type":"string","default":"below-image"},"captionVisibility":{"type":"string","default":"always-visible"},"captionAlignment":{"type":"string","default":"center"},"galleryType":{"type":"string","default":"masonry"}},"supports":{"html":false,"inserter":true},"allowedBlocks":["r3mi/image"],"editorScript":"file:./index.js","editorStyle":"file:./index.css","viewScript":"file:./view.js","style":"file:./style-index.css","providesContext":{"context/galleryType":"galleryType","context/showCaptions":"showCaptions","context/lightbox":"lightbox"}}');

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		const deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn) => {
/******/ 			if(chunkIds) {
/******/ 				deferred.push([chunkIds, fn]);
/******/ 				return;
/******/ 			}
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				let [chunkIds, fn] = deferred[i];
/******/ 				let fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if (__webpack_require__.O.j(chunkIds[j])) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					const r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.hasOwn(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		const installedChunks = {
/******/ 			"blocks/masonry-gallery/index": 0,
/******/ 			"blocks/masonry-gallery/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		const webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			let [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		const chunkLoadingGlobal = globalThis["webpackChunkr3mi_grid_masonry_gallery_blocks"] ||= [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/masonry-gallery/style-index"], () => (__webpack_require__("./src/blocks/masonry-gallery/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map