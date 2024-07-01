import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";

export const Education = () => {
    return (
        <section className="education" id="education">
            <Container>
                <Row>
                    <Col>
                        <div className="education-bx">
                            <h2>Education</h2>
                            <Row className="education-content">
                                <Col className="education-item">
                                    <div className="education-content-inner">
                                        <h3>B.Tech</h3>
                                        <h4>IIIT Bhubaneswar</h4>
                                        <ul>
                                            <li>Information Technology</li>
                                            <li>CGPA: 9.01</li>
                                            <p>December 2021 - Present</p>
                                        </ul>
                                    </div>
                                </Col>
                                <Col className="education-item">
                                    <div className="education-content-inner">
                                        <h3>12th</h3>
                                        <h4>Future Bhubaneswar School, Bhubaneswar</h4>
                                        <ul>
                                            <li>Science</li>
                                            <li>Grade: 91.25 %</li>
                                            <p>2020 - 2021</p>
                                        </ul>
                                    </div>
                                </Col>
                                <Col className="education-item">
                                    <div className="education-content-inner">
                                        <h3>10th</h3>
                                        <h4>D.A.V Public School,<br/> Bhubaneswar</h4>
                                        <ul>
                                            <li>Grade: 97.8 %</li>
                                            <p>2018 - 2019</p>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Background" />
        </section>
    );
};
