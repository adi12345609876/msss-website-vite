import React, { forwardRef, useRef } from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import heroimg from "../assets/img/hero.jpeg";
import b1 from "../assets/img/b1.png";
import b2 from "../assets/img/b2.jpg";
import b3 from "../assets/img/b3.jpg";
import card1 from "../assets/img/card1.jpg";
import card2 from "../assets/img/card2.jpg";
import Card from "../components/card";
import Homestyles from "../styles/modules/Homepage.module.scss";
import { Divider } from "../components/minicomponents";
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
    <div className={`${props.i % 2 == 0 ? "bg-[#edf2fb]" : "bg-white"}`}>
      <Container fluid key={props.id}>
        <Row
          className={`${Homestyles.ContentContainer} ${
            props.rev ? Homestyles.ContentReverse : Homestyles.ContentNoreverse
          }`}
        >
          {/* Text */}
          <Col
            className={`${Homestyles.ContentTextContainer} ${
              props.rev ? "mr-96" : ""
            }`}
          >
            <h1 className={Homestyles.ContentTextTitle}>{props.title}</h1>
            <p className={Homestyles.ContentTextPara}>{props.para}</p>
          </Col>
          {/* Img */}
          <Col className={Homestyles.ContentImageContainer}>
            <img
              src={props.img}
              className={`${Homestyles.ContentImageFile} ${
                props.rev ? "ml-[10dvh]" : ""
              }`}
            />
          </Col>
        </Row>
      </Container>
      <Divider />
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
          className={`${Homestyles.heroImage} shadow`}
          src={heroimg}
          alt="Modern school"
        />
      </div>
      {/*Display section */}
      <div className={Homestyles.displaydiv} ref={ref[0]}>
        <Container className={Homestyles.displaycontainer}>
          <Row className={Homestyles.displayfullrow}>
            {/* Left side banner */}
            <Col className={`${Homestyles.displaybanner}`}>
              <Bannerimg img={b2} />
              <Bannerimg img={b1} />
              <Bannerimg img={b3} />
            </Col>
            {/* right side banner */}

            {/* News column */}
            <Col>
              {/* <div className="w-10 h-10 bg-cyan-300"></div> */}
              <Imageblock
                img={card1}
                hidheading="News 1"
                hidtext="We have built a new canteen to feed young anime fans"
                text="new canteen"
                title="News"
              />
            </Col>
            {/* <div className="w-10 h-10 bg-cyan-300"></div> */}

            {/* Athletics column */}
            <Col>
              <Imageblock
                hidheading="News 2"
                hidtext="Our playground are open for all kids to play"
                img={card2}
                text="new playground"
                title="Athletics"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Content section */}

      {ContentData &&
        ContentData.toReversed().map((item) => {
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
