import { R3MI_ADVANCED_BLOCKS } from "@utils/const";
import { Spinner } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export default function SnapshotUploading({ text = "Uploading images..." }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        bottom: "10px",
        width: "100%",
        fontSize: 14,
        color: "#ffffff",
        zIndex: 1,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 0,
          padding: 10,
          backgroundColor: "#000000",
          borderRadius: 6,
        }}
      >
        <Spinner style={{ position: "relative", top: -4 }} />
        <span>{__(text, R3MI_ADVANCED_BLOCKS)}</span>
      </div>
    </div>
  );
}
