const MediaProvider = new (class MediaProvider {
  singleUpload = async (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(`${wpApiSettings.root}wp/v2/media`, {
        method: "POST",
        headers: {
          "X-WP-Nonce": wpApiSettings.nonce,
        },
        body: formData,
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

  multipleUpload = async (files) => {
    const imageFiles = Array.from(files).filter((file) =>
      file.type.startsWith("image/"),
    );

    try {
      const uploadedImages = await Promise.all(
        imageFiles.map((file) => {
          return new Promise(async (resolve, reject) => {
            try {
              const formData = new FormData();
              formData.append("file", file);

              const response = await fetch(`${wpApiSettings.root}wp/v2/media`, {
                method: "POST",
                headers: {
                  "X-WP-Nonce": wpApiSettings.nonce,
                },
                body: formData,
              });

              if (!response.ok) {
                reject(new Error(`Upload failed: ${file.name}`));
                return;
              }

              const media = await response.json();

              resolve({
                id: media.id,
                url: media.source_url,
                alt: media.alt_text || "",
              });
            } catch (error) {
              reject(error);
            }
          });
        }),
      );

      return uploadedImages;
    } catch (error) {
      console.error("Multiple upload error:", error);
      return null;
    }
  };
})();


export default MediaProvider;