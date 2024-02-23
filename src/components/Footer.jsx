import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import FooterStyles from "../styles/modules/footer.module.scss";
import logo from "../assets/img/logo.png";
function Footer() {
  return (
    <footer>
      <>
        <div className={FooterStyles.footerfullrow}>
          <div>
            <Image src={logo} className={FooterStyles.footerlogo} />
            <p className={FooterStyles.footercredits}>
              This website was developed by modern school student{" "}
              <a
                href="https://linktr.ee/rAdinath"
                className="text-black"
                target="_blank"
              >
                {"R.Adinath"}
              </a>{" "}
              with teachers
            </p>
          </div>
        </div>
      </>
    </footer>
  );
}

export default Footer;
