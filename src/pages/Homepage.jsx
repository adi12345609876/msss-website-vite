import React, { forwardRef } from "react";
import { Image, Col, Button } from "react-bootstrap";
import heroimg from "../assets/img/hero.jpeg";

import Card from "../components/card";
import Homestyles from "../styles/modules/Homepage.module.scss";

import ContentData from "../data/Home-ContentBloack";

// import { news, aboutus, mission } from "../components/Globalcomp";
function Bannerimg(props) {
  return (
    <div>
      <Image
        src={props.img}
        alt="banner image"
        className={`${Homestyles.bannerImage}`}
      />
    </div>
  );
}
function Imageblock(props) {
  return (
    <div className={Homestyles.CardContainer}>
      <Card title={props.title}>
        <Image src={props.img} className={Homestyles.Cardimg} />
        <p className={Homestyles.Cardp}>{props.text}</p>
        <div className={Homestyles.CardHiddenText}>
          <h1>{props.hidheading}</h1>
          <h2>{props.hidtext}</h2>
        </div>
      </Card>
    </div>
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
  // const news = useRef(null);
  // const aboutus = useRef(null);
  // const mission = useRef(null);

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
      <div className={Homestyles.displaydiv} ref={ref[0]}>
        <div className={Homestyles.displayfullrow}>
          {/* Left side banner */}
          <div className={`${Homestyles.displaybanner}`}>
            {ContentData &&
              ContentData[2].map((img) => {
                return <Bannerimg img={img} />;
              })}
          </div>
          {/* right side banner */}

          <div className={`${Homestyles.displayheadline}`}>
            {ContentData &&
              ContentData[1].map((item) => {
                return (
                  <div className="m-2">
                    <Imageblock
                      img={item.img}
                      title={item.title}
                      text={item.subtext}
                      hidheading={item.hidheading}
                      hidtext={item.hidtext}
                    />
                  </div>
                );
              })}
          </div>
        </div>
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
    </>
  );
}
export default forwardRef(Homepage);
