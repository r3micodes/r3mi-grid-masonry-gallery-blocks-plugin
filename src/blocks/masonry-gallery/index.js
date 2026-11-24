// console.count("R3MI MASONRY GALLERY LOADED");
// console.log("Masonry Gallery:", import.meta.url);

import { registerBlockType } from "@wordpress/blocks";
import metadata from "./block.json";
import Edit from "./edit";
import Save from "./save";

import "./editor.scss";
import "./style.scss";
import { WidgetIcon } from "@components/ui-icons";

export const BLOCK_TITLE = "Masonry Gallery";

registerBlockType(metadata.name, {
  ...metadata,
  icon: WidgetIcon,
  edit: Edit,
  save: Save,
});
