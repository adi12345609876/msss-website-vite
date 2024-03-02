//official npm package: https://www.npmjs.com/package/react-image-gallery?activeTab=readme
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import GalleryData from "../data/Gallery-ContentBloack.json";
import GalleryStyles from "../styles/modules/Gallerypage.module.scss";
import Card from "react-bootstrap/Card";
import CenterModal from "../components/ImageModal";

function Gallerycard(props) {
  return (
    <Card
      style={{ width: "30rem" }}
      className={`${GalleryStyles.displayCardContainer} shadow rounded-md hover:drop-shadow-2xl  `}
      onClick={() => {
        props.setModalShow(true);
        props.setImageModal(props.img);
      }}
    >
      <Card.Img variant="top" src={props.img} />
      <Card.Body className="items-center justify-center flex">
        <Card.Text className="mb-2 text-muted text-[1.75rem]">
          {props.Title}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
function GalleryPage() {
  const [modalShow, setModalShow] = React.useState(false);
  const [ImageModal, setImageModal] = React.useState("");

  const images = GalleryData;

  return (
    <>
      <div className={GalleryStyles.ImageContainer}>
        <ImageGallery
          additionalClass={GalleryStyles.ImageFile}
          items={images}
          lazyLoad
          showPlayButton={true}
          showFullscreenButton={true}
          slideInterval={1000}
          slideDuration={800}
          slideOnThumbnailOver={false}
          showIndex={true}
          thumbnailPosition="right"
        />
      </div>
      <div className={GalleryStyles.displayContainer}>
        {GalleryData?.toReversed().map((item) => {
          return (
            <Gallerycard
              img={item.original}
              Title={item.Title}
              setModalShow={setModalShow}
              setImageModal={setImageModal}
            />
          );
        })}
      </div>
      <CenterModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        img={ImageModal}
      />
      );
    </>
  );
}

export default GalleryPage;
