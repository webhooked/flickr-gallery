import "./gallery-item.scss";

function galleryItem(title, imageUrl) {
  return `
    <a class="gallery-link">
      <div class="gallery-item">
        <img class="gallery-image" src="${imageUrl}" alt="Gallery image"/>
      </div>
    </a>
  `;
}

export default galleryItem;
