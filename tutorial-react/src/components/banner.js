import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = ["Web Developer", "AI/ML Enthusiast"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text]);

    const handleClick = (type) => {
        if (type === 'github') {
            window.open('https://github.com/amishaanyk', '_blank');
        } else if (type === 'resume') {
            window.open('https://drive.google.com/file/d/1aeX0V1Znm20uHgBfoUJbcv16TFuNJDfk/view?usp=sharing', '_blank');
        }
    }

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <>
                                        <h1>{`Hi, I'm Amisha!`}</h1>
                                        <h2><span className="wrap">{text}</span></h2>
                                    </>
                                    <p>I'm a Final Year Student at IIIT Bhubaneswar with experience in JavaScript and AI/ML, and expertise in frameworks like ReactJS and NodeJS. I'm a quick learner and can collaborate to create efficient, scalable, and user-friendly solutions that solve real-world problems.</p>
                                    <div className="d-flex">
                                        <Button variant="dark" className="me-2" onClick={() => handleClick('github')}>GitHub</Button>
                                        <Button variant="secondary" onClick={() => handleClick('resume')}>Resume</Button>
                                    </div>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Image" />
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
