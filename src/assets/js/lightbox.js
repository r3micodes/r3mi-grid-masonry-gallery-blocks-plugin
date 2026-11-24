document.addEventListener("DOMContentLoaded", () => {
  let enableThumbail = false;
  let imageMode = "none";

  // Open lightbox when clicking a gallery image.
  document.addEventListener("click", (event) => {
    enableThumbail = false;
    imageMode = "none";

    const existingLightbox = document.querySelector(".r3mi-lightbox");

    // Close lightbox when clicking background or close button.
    if (
      existingLightbox &&
      (event.target === existingLightbox ||
        event.target.closest(".r3mi-lightbox-close"))
    ) {
      closeLightbox(existingLightbox);
      return;
    }

    // Check if the clicked image belongs to an enabled gallery.

    const gallery = event.target.closest(
      [
        '.r3mi-grid-gallery[data-lightbox-mode="on"]',
        '.r3mi-masonry-gallery[data-lightbox-mode="on"]',
        '.r3mi-single-image[data-lightbox-mode="on"]',
      ].join(", "),
    );

    if (!gallery) return;

    const galleryThumbnail = event.target.closest(
      [
        '.r3mi-grid-gallery[data-lightbox-thumbnail="on"]',
        '.r3mi-masonry-gallery[data-lightbox-thumbnail="on"]',
      ].join(", "),
    );

    if (galleryThumbnail) enableThumbail = true;

    const galleryImageMode = event.target.closest(
      [
        ".r3mi-grid-gallery[data-lightbox-image-mode]",
        '.r3mi-masonry-gallery[data-lightbox-thumbnail="on"]',
        '.r3mi-single-imagey[data-lightbox-thumbnail="on"]',
      ].join(", "),
    );

    if (galleryImageMode) {
      imageMode = galleryImageMode?.getAttribute("data-lightbox-image-mode");
    }

    const imageParent = event.target.closest(
      [".r3mi-gallery-image", ".r3mi-single-image"].join(", "),
    );
    const clickedImage = imageParent?.querySelector("img");

    if (!clickedImage) return;

    // Get images belonging only to this gallery.
    const images = Array.from(
      gallery.querySelectorAll(
        [".r3mi-gallery-image img", ".r3mi-single-image img"].join(", "),
      ),
    );

    const currentIndex = images.indexOf(clickedImage);

    if (currentIndex === -1) return;

    // Remove an existing lightbox.
    if (existingLightbox) {
      closeLightbox(existingLightbox);
    }

    createLightbox(images, currentIndex);
  });

  // Keyboard navigation.
  document.addEventListener("keydown", (event) => {
    const lightbox = document.querySelector(".r3mi-lightbox");

    if (!lightbox) return;

    if (event.key === "Escape") {
      closeLightbox(lightbox);
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      lightbox.navigate(-1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      lightbox.navigate(1);
    }
  });

  function createLightbox(images, initialIndex) {
    let currentIndex = initialIndex;

    const lightbox = document.createElement("div");
    lightbox.className = "r3mi-lightbox";
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", "Enlarged gallery image");
    lightbox.setAttribute("data-lightbox-image-mode", imageMode || "none");

    // Lightbox Thumbnail
    if (enableThumbail) {
      lightbox.setAttribute("data-lightbox-thumbnail", "on");
    }

    // Image wrapper.
    const imageWrapper = document.createElement("div");
    imageWrapper.className = "r3mi-lightbox-image-wrapper";

    // Main image.
    const image = document.createElement("img");
    image.className = "r3mi-lightbox-image";
    image.alt = "";

    // Close button.
    const closeButton = document.createElement("button");
    closeButton.className = "r3mi-lightbox-close";
    closeButton.type = "button";
    closeButton.setAttribute("aria-label", "Close enlarged image");
    closeButton.innerHTML = "&times;";

    // Previous button.
    const prevButton = document.createElement("button");
    prevButton.className = "r3mi-lightbox-prev";
    prevButton.type = "button";
    prevButton.setAttribute("aria-label", "Previous image");
    prevButton.innerHTML = "&#10094;";

    // Next button.
    const nextButton = document.createElement("button");
    nextButton.className = "r3mi-lightbox-next";
    nextButton.type = "button";
    nextButton.setAttribute("aria-label", "Next image");
    nextButton.innerHTML = "&#10095;";

    // Image counter.
    const counter = document.createElement("div");
    counter.className = "r3mi-lightbox-counter";

    // Thumbnail navigation.
    const thumbnailWrapper = document.createElement("div");
    thumbnailWrapper.className = "r3mi-lightbox-thumbnails";
    thumbnailWrapper.setAttribute("aria-label", "Gallery thumbnails");

    const thumbnails = images.map((selectedImage, index) => {
      const thumbnailButton = document.createElement("button");

      thumbnailButton.type = "button";
      thumbnailButton.className = "r3mi-lightbox-thumbnail";
      thumbnailButton.setAttribute("aria-label", `Show image ${index + 1}`);

      const thumbnailImage = document.createElement("img");
      thumbnailImage.src = selectedImage.src;
      thumbnailImage.alt = selectedImage.alt || "";

      thumbnailButton.appendChild(thumbnailImage);

      thumbnailButton.addEventListener("click", () => {
        updateImage(index, index > currentIndex ? "next" : "prev");
      });

      thumbnailWrapper.appendChild(thumbnailButton);

      return thumbnailButton;
    });

    imageWrapper.appendChild(image);

    lightbox.append(
      closeButton,
      images.length > 1 ? prevButton : undefined,
      imageWrapper,
      images.length > 1 ? nextButton : undefined,
      counter,
      enableThumbail ? thumbnailWrapper : null,
    );

    document.body.appendChild(lightbox);
    document.body.classList.add("r3mi-lightbox-open");

    // Display image.
    function updateImage(index, direction = "next", animate = true) {
      currentIndex = (index + images.length) % images.length;

      const selectedImage = images[currentIndex];
      const newSrc = selectedImage.dataset.fullUrl || selectedImage.src;

      const displayImage = () => {
        image.classList.remove("slide-next", "slide-prev", "loaded");

        image.src = newSrc;
        image.alt = selectedImage.alt || "";

        counter.textContent = `${currentIndex + 1} / ${images.length}`;

        // Update active thumbnail.

        if (lightbox.getAttribute("data-lightbox-thumbnail") === "on") {
          thumbnails.forEach((thumbnail, i) => {
            const isActive = i === currentIndex;

            thumbnail.classList.toggle("active", isActive);

            if (isActive) {
              thumbnail.setAttribute("aria-current", "true");
              thumbnail.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
              });
            } else {
              thumbnail.removeAttribute("aria-current");
            }
          });
        }

        if (!animate) return;

        void image.offsetWidth;
        image.classList.add(direction === "next" ? "slide-next" : "slide-prev");
      };

      if (!animate) {
        displayImage();
        return;
      }

      const preload = new Image();

      preload.onload = displayImage;
      preload.onerror = displayImage;
      preload.src = newSrc;
    }

    // Navigate previous or next.
    function navigate(direction) {
      updateImage(currentIndex + direction, direction === 1 ? "next" : "prev");
    }

    lightbox.navigate = navigate;

    prevButton.addEventListener("click", () => navigate(-1));
    nextButton.addEventListener("click", () => navigate(1));

    closeButton.addEventListener("click", () => {
      closeLightbox(lightbox);
    });

    // Initial image.
    updateImage(initialIndex, "next", false);

    closeButton.focus();
  }

  function closeLightbox(lightbox) {
    lightbox.remove();
    document.body.classList.remove("r3mi-lightbox-open");
  }
});
