import Header from "@/components/header/header";
import generateGallery from "@/components/gallery/gallery";
import Footer from "@/components/footer/footer";

require("@/styles/main.scss");

let markup = `
  ${Header}
  ${Footer}
  `;

window.onload = () => {
  document.body.innerHTML = markup;
};

generateGallery().then((data) => {
  const Gallery = data;

  markup = `
  ${Header}
  ${Gallery}
  ${Footer}
  `;

  document.body.innerHTML = markup;
});
