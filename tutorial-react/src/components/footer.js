import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SkillsShowcase } from './newsletter';
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <SkillsShowcase />
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/james-plamondon-369359bb/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
                            <a href="https://www.facebook.com/james.plamondon74/" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Facebook" /></a>
                            <a href="#" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Instagram" /></a>
                        </div>
                        <p>Copyright 2024. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
