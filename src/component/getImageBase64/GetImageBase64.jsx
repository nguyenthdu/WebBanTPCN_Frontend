const getImageBase64 = (imageFiles) => {
  if (Array.isArray(imageFiles) && imageFiles.length > 0) {
    // Lặp qua từng ảnh trong mảng imageFiles
    const imagesBase64 = imageFiles.map((image) => {
      return `data:image/jpeg;base64,${image.picByte}`;
    });

    return imagesBase64;
  }
  return null;
};

export default getImageBase64;
