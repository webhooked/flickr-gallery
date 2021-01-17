export default async function fetchGallery() {
  try {
    const flickrApi = await fetch(
      `https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${process.env.FLICKR_API_KEY}&gallery_id=72157667840423149&format=json&nojsoncallback=1`
    );
    const data = await flickrApi.json();

    if (data.stat === "fail") {
      return "Ops, something went wrong";
    }
    return data;
  } catch (e) {
    return e;
  }
}
