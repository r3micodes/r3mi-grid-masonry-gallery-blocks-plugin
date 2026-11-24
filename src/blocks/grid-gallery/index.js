// console.count("R3MI GRID GALLERY LOADED");
// console.log("Grid Gallery:", import.meta.url);

import { registerBlockType } from "@wordpress/blocks";
import metadata from "./block.json";
import Edit from "./edit";
import Save from "./save";

import { GridGalleryIcon } from "@components/ui-icons";
import "./editor.scss";
import "./style.scss";

export const BLOCK_TITLE = "Grid Gallery";

registerBlockType(metadata.name, {
  ...metadata,
  icon: GridGalleryIcon,
  edit: Edit,
  save: Save,
});
