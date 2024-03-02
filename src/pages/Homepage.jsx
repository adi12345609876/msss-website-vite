import React, { forwardRef } from "react";
import { Image, Col, Button } from "react-bootstrap";
import heroimg from "../assets/img/hero.jpeg";

import Card from "../components/card";
import Homestyles from "../styles/modules/Homepage.module.scss";

import ContentData from "../data/Home-ContentBloack.json";
import { useNavigate } from "react-router-dom";

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
      {/* Updates */}
      {/* <div className="flex items-center justify-center">
        <div className={Homestyles.UpdatesContainer}>
          <h1 className={Homestyles.UpdatesHeading}>Updates</h1>
          {ContentData &&
            ContentData[3].map((item, index) => {
              return (
                <div>
                  <p className={Homestyles.UpdatesText}>
                    {index + 1}.{item.updatesText}
                  </p>
                </div>
              );
            })}
        </div>
      </div> */}
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
