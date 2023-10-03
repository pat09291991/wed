import React, { useRef, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import emailjs from 'emailjs-com';

export const Rsvp = () => {
    const fullName = useRef();
    const [decision, setDecision] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [alreadySent, setAlreadySent] = useState(localStorage.getItem('alreadySent'));

    const handleSubmit = () => {
        setButtonDisabled(true)
        emailjs.send(
            'service_63m7nnh', // Replace with your EmailJS service ID
            'rsvp_template', // Replace with your EmailJS template ID
            {
                from_name: fullName.current.value, // Replace with the recipient's name
                message: "RSVP decision: " + decision, // Replace with the message content
            },
            'FDwHyLTkNCXPh-Or0' // Replace with your EmailJS user ID
        )
            .then((response) => {
                setButtonDisabled(false)
                localStorage.setItem('alreadySent', true)
                setAlreadySent(true)
                console.log('Email sent successfully:', response);
            })
            .catch((error) => {
                console.error('Email sending failed:', error);
            });
    }

    const handleChange = (e) => {
        setDecision(e.target.value);
    }

    return (
        <Container style={{ height: '100vh' }} className="text-start d-flex flex-column align-items-center justify-content-center w-100">
            {!alreadySent ?
                <>
                    <h1>Kindly RSVP</h1>
                    <p>before Oct. 30, 2023</p>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicFullname">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control ref={fullName} type="fullname" placeholder="Enter your fullname" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <div className="mb-3">
                                <div key={`inline-radio`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Agree with pleasure"
                                        value="agree"
                                        name="group1"
                                        type={'radio'}
                                        id={`inline-radio-1`}
                                        onChange={handleChange}
                                    />
                                    <Form.Check
                                        inline
                                        label="Decline with regrets"
                                        name="group1"
                                        value="decline"
                                        type={'radio'}
                                        id={`inline-radio-2`}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </Form.Group>
                        <Button disabled={buttonDisabled} variant="primary" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                </>
                :
                <h1 className="text-center">Thank you for submitting RSVP!!</h1>
            }
        </Container>
    )
}