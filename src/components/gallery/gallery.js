import "./gallery.scss";
import galleryItem from "@/components/gallery/gallery-item/gallery-item";
import fetchGallery from "@/utils/flickr-api-service";

export default async function generateGallery() {
  const galleryData = await fetchGallery();
  const photos = galleryData.photos.photo;

  return `
    <div class="gallery">
      ${photos
        .map(
          (photo) =>
            `${galleryItem(
              photo.title,
              `http://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
            )}`
        )
        .join("")}
    </div>`;
}
