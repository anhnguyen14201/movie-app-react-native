const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "80fa95fb506ac6a43feae0372d6f0eb8",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
  w342Image: (imgPath) => `https://image.tmdb.org/t/p/w342/${imgPath}`,
  w185Image: (imgPath) => `https://image.tmdb.org/t/p/w185/${imgPath}`,
};

// fallback images
export const fallbackMoviePoster =
  "https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg";
export const fallbackPersonImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUiF-YGjavA63_Au8jQj7zxnFxS_Ay9xc6pxleMqCxH92SzeNSjBTwZ0l61E4B3KTS7o&usqp=CAU";

export default apiConfig;
