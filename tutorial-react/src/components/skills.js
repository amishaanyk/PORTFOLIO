import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p> I specialize in building dynamic and responsive web applications. My frontend expertise includes HTML, CSS, and React.js, enabling me to create engaging user interfaces. On the backend, I work with Node.js and Express.js to develop robust server-side applications, and I use MongoDB for efficient data management. Additionally, I have experience in AI and Machine Learning, allowing me to integrate intelligent features into my projects.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>Frontend</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Backend</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>AI/ML</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    );
}