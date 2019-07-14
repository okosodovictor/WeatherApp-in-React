function GalleryService() {
  return {
    getPhotos: async function() {
      let response = await fetch("/api/photos");
      return response;
    },
    getImageById: async function(id) {
      let response = await fetch("/api/photos/" + id);
      return response;
    }
  };
}

export default GalleryService;
