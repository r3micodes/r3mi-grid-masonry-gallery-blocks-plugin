// console.count("R3MI IMAGE LOADED");
// console.log("Image:", import.meta.url);

import { registerBlockType } from "@wordpress/blocks";
import metadata from "./block.json";
import Edit from "./edit";
import Save from "./save";

import "./editor.scss";
import "./style.scss";
import { ImageIcon } from "@components/ui-icons";

export const BLOCK_TITLE = "Image";

registerBlockType(metadata.name, {
  ...metadata,
  icon: ImageIcon,
  edit: Edit,
  save: Save,
});
