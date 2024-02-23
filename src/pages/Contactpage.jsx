import React from "react";
import location_icon from "../assets/icons/location-64.png";
import phone_icon from "../assets/icons/phone-100.png";
import ContactStyle from "../styles/modules/Contact.module.scss";
import { Col, Row } from "react-bootstrap";
import { Divider } from "../components/minicomponents";

function Contactpage() {
  return (
    <div className={ContactStyle.Contact}>
      <h1 className={ContactStyle.ContactTitle}>Contact Us</h1>
      <Row className={ContactStyle.ContactContainerEntire}>
        <Col className={ContactStyle.ContactContainerSection1}>
          <div className={ContactStyle.ContactIconContainer}>
            <img
              src={phone_icon}
              alt="Phone"
              className={ContactStyle.ContactIcon}
            />
          </div>

          <h3 className={ContactStyle.ContactText}>
            Phone : 9144-22240110 <br />
            Email : modernnglr@gmail.com
          </h3>
        </Col>
        <Col className={ContactStyle.ContactContainerSection2}>
          <div className={ContactStyle.ContactIconContainer}>
            <img
              src={location_icon}
              alt="location"
              className={ContactStyle.ContactIcon}
            />
          </div>
          <h3 className={ContactStyle.ContactText}>
            MODERN SENIOR SECONDARY SCHOOL ,<br /> AGS OFFICE COLONY ,<br />
            NANGANALLUR,
            <br />
            CHENNAI-600061.
          </h3>
        </Col>
      </Row>
      <Divider />
      <div>
        <h1 className={ContactStyle.ContactTitle}>Location</h1>
        <div className={ContactStyle.GmapContainer}>
          <iframe
            className={ContactStyle.GmapFile}
            src="https://maps.google.com/maps?q=Modern%20Senior%20Sec%20School%206th%20St,%20Lakshmi%20Nagar%20IV%20Stage,%20AG'S%20Office%20Colony,%20Nanganallur,%20Chennai,%20Tamil%20Nadu%20600061&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            // width="800"
            // height="450"
            style={{ border: "0" }}
            allowfullscreen="true"
            loading="lazy"
          ></iframe>
        </div>
        {/* <iframe
          width="600"
          height="450"
          src="https://www.google.com/maps/embed/v1/place?q=.6th+St,+Lakshmi+Nagar+IV+Stage,+AG'S+Office+Colony,+Nanganallur,+Chennai,+Tamil+Nadu+600061&key=..."
        ></iframe> */}
      </div>
    </div>
  );
}

export default Contactpage;
