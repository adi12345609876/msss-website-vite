function GalleryPage() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/1000/600/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <>
      <div className={GalleryStyles.ImageContainer}>
        <ImageGallery
          additionalClass={GalleryStyles.ImageFile}
          items={images}
          showPlayButton={false}
          showFullscreenButton={false}
          slideInterval={1000}
          slideOnThumbnailOver={true}
          showIndex={true}
          thumbnailPosition="right"
        />
      </div>
    </>
  );
}

export default GalleryPage;
