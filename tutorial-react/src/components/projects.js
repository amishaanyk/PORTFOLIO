import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./projectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import pjim1 from "../assets/img/pjim1.png";
import projImg2 from "../assets/img/pjim2.png";
import projImg3 from "../assets/img/pjim3.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    const projects = [
        {
            title: "JobZee",
            description: "Job Seeking Website",
            imgUrl: pjim1,
            githubLink: "https://github.com/amishaanyk/JOB_SEEKING_WEBSITE",
            websiteLink: "https://job-seeking-web-application-an.netlify.app/login"
        },
        {
            title: "ZeeCare",
            description: "Doctor Appointment System Website",
            imgUrl: projImg2,
            githubLink: "https://github.com/amishaanyk/docConnect_Backend",
            websiteLink: "https://doc-connect-an.netlify.app/"
        },
        {
            title: "Dream Nest",
            description: "Vacation House On Rent",
            imgUrl: projImg3,
            githubLink: "https://github.com/amishaanyk/DREAM_NEST",
            websiteLink: "https://dream-nest-9m0j7k3im-amisha-nayaks-projects.vercel.app"
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>
                                </div>
                            }
                        </TrackVisibility>
                        <Tab.Container id="projects-tab" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                {/* Add other Nav.Items for other tabs as needed */}
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row className="justify-content-center">
                                        {projects.map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                {/* Add other Tab.Pane for other tabs as needed */}
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="Background" />
        </section>
    );
}
