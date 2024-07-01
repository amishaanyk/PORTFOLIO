import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import axios from "axios";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        });
    };

// Ensure the URL is correct
const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    try {
        const response = await axios.post('/contact', formDetails, {
    headers: { 'Content-Type': 'application/json' }

        });

        if (response.status === 200) {
            setStatus({ success: true, message: 'Message sent successfully' });
            setFormDetails(formInitialDetails); // Reset form after successful submission
        } else {
            setStatus({ success: false, message: 'Something went wrong, please try again later.' });
        }
    } catch (error) {
        console.error('Error sending message:', error); // Log the error
        if (error.response) {
            // Server responded with a status other than 2xx
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
        } else if (error.request) {
            // Request was made but no response received
            console.error('Request data:', error.request);
        } else {
            // Something else happened while setting up the request
            console.error('Error message:', error.message);
        }
        setStatus({ success: false, message: 'Failed to send message. Please try again later.' });
    } finally {
        setButtonText('Send');
    }
};


    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                            }
                        </TrackVisibility>
                    </Col>
                    <Col md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Get In Touch</h2>
                                    <form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col sm={6} className="px-1">
                                                <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                            </Col>
                                            <Col sm={6} className="px-1">
                                                <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                            </Col>
                                            <Col sm={6} className="px-1">
                                                <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                            </Col>
                                            <Col sm={6} className="px-1">
                                                <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                            </Col>
                                            <Col sm={12} className="px-1">
                                                <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                                <button type="submit"><span>{buttonText}</span></button>
                                            </Col>
                                            {
                                                status.message &&
                                                <Col sm={12}>
                                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                                </Col>
                                            }
                                        </Row>
                                    </form>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
