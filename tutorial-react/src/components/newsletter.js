import { Col, Row, Container } from "react-bootstrap";
import 'animate.css';
import htmlLogo from "../assets/img/htmlLogo.svg";
import cssLogo from "../assets/img/cssLogo.svg";
import jsLogo from "../assets/img/jsLogo.svg";
import reactLogo from "../assets/img/reactLogo.svg";
import nodeLogo from "../assets/img/nodeLogo.svg";
import expressLogo from "../assets/img/expressLogo.png";
import mongoLogo from "../assets/img/mongoLogo.svg";
import gitLogo from "../assets/img/git.svg";
import tailwindLogo from "../assets/img/tailwind-css-wordmark.svg";

// Define a custom CSS class for the purple background
const purpleBackground = {
    backgroundColor: "#B3446C", // Purple color
    padding: "20px", // Add padding for spacing
    borderRadius: "8px", // Optional: Add rounded corners
};

export const SkillsShowcase = () => {
    const logos = [
        { src: htmlLogo, alt: "HTML Logo" },
        { src: cssLogo, alt: "CSS Logo" },
        { src: jsLogo, alt: "JavaScript Logo" },
        { src: reactLogo, alt: "ReactJS Logo" },
        { src: nodeLogo, alt: "NodeJS Logo" },
        { src: expressLogo, alt: "ExpressJS Logo" },
        { src: mongoLogo, alt: "MongoDB Logo" },
        { src: gitLogo, alt: "Git Logo" },
        { src: tailwindLogo, alt: "Tailwind CSS Logo" }
    ];

    return (
        <section className="skills-showcase" id="skills-showcase">
            <Container style={purpleBackground}>
                <Row className="align-items-center">
                    <Col>
                        <div className="skills-showcase-bx wow slideInUp">
                            <div className="skills-logos">
                                {logos.map((logo, index) => (
                                    <div className="skill-logo" key={index}>
                                        <img src={logo.src} alt={logo.alt} className="animate__animated animate__bounceIn" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
