export const createImage = (path) => {
  const image = new Image();
  image.src = path;

  return image;
}