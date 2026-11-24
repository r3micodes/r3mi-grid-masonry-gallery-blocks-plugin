import {
    R3MI_ADVANCED_BLOCKS
} from "@utils/const";
import {
    Notice
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const NoticeUpgrade = () => {
  return (
    <Notice status="info" isDismissible={false}>
      <p>
        {__(
          "Want more gallery features? Upgrade to Pro and unlock additional features!",
          R3MI_ADVANCED_BLOCKS,
        )}
      </p>
      <a
        href="https://r3micodes.free.nf/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {__("Demo", R3MI_ADVANCED_BLOCKS)}
      </a>
      <span style={{ paddingLeft: 10, paddingRight: 10 }}>|</span>
      <a
        href="https://www.sellanycode.com/profile/41229/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {__("Upgrade to Pro", R3MI_ADVANCED_BLOCKS)}
      </a>
    </Notice>
  );
};

export default NoticeUpgrade;
