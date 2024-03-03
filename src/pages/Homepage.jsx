import React, { forwardRef, useState } from "react";
import { Image, Col, Button, Modal } from "react-bootstrap";
import heroimg from "../assets/img/hero.jpeg";

import Card from "../components/card";
import Homestyles from "../styles/modules/Homepage.module.scss";

import ContentData from "../../public/data/Home-ContentBloack.json";
import { BellDot } from "lucide-react";

// import { news, aboutus, mission } from "../components/Globalcomp";

function Imageblock(props) {
  return (
    <div className={Homestyles.CardContainer}>
      <Card title={props.title}>
        <img src={props.img} className={Homestyles.Cardimg} />
        <p className={Homestyles.Cardp}>{props.text}</p>
      </Card>
    </div>
  );
}
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Updates</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {ContentData &&
          ContentData[3].map((item, index) => {
            return (
              <>
                <p>
                  {index + 1}.{item.updatesText}
                </p>
              </>
            );
          })}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="danger" className=" bg-red-500">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function Contentblock({ props }) {
  // const imgurl = "../".concat(props.img);

  return (
    <div
      className={`${props.i % 2 == 0 ? "bg-[#edf2fb]" : "bg-white"}`}
      key={props.id}
    >
      <div
        className={`${Homestyles.ContentContainer} ${
          props.rev ? Homestyles.ContentReverse : Homestyles.ContentNoreverse
        }`}
      >
        {/* Text */}
        <Col
          className={`${Homestyles.ContentTextContainer} ${
            props.rev ? "" : ""
          }`}
        >
          <h1 className={Homestyles.ContentTextTitle}>{props.title}</h1>
          <p className={Homestyles.ContentTextPara}>{props.para}</p>
        </Col>
        {/* Img */}
        <Col className={Homestyles.ContentImageContainer}>
          <img src={props.img} className={`${Homestyles.ContentImageFile}`} />
        </Col>
      </div>

      {/* <Divider /> */}
    </div>
  );
}
function Homepage({}, ref) {
  const [showModal, setshowModal] = useState(false);
  console.log(showModal);
  return (
    <>
      {/* Hero section */}
      <div className={Homestyles.heroImageContainer}>
        <Image
          className={`${Homestyles.heroImage}`}
          src={heroimg}
          alt="Modern school"
        />
        <div className={`${Homestyles.heroTextContainer}`}>
          <p className={`${Homestyles.heroSubText}`}>Welcome to</p>
          <p className={`${Homestyles.heroText}`}>
            Modern Senior Secondary School
          </p>
        </div>
        <Button
          href="/Admissions"
          variant="primary"
          size="lg"
          className={Homestyles.herobutton}
        >
          Enroll Now
        </Button>
      </div>

      {/*Display section */}

      <div className={Homestyles.displayfullrow} ref={ref[0]}>
        {ContentData &&
          ContentData[1].map((item) => {
            return (
              <Imageblock
                img={item.img}
                title={item.title}
                text={item.subtext}
                hidheading={item.hidheading}
                hidtext={item.hidtext}
              />
            );
          })}
      </div>

      {/* Content section */}

      {ContentData &&
        ContentData[0].toReversed().map((item) => {
          return (
            <div ref={ref[1]}>
              <Contentblock props={item} />
            </div>
          );
        })}
      <button
        className={Homestyles.notifyButton}
        onClick={() => setshowModal(true)}
      >
        <BellDot size={30} />
      </button>
      <MyVerticallyCenteredModal
        show={showModal}
        onHide={() => setshowModal(false)}
      />
    </>
  );
}
export default forwardRef(Homepage);
