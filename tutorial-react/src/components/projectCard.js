import { Col } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Import both icons from react-icons/fa

export const ProjectCard = ({ title, description, imgUrl, githubLink, websiteLink }) => {
    return (
        <Col sm={9} md={7} className="mb-4">
            <div className="proj-imgbx">
                <img src={imgUrl} alt={title} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <div className="icons-container">
                        {githubLink && (
                            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                                <FaGithub className="icon" style={{ color: "#333", fontSize: "2rem", marginRight: "20px" }} />
                            </a>
                        )}
                        {websiteLink && (
                            <a href={websiteLink} target="_blank" rel="noopener noreferrer">
                                <span className="visually-hidden">Website Link</span>
                                <FaExternalLinkAlt className="icon" style={{ color: "#333", fontSize: "2rem", marginLeft: "20px" }} />
                            </a>
                        )}
                    </div>
                </div>                                                                                        
            </div>
        </Col>
    );
};

