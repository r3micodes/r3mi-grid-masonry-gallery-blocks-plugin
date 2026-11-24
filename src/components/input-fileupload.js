import {
  R3MI_ADVANCED_BLOCKS,
  R3MI_IMAGES_UPLOADED_FAILED,
  R3MI_IMAGES_UPLOADED_SUCCESS,
  R3MI_UPLOADING,
} from "@utils/const";
import MediaProvider from "@utils/media";
import { useDispatch } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import { store as noticesStore } from "@wordpress/notices";

export default function InputFileUpload({ inputFileId, callback }) {
  const { createSuccessNotice, createErrorNotice, removeNotice } =
    useDispatch(noticesStore);
  return (
    <>
      <input
        id={inputFileId ?? "remi-input-file"}
        type="file"
        accept="image/*"
        multiple
        className="r3mi-input-file"
        style={{ display: "none" }}
        onChange={async (event) => {
          const files = Array.from(event.target.files || []);
          if (files.length) {
            createSuccessNotice(__(R3MI_UPLOADING, R3MI_ADVANCED_BLOCKS), {
              id: "r3mi-uploading",
              type: "snackbar",
            });

            const data = await MediaProvider.multipleUpload(event.target.files);
            removeNotice("r3mi-uploading");

            if (data !== null) {
              callback(data);
              createSuccessNotice(
                __(R3MI_IMAGES_UPLOADED_SUCCESS, R3MI_ADVANCED_BLOCKS),
                {
                  type: "snackbar",
                },
              );
            } else {
              createErrorNotice(
                __(R3MI_IMAGES_UPLOADED_FAILED, R3MI_ADVANCED_BLOCKS),
                {
                  type: "snackbar",
                },
              );
            }
          }
          event.target.value = "";
        }}
      />
    </>
  );
}
